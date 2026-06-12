function Feedback({
  answer,
  selectedQuestion,
  score,
  feedback,
  goDashboard
}) {
  const cleanFeedback = feedback
    .replace(/Score:\s*\d+\/10/i, "")
    .replace(/Feedback:/i, "")
    .trim();

  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center"
      }}
    >
      <h1>AI Feedback</h1>

      <h3>Question</h3>
      <p>{selectedQuestion}</p>

      <h3>Your Answer</h3>
      <p>{answer}</p>

      <h2>Score: {score}/10</h2>

      <h3>Feedback</h3>

      <div
        style={{
          background: "#f4f4f4",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "left",
          lineHeight: "1.6"
        }}
      >
        {cleanFeedback}
      </div>

      <br />

      <button onClick={goDashboard}>
        Back To Dashboard
      </button>
    </div>
  );
}

export default Feedback;