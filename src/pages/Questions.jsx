function Questions({
  startInterview,
  goDashboard
}) {
  const questions = [
    {
      question: "What is React?"
    },
    {
      question: "What is Virtual DOM?"
    },
    {
      question: "What is a Linked List?"
    },
    {
      question: "What is a REST API?"
    }
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h1>Interview Questions</h1>

      <button onClick={goDashboard}>
        Back To Dashboard
      </button>

      <br />
      <br />

      {questions.map((item, index) => (
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

          <button
            onClick={() =>
              startInterview(item.question)
            }
          >
            Start Interview
          </button>
        </div>
      ))}
    </div>
  );
}

export default Questions;