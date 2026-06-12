function Interview({
  question,
  submitAnswer,
  goBack
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
        onClick={goBack}
        style={{
          marginBottom: "20px"
        }}
      >
        ← Back
      </button>

      <h1>Interview Round</h1>

      <h2>{question}</h2>

      <textarea
        placeholder="Type your answer here..."
        rows="10"
        cols="80"
        id="answerBox"
        style={{
          padding: "10px",
          borderRadius: "10px",
          width: "100%"
        }}
        onKeyDown={(e) => {
          if (
            e.ctrlKey &&
            e.key === "Enter"
          ) {
            const answer =
              document.getElementById(
                "answerBox"
              ).value;

            submitAnswer(answer);
          }
        }}
      />

      <br />
      <br />

      <button
        onClick={() => {
          const answer =
            document.getElementById(
              "answerBox"
            ).value;

          submitAnswer(answer);
        }}
      >
        Submit Answer
      </button>
    </div>
  );
}

export default Interview;