import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Card,
  Stack,
} from "@mui/material";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const adminEmails = [
  "clousezr@miamioh.edu"
];

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [resetSent, setResetSent] = useState(false);

  const handleLogin = async () => {
    setError("");
    setResetSent(false);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userEmail = userCredential.user.email?.toLowerCase() || "";

      if (!adminEmails.includes(userEmail)) {
        await signOut(auth);
        setError("Access denied: Admins only");
        return;
      }

      // Successful login
      navigate("/");
    } catch (err: any) {
      if (err.code === "auth/user-not-found") {
        setError("User not found. Please check your email or sign up.");
      } else if (err.code === "auth/wrong-password") {
        setError(
          "Incorrect password. If you don't have a password, please reset it."
        );
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError(err.message || "Login failed");
      }
    }
  };

  const handlePasswordReset = async () => {
    setError("");
    setResetSent(false);

    if (!email) {
      setError("Please enter your email to reset your password.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (err: any) {
      setError(err.message || "Failed to send password reset email.");
    }
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              padding: 4,
              borderRadius: "30px",
              background: "linear-gradient(145deg, #e0f7fa, #ffffff)",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              border: "1px solid #cfe8fc",
              width: "100%",
            }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Login
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              {error && (
                <Typography color="error" align="center">
                  {error}
                </Typography>
              )}
              {resetSent && (
                <Typography color="success.main" align="center">
                  Password reset email sent! Check your inbox.
                </Typography>
              )}
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: "#3eb489", borderRadius: "30px" }}
                onClick={handleLogin}
              >
                Log In
              </Button>

              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  cursor: "pointer",
                  color: "#3eb489",
                  textAlign: "center",
                  userSelect: "none",
                }}
                onClick={handlePasswordReset}
              >
                Forgot password?
              </Typography>
            </Stack>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
