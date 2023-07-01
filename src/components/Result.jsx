function Result() {
  return (
    <div className="result">
      <h1 className="section-title head-res">Your Result</h1>
      <div className="oval">
        <p className="result-score">
          <span>76</span> of 100
        </p>
      </div>
      <div className="remark">
        <h3 className="result-rank">Great</h3>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}

export default Result;
