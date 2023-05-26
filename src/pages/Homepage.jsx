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
      {/* <h1 className="homeTitle">
        Find quotes of your favorite Game Of Thrones characters by typing their
        name in the search bar or by clicking on one of the names
      </h1> */}
      <button onClick={onClick}>Characters</button>
    </div>
  );
};

export default Homepage;
