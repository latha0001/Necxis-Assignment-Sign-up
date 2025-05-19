"use client"

import { Box, AppBar, Avatar, Button, Container, Paper, Toolbar, Typography } from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"
import { useAuth } from "@/lib/auth-context"

export default function Dashboard() {
  const { user, signOut } = useAuth()

  if (!user) {
    return <Typography>Loading...</Typography>
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {user.image && <Avatar src={user.image} alt={user.name || "User"} />}
            <Button color="inherit" onClick={signOut} startIcon={<LogoutIcon />}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome, {user.name}!
          </Typography>
          <Typography variant="body1">You are signed in as {user.email}</Typography>
        </Paper>
      </Container>
    </Box>
  )
}
