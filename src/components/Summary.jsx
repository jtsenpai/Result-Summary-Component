import data from "../data/data.json";
import Button from "./Button";

export default function Summary() {
  return (
    <div className="summary">
      <h2 className="section-title head-sum">Summary</h2>
      <div className="summary-items">
        {data.map((item) => (
          <div className="summary-item" key={item.key}>
            <div className="flex">
              <img className="img" src={item.icon} alt="icons" />
              <h3 className="summary-item-title" id={item.id}>
                {item.category}
              </h3>
            </div>
            <p className="summary-s">
              <span>{item.score}</span> / 100
            </p>
          </div>
        ))}
      </div>
      <Button />
    </div>
  );
}
