import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/characters");
  };

  return (
    <div className="homepage">
      <button className="cta-button" onClick={onClick}>
        Explore Characters
      </button>
    </div>
  );
};

export default Homepage;