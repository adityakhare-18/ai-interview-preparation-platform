function History({
  history,
  goDashboard
}) {
  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "900px",
        margin: "0 auto"
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

      <h1
        style={{
          textAlign: "center"
        }}
      >
        📜 Interview History
      </h1>

      {history.length === 0 ? (
        <h3
          style={{
            textAlign: "center"
          }}
        >
          No interviews attempted yet.
        </h3>
      ) : (
        history.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "15px",
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >
            <h2>
              Attempt #{history.length - index}
            </h2>

            <p>
              <strong>
                Question:
              </strong>
              {" "}
              {item.question}
            </p>

            <p>
              <strong>
                Score:
              </strong>
              {" "}
              {item.score}/10
            </p>

            <details>
              <summary>
                View Answer
              </summary>

              <p
                style={{
                  marginTop: "10px"
                }}
              >
                {item.answer}
              </p>
            </details>
          </div>
        ))
      )}
    </div>
  );
}

export default History;