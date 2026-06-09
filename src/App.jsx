import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState("");

  const handleLogin = (email) => {
    setUser(email);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      {user ? (
        <Dashboard user={user} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;