function MockInterview({
  submitAnswer
}) {
  const questions = [
    "What is React?",
    "What is Virtual DOM?",
    "What is a Linked List?",
    "What is a REST API?"
  ];

  const randomQuestion =
    questions[
      Math.floor(
        Math.random() *
          questions.length
      )
    ];

  return (
    <div style={{ padding: "30px" }}>
      <h1>Mock Interview</h1>

      <p>
        Answer the technical question below.
      </p>

      <h2>{randomQuestion}</h2>

      <textarea
        id="mockAnswer"
        rows="8"
        cols="60"
        placeholder="Type your answer..."
      />

      <br />
      <br />

      <button
        onClick={() => {
          const answer =
            document.getElementById(
              "mockAnswer"
            ).value;

          submitAnswer(answer);
        }}
      >
        Submit Answer
      </button>
    </div>
  );
}

export default MockInterview;