import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Questions from "./pages/Questions";

function App() {
  const [user, setUser] = useState("");
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleLogin = (email) => {
    setUser(email);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  if (currentPage === "questions") {
    return (
      <Questions />
    );
  }

  return (
    <Dashboard
      user={user}
      openQuestions={() => setCurrentPage("questions")}
    />
  );
}

export default App;