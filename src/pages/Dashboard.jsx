import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Dashboard({
  user,
  interviewCount,
  history,
  openQuestions,
  openProgress,
  openMockInterview,
  openHistory,
  onLogout
}) {
  const averageScore =
    history.length > 0
      ? (
          history.reduce(
            (sum, item) =>
              sum + item.score,
            0
          ) / history.length
        ).toFixed(1)
      : 0;

  const bestScore =
    history.length > 0
      ? Math.max(
          ...history.map(
            (item) => item.score
          )
        )
      : 0;

  const handleLogout = async () => {
    await signOut(auth);
    onLogout();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #4f46e5, #7c3aed)",
        padding: "40px",
        color: "white",
        position: "relative"
      }}
    >
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Logout
      </button>

      <h1
        style={{
          textAlign: "center",
          fontSize: "42px"
        }}
      >
        AI Interview Platform
      </h1>

      <h2
        style={{
          textAlign: "center"
        }}
      >
        Welcome, {user}
      </h2>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px"
        }}
      >
        <h3>
          Interviews Completed:{" "}
          {interviewCount}
        </h3>

        <h3>
          Average Score:{" "}
          {averageScore}/10
        </h3>

        <h3>
          Best Score:{" "}
          {bestScore}/10
        </h3>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "40px"
        }}
      >
        <div
          onClick={openQuestions}
          style={cardStyle}
        >
          <h2>📚 Questions</h2>

          <p>
            Practice technical
            interview questions
          </p>
        </div>

        <div
          onClick={openProgress}
          style={cardStyle}
        >
          <h2>📈 Progress</h2>

          <p>
            Track your interview
            preparation
          </p>
        </div>

        <div
          onClick={openMockInterview}
          style={cardStyle}
        >
          <h2>🎤 Mock Interview</h2>

          <p>
            Attempt a random
            interview question
          </p>
        </div>

        <div
          onClick={openHistory}
          style={cardStyle}
        >
          <h2>📜 History</h2>

          <p>
            View previous
            interview attempts
          </p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  color: "#111827",
  padding: "25px",
  borderRadius: "15px",
  width: "220px",
  cursor: "pointer",
  textAlign: "center",
  boxShadow:
    "0 8px 20px rgba(0,0,0,0.2)"
};

export default Dashboard;