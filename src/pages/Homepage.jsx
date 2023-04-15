import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../consts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}`);
        console.log(data);
        setAllData(data);
        setFilteredData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const inputValue = event.target.value.toLowerCase(); // Convert input value to lowercase
    let result = [];
    console.log(inputValue);
    result = allData.filter((data) => {
      const dataName = data.name.toLowerCase(); // Convert character name to lowercase
      return dataName.includes(inputValue); // Use includes() method for case-insensitive search
    });
    setFilteredData(result);
    setSearchValue(event.target.value);
  };

  const handleClick = () => {
    const inputValue = searchValue.toLowerCase(); // Convert input value to lowercase
    const filteredLength = filteredData.length;
    if (filteredLength === 1) {
      // If only one character is left in the filtered data, directly navigate to its page
      navigate(`/character/${filteredData[0].slug}`);
    } else {
      const character = filteredData.find(
        (filter) => filter.name.toLowerCase() === inputValue
      ); // Search for character with capitalized name
      if (character) {
        navigate(`/character/${character.slug}`);
      }
    }
  };

  return (
    <div className="homepage">
      <h1 className="homeTitle">
        Find quotes of your favorite Game Of Thrones characters by typing their
        name in the search bar or by clicking one of the names
      </h1>
      <form className="formHome">
        <label>
          <button onClick={handleClick} className="searchBtn">
            Search:
          </button>
        </label>
        <input
          className="search"
          type="text"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Character's name"
        />
      </form>
      <div onChange={(event) => handleSearch(event)} className="divList">
        {filteredData.map((filter, ind) => (
          <ul key={ind}>
            <Link className="linkList" to={`/character/${filter.slug}`}>
              <li className="name">{filter.name}</li>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
