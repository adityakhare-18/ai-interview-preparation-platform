import { useState } from "react";

import {
  collection,
  addDoc,
  getDocs,
  query,
  where
} from "firebase/firestore";

import { db } from "./firebase";

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

  const [feedback, setFeedback] =
    useState("");

  const [score, setScore] =
    useState(0);

  const [loading, setLoading] =
    useState(false);

  const [interviewCount, setInterviewCount] =
    useState(0);

  const [history, setHistory] =
    useState([]);

  const handleLogin = async (
    email
  ) => {
    setUser(email);

    try {
      const q = query(
        collection(
          db,
          "interviews"
        ),
        where(
          "user",
          "==",
          email
        )
      );

      const snapshot =
        await getDocs(q);

      const records =
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

      setHistory(records);

      setInterviewCount(
        records.length
      );
    } catch (error) {
      console.error(error);
    }
  };

  const startInterview = (
    question
  ) => {
    setSelectedQuestion(question);

    setCurrentPage(
      "interview"
    );
  };

  const submitAnswer = async (
    answer,
    question = selectedQuestion
  ) => {
    try {
      setLoading(true);

      setUserAnswer(answer);

      setSelectedQuestion(
        question
      );

      const { getFeedback } =
        await import("./gemini");

      const result =
        await getFeedback(
          question,
          answer
        );

      const scoreMatch =
        result.match(
          /Score:\s*(\d+)/i
        );

      const extractedScore =
        scoreMatch
          ? Number(scoreMatch[1])
          : 0;

      setScore(
        extractedScore
      );

      setFeedback(result);

      const newRecord = {
        user,
        question,
        answer,
        score:
          extractedScore,
        createdAt:
          new Date()
      };

      await addDoc(
        collection(
          db,
          "interviews"
        ),
        newRecord
      );

      setHistory((prev) => [
        newRecord,
        ...prev
      ]);

      setInterviewCount(
        (prev) => prev + 1
      );

      setCurrentPage(
        "feedback"
      );
    } catch (error) {
      console.error(error);

      alert(
        error.message
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setUser("");

    setHistory([]);

    setInterviewCount(0);

    setCurrentPage(
      "dashboard"
    );
  };

  if (!user) {
    return (
      <Login
        onLogin={
          handleLogin
        }
      />
    );
  }

  if (loading) {
    return (
      <div
        style={{
          minHeight:
            "100vh",
          display: "flex",
          flexDirection:
            "column",
          justifyContent:
            "center",
          alignItems:
            "center"
        }}
      >
        <h1>
          🤖 AI is analyzing
          your answer...
        </h1>

        <p>
          Please wait a few
          seconds.
        </p>
      </div>
    );
  }

  if (
    currentPage ===
    "questions"
  ) {
    return (
      <Questions
        startInterview={
          startInterview
        }
        goDashboard={() =>
          setCurrentPage(
            "dashboard"
          )
        }
      />
    );
  }

  if (
    currentPage ===
    "interview"
  ) {
    return (
      <Interview
        question={
          selectedQuestion
        }
        submitAnswer={
          submitAnswer
        }
        goBack={() =>
          setCurrentPage(
            "questions"
          )
        }
      />
    );
  }

  if (
    currentPage === "mock"
  ) {
    return (
      <MockInterview
        submitAnswer={
          submitAnswer
        }
        goBack={() =>
          setCurrentPage(
            "dashboard"
          )
        }
      />
    );
  }

  if (
    currentPage ===
    "feedback"
  ) {
    return (
      <Feedback
        answer={
          userAnswer
        }
        selectedQuestion={
          selectedQuestion
        }
        score={score}
        feedback={
          feedback
        }
        goDashboard={() =>
          setCurrentPage(
            "dashboard"
          )
        }
      />
    );
  }

  if (
    currentPage ===
    "progress"
  ) {
    return (
      <Progress
        interviewCount={
          interviewCount
        }
        goDashboard={() =>
          setCurrentPage(
            "dashboard"
          )
        }
      />
    );
  }

  if (
    currentPage ===
    "history"
  ) {
    return (
      <History
        history={history}
        goDashboard={() =>
          setCurrentPage(
            "dashboard"
          )
        }
      />
    );
  }

  return (
    <Dashboard
      user={user}
      interviewCount={
        interviewCount
      }
      history={history}
      openQuestions={() =>
        setCurrentPage(
          "questions"
        )
      }
      openProgress={() =>
        setCurrentPage(
          "progress"
        )
      }
      openMockInterview={() =>
        setCurrentPage(
          "mock"
        )
      }
      openHistory={() =>
        setCurrentPage(
          "history"
        )
      }
      onLogout={
        handleLogout
      }
    />
  );
}

export default App;