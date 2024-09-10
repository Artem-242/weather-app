import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { AuthProvider, useAuth } from "../contexts/authContexts/AuthProvider"
import { onAuthStateChanged, getAuth } from "firebase/auth";

// Мокаем firebase/auth
jest.mock("firebase/auth", () => ({
   getAuth: jest.fn(() => ({})), // Мок для getAuth
   onAuthStateChanged: jest.fn(),
}));

const MockComponent = () => {
   const { currentUser, userLoggedIn, isEmailUser } = useAuth();
   return (
      <div>
         <p data-testid="userLoggedIn">{userLoggedIn ? "true" : "false"}</p>
         <p data-testid="isEmailUser">{isEmailUser ? "true" : "false"}</p>
         <p data-testid="currentUser">{currentUser ? currentUser.email : "null"}</p>
      </div>
   );
};

describe("AuthProvider", () => {
   afterEach(() => {
      jest.clearAllMocks();
   });

   it("пользователь не залогинен", async () => {
      // Мокаем результат, когда нет пользователя
      (onAuthStateChanged as jest.Mock).mockImplementationOnce((auth, callback) => {
         callback(null); // Нет пользователя
         return jest.fn();
      });

      render(
         <AuthProvider>
            <MockComponent />
         </AuthProvider>
      );

      await waitFor(() => {
         expect(screen.getByTestId("userLoggedIn").textContent).toBe("false");
         expect(screen.getByTestId("currentUser").textContent).toBe("null");
      });
   });

   it("пользователь залогинен через email", async () => {
      const mockUser = {
         email: "test@example.com",
         providerData: [{ providerId: "password" }],
      };

      // Мокаем результат, когда пользователь залогинен через email
      (onAuthStateChanged as jest.Mock).mockImplementationOnce((auth, callback) => {
         callback(mockUser); // Возвращаем mock пользователя
         return jest.fn();
      });

      render(
         <AuthProvider>
            <MockComponent />
         </AuthProvider>
      );

      await waitFor(() => {
         expect(screen.getByTestId("userLoggedIn").textContent).toBe("true");
         expect(screen.getByTestId("currentUser").textContent).toBe(mockUser.email);
         expect(screen.getByTestId("isEmailUser").textContent).toBe("true");
      });
   });
});
