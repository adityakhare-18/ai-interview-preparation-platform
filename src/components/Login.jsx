import { useState } from "react";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase";

function Login({ onLogin }) {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert(
        "Please enter email and password."
      );
      return;
    }

    try {
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      onLogin(
        userCredential.user.email
      );
    } catch (error) {
      if (
        error.code ===
        "auth/invalid-credential"
      ) {
        alert(
          "Invalid email or password."
        );
      } else {
        alert(error.message);
      }
    }
  };

  const handleSignup = async () => {
    if (!email || !password) {
      alert(
        "Please enter email and password."
      );
      return;
    }

    if (password.length < 6) {
      alert(
        "Password must be at least 6 characters."
      );
      return;
    }

    try {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      alert(
        "Account created successfully!"
      );

      onLogin(
        userCredential.user.email
      );
    } catch (error) {
      if (
        error.code ===
        "auth/email-already-in-use"
      ) {
        alert(
          "This email is already registered."
        );
      } else if (
        error.code ===
        "auth/invalid-email"
      ) {
        alert(
          "Please enter a valid email."
        );
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, #4f46e5, #7c3aed)"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "350px",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            marginBottom: "30px"
          }}
        >
          AI Interview Platform
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          Login
        </button>

        <button
          onClick={handleSignup}
          style={{
            width: "100%",
            padding: "10px"
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;