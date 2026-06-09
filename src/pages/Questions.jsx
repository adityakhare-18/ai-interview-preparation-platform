function Questions() {
  const questions = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "What is Virtual DOM?",
      answer: "Virtual DOM is a lightweight copy of the real DOM."
    },
    {
      question: "What is a Linked List?",
      answer: "A Linked List is a linear data structure using nodes."
    },
    {
      question: "What is a REST API?",
      answer: "REST API is a way for applications to communicate."
    }
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h1>Interview Questions</h1>

      {questions.map((item, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}
        >
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default Questions;