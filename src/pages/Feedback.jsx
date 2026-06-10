function Feedback({
  answer,
  selectedQuestion,
  goDashboard
}) {
  const answers = {
    "What is React?": [
      "javascript",
      "library",
      "ui",
      "components"
    ],

    "What is Virtual DOM?": [
      "virtual",
      "dom",
      "real",
      "faster"
    ],

    "What is a Linked List?": [
      "node",
      "data",
      "structure",
      "linked"
    ],

    "What is a REST API?": [
      "api",
      "http",
      "client",
      "server"
    ]
  };

  const keywords =
    answers[selectedQuestion] || [];

  const userAnswer =
    answer.toLowerCase();

  let matches = 0;

  keywords.forEach((word) => {
    if (userAnswer.includes(word)) {
      matches++;
    }
  });

  let score = 0;

  if (matches === 0) {
    score = 0;
  } else if (matches <= 2) {
    score = 5;
  } else if (matches === 3) {
    score = 8;
  } else {
    score = 10;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>AI Feedback</h1>

      <h3>Question</h3>
      <p>{selectedQuestion}</p>

      <h3>Your Answer</h3>
      <p>{answer}</p>

      <h2>Score: {score}/10</h2>

      <button onClick={goDashboard}>
        Back To Dashboard
      </button>
    </div>
  );
}

export default Feedback;