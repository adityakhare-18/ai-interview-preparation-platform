function Dashboard({
  user,
  interviewCount,
  openQuestions,
  openProgress,
  openMockInterview
}) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dashboard</h1>

      <h2>Welcome {user}</h2>

      <h3>
        Interviews Completed: {interviewCount}
      </h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          justifyContent: "center"
        }}
      >
        <div
          onClick={openQuestions}
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "180px",
            cursor: "pointer",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >
          <h3>Questions</h3>

          <p>
            Practice interview questions
          </p>
        </div>

        <div
          onClick={openProgress}
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "180px",
            cursor: "pointer",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >
          <h3>Progress</h3>

          <p>
            Track your preparation
          </p>
        </div>

        <div
          onClick={openMockInterview}
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "180px",
            cursor: "pointer",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >
          <h3>Mock Interview</h3>

          <p>
            AI interview practice
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;