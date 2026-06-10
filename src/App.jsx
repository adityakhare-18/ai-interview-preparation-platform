import { useState, useEffect } from "react";

import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Questions from "./pages/Questions";
import Interview from "./pages/Interview";
import Feedback from "./pages/Feedback";
import Progress from "./pages/Progress";
import MockInterview from "./pages/MockInterview";
import History from "./pages/History";

function App() {
  const [user, setUser] = useState("");

  const [currentPage, setCurrentPage] =
    useState("dashboard");

  const [selectedQuestion, setSelectedQuestion] =
    useState("");

  const [userAnswer, setUserAnswer] =
    useState("");

  const [interviewCount, setInterviewCount] =
    useState(() => {
      const saved =
        localStorage.getItem("interviewCount");

      return saved ? Number(saved) : 0;
    });

  const [history, setHistory] =
    useState(() => {
      const saved =
        localStorage.getItem("history");

      return saved
        ? JSON.parse(saved)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "interviewCount",
      interviewCount
    );
  }, [interviewCount]);

  useEffect(() => {
    localStorage.setItem(
      "history",
      JSON.stringify(history)
    );
  }, [history]);

  const handleLogin = (email) => {
    setUser(email);
  };

  const startInterview = (question) => {
    setSelectedQuestion(question);
    setCurrentPage("interview");
  };

  const submitAnswer = (answer) => {
    setUserAnswer(answer);

    setInterviewCount(
      (prev) => prev + 1
    );

    const score = answer.trim()
      ? 10
      : 0;

    const newRecord = {
      question: selectedQuestion,
      answer: answer,
      score: score
    };

    setHistory((prev) => [
      newRecord,
      ...prev
    ]);

    setCurrentPage("feedback");
  };

  if (!user) {
    return (
      <Login onLogin={handleLogin} />
    );
  }

  if (currentPage === "questions") {
    return (
      <Questions
        startInterview={startInterview}
        goDashboard={() =>
          setCurrentPage("dashboard")
        }
      />
    );
  }

  if (currentPage === "interview") {
    return (
      <Interview
        question={selectedQuestion}
        submitAnswer={submitAnswer}
      />
    );
  }

  if (currentPage === "feedback") {
    return (
      <Feedback
        answer={userAnswer}
        selectedQuestion={
          selectedQuestion
        }
        goDashboard={() =>
          setCurrentPage("dashboard")
        }
      />
    );
  }

  if (currentPage === "progress") {
    return (
      <Progress
        interviewCount={
          interviewCount
        }
        goDashboard={() =>
          setCurrentPage("dashboard")
        }
      />
    );
  }

  if (currentPage === "mock") {
    return (
      <MockInterview
        submitAnswer={
          submitAnswer
        }
      />
    );
  }

  if (currentPage === "history") {
    return (
      <History
        history={history}
        goDashboard={() =>
          setCurrentPage("dashboard")
        }
      />
    );
  }

  return (
    <Dashboard
      user={user}
      interviewCount={interviewCount}
      openQuestions={() =>
        setCurrentPage("questions")
      }
      openProgress={() =>
        setCurrentPage("progress")
      }
      openMockInterview={() =>
        setCurrentPage("mock")
      }
      openHistory={() =>
        setCurrentPage("history")
      }
    />
  );
}

export default App;