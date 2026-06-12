import { useState } from "react";

function MockInterview({
  submitAnswer,
  goBack
}) {
  const questions = [
    "What is React?",
    "What is Virtual DOM?",
    "What is a Linked List?",
    "What is a REST API?"
  ];

  const [randomQuestion] = useState(
    questions[
      Math.floor(
        Math.random() *
          questions.length
      )
    ]
  );

  const [answer, setAnswer] =
    useState("");

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

      <h1>Mock Interview</h1>

      <p>
        Answer the technical question
        below.
      </p>

      <h2>{randomQuestion}</h2>

      <textarea
        rows="10"
        cols="80"
        value={answer}
        onChange={(e) =>
          setAnswer(e.target.value)
        }
        placeholder="Type your answer..."
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "10px"
        }}
      />

      <br />
      <br />

      <button
        onClick={() =>
          submitAnswer(
            answer,
            randomQuestion
          )
        }
      >
        Submit Answer
      </button>
    </div>
  );
}

export default MockInterview;