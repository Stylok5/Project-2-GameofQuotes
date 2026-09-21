import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loader-text">Summoning ravens...</p>
    </div>
  );
};

export default Loader;