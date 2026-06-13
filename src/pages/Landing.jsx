function Landing({ openLogin }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, #4f46e5, #7c3aed)",
        color: "white",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1
        style={{
          fontSize: "55px",
          marginBottom: "20px"
        }}
      >
        AI Career Preparation Platform
      </h1>

      <p
        style={{
          fontSize: "22px",
          marginBottom: "40px"
        }}
      >
        Learn. Practice. Improve. Get Hired.
      </p>

      <button
        onClick={openLogin}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer"
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default Landing;