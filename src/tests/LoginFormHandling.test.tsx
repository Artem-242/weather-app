// LoginFormHandling.test.tsx
import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Login } from '../components/Auth/Login/Login'
import { useAuth } from '../contexts/authContexts/AuthProvider'
import { doSignInWithEmailAndPassword } from '../firebase/auth'
import '@testing-library/jest-dom'

// Мокируем зависимости
jest.mock('../contexts/authContexts/AuthProvider', () => ({
  useAuth: jest.fn()
}))

jest.mock('../firebase/auth', () => ({
  doSignInWithEmailAndPassword: jest.fn()
}))

const mockUseAuth = useAuth as jest.Mock
const mockDoSignInWithEmailAndPassword = doSignInWithEmailAndPassword as jest.Mock

describe('Login Form Handling', () => {
  beforeEach(() => {
    mockUseAuth.mockReturnValue({ userLoggedIn: false })
    mockDoSignInWithEmailAndPassword.mockResolvedValue({})
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('handles email and password input', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )

    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } })

    expect(screen.getByLabelText(/Email/i)).toHaveValue('test@example.com')
    expect(screen.getByLabelText(/Password/i)).toHaveValue('password123')
  })

  test('submits form and calls sign in function', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )

    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } })

    fireEvent.click(screen.getByRole('button', { name: /Sign In/i }))

    await waitFor(() => 
      expect(mockDoSignInWithEmailAndPassword).toHaveBeenCalledWith('test@example.com', 'password123')
    )
  })
})
