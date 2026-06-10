function Progress({
  interviewCount,
  goDashboard
}) {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Progress</h1>

      <h2>
        Interviews Completed:
        {" "}
        {interviewCount}
      </h2>

      <button
        onClick={goDashboard}
      >
        Back To Dashboard
      </button>
    </div>
  );
}

export default Progress;
