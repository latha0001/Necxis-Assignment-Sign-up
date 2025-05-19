"use client"

import { useState } from "react"
import { Button, Container, Paper, Typography, CircularProgress } from "@mui/material"
import GoogleIcon from "@mui/icons-material/Google"
import { useAuth } from "@/lib/auth-context"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const { signIn } = useAuth()

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    // Simulate a delay for the sign-in process
    setTimeout(() => {
      signIn("google")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Sign in to access your dashboard
        </Typography>

        <Button
          variant="contained"
          startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <GoogleIcon />}
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          sx={{
            mt: 2,
            backgroundColor: "#4285F4",
            "&:hover": {
              backgroundColor: "#357ae8",
            },
          }}
          fullWidth
        >
          {isLoading ? "Signing in..." : "Sign in with Google"}
        </Button>
      </Paper>
    </Container>
  )
}
