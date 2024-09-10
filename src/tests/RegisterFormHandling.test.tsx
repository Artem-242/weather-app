// RegisterFormHandling.test.tsx
import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Register } from '../components/Auth/Register/Register'
import { useAuth } from '../contexts/authContexts/AuthProvider'
import { doCreateUserWithEmailAndPassword } from '../firebase/auth'
import '@testing-library/jest-dom'

// Мокируем зависимости
jest.mock('../contexts/authContexts/AuthProvider', () => ({
   useAuth: jest.fn()
}))

jest.mock('../firebase/auth', () => ({
   doCreateUserWithEmailAndPassword: jest.fn()
}))

const mockUseAuth = useAuth as jest.Mock
const mockDoCreateUserWithEmailAndPassword = doCreateUserWithEmailAndPassword as jest.Mock

describe('Register Form Handling', () => {
   beforeEach(() => {
      mockUseAuth.mockReturnValue({ userLoggedIn: false })
      mockDoCreateUserWithEmailAndPassword.mockResolvedValue({})
   })

   afterEach(() => {
      jest.clearAllMocks()
   })

   test('handles email, password, and confirm password input', () => {
      render(
         <MemoryRouter>
            <Register />
         </MemoryRouter>
      )

      fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'test@example.com' } })
      fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'password123' } })
      fireEvent.change(screen.getByTestId('confirm-password-input'), { target: { value: 'password123' } })

      expect(screen.getByTestId('email-input')).toHaveValue('test@example.com')
      expect(screen.getByTestId('password-input')).toHaveValue('password123')
      expect(screen.getByTestId('confirm-password-input')).toHaveValue('password123')
   })

   test('submits form and calls register function', async () => {
      render(
         <MemoryRouter>
            <Register />
         </MemoryRouter>
      )

      fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'test@example.com' } })
      fireEvent.change(screen.getByTestId('password-input'), { target: { value: 'password123' } })
      fireEvent.change(screen.getByTestId('confirm-password-input'), { target: { value: 'password123' } })

      fireEvent.click(screen.getByTestId('submit-button'))

      await waitFor(() =>
         expect(mockDoCreateUserWithEmailAndPassword).toHaveBeenCalledWith('test@example.com', 'password123')
      )
   })
})
