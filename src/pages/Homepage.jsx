import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../consts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/characters");
  };

  return (
    <div className="homepage">
      <button onClick={onClick}>Characters</button>
    </div>
  );
};

export default Homepage;
