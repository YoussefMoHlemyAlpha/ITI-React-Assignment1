import './Stats.css';

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat">
        <p className="label">Clients</p>
        <h3>3K+</h3>
      </div>
      <div className="stat">
        <p className="label">Projects</p>
        <h3>10K+</h3>
      </div>
      <div className="stat">
        <p className="label">Employee</p>
        <h3>500+</h3>
      </div>
      <div className="stat">
        <p className="label">Years</p>
        <h3>10+</h3>
      </div>
    </div>
  );
};

export default Stats;

