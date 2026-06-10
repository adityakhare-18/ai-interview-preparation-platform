 function History({
  history,
  goDashboard
}) {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Interview History</h1>

      <button
        onClick={goDashboard}
      >
        Back To Dashboard
      </button>

      <br />
      <br />

      {history.length === 0 ? (
        <h3>No interviews attempted yet.</h3>
      ) : (
        history.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px",
              boxShadow:
                "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            <h3>{item.question}</h3>

            <p>
              <strong>Answer:</strong>
              {" "}
              {item.answer}
            </p>

            <p>
              <strong>Score:</strong>
              {" "}
              {item.score}/10
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default History;