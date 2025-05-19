"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Define user type
type User = {
  name?: string | null
  email?: string | null
  image?: string | null
}

// Define auth context type
type AuthContextType = {
  user: User | null
  isLoading: boolean
  signIn: (provider: string) => void
  signOut: () => void
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  signIn: () => {},
  signOut: () => {},
})

// Auth provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Simulate loading the user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Mock sign in function
  const signIn = (provider: string) => {
    // For demo purposes, we'll simulate a Google sign-in
    if (provider === "google") {
      // Create a mock user
      const mockUser = {
        name: "Demo User",
        email: "demo@example.com",
        image: "https://ui-avatars.com/api/?name=Demo+User&background=random",
      }

      // Store user in state and localStorage
      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))

      // Redirect to dashboard
      router.push("/dashboard")
    }
  }

  // Sign out function
  const signOut = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>{children}</AuthContext.Provider>
}

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext)
