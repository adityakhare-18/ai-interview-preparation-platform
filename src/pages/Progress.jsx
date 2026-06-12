function Progress({
  interviewCount,
  goDashboard
}) {
  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center"
      }}
    >
      <button
        onClick={goDashboard}
        style={{
          marginBottom: "20px"
        }}
      >
        ← Back
      </button>

      <h1>📈 Progress</h1>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow:
            "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2>
          Interviews Completed
        </h2>

        <h1>
          {interviewCount}
        </h1>
      </div>
    </div>
  );
}

export default Progress;