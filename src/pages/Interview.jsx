function Interview({ question, submitAnswer }) {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Interview Round</h1>

      <h2>{question}</h2>

      <textarea
  placeholder="Type your answer here..."
  rows="8"
  cols="60"
  id="answerBox"
  onKeyDown={(e) => {
    if (e.ctrlKey && e.key === "Enter") {
      const answer =
        document.getElementById("answerBox").value;

      submitAnswer(answer);
    }
  }}
/>

      <br />
      <br />

      <button
        onClick={() => {
          const answer =
            document.getElementById("answerBox").value;

          submitAnswer(answer);
        }}
      >
        Submit Answer
      </button>
    </div>
  );
}

export default Interview;