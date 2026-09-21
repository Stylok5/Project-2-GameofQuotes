import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCharacters } from "../../hooks/useCharacters";
import Loader from "../../components/Loader";

const Characters = () => {
  const { allData, loading } = useCharacters();
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredData(allData);
  }, [allData]);

  const handleSearch = (event) => {
    event.preventDefault();
    const inputValue = event.target.value.toLowerCase();
    
    const result = allData.filter((data) => {
      const dataName = data.name.toLowerCase();
      return dataName.includes(inputValue);
    });
    
    setFilteredData(result);
    setSearchValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const inputValue = searchValue.toLowerCase();
    
    if (filteredData.length === 1) {
      navigate(`/character/${filteredData[0].slug}`);
    } else {
      const character = filteredData.find(
        (filter) => filter.name.toLowerCase() === inputValue
      );
      if (character) {
        navigate(`/character/${character.slug}`);
      }
    }
  };
  
  if (loading) return <Loader />;

  return (
    <div className="explorepage">
      <div className="insidestuff">
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
        
        <section className="nameslist">
          <div className="divList">
            {filteredData.map((filter, ind) => (
              <ul key={ind}>
                <Link className="linkList" to={`/character/${filter.slug}`}>
                  <li className="name">{filter.name}</li>
                </Link>
              </ul>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Characters;