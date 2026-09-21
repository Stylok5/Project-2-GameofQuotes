import { useNavigate, useParams } from "react-router-dom";
import { useCharacterDetails } from "../../hooks/useCharacterDetails";
import Loader from "../../components/Loader";
import { CHARACTER_IMAGES } from "../../consts"; // Imported cleanly!

const CharacterDetails = () => {
  const { id } = useParams();
  const { quotes, loading } = useCharacterDetails(id);
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/characters");
  };

  if (loading) return <Loader />;
  if (!quotes || quotes.length === 0) return <div>No character data found.</div>;

  const character = quotes[0];

  return (
    <div className="quotepage">
      <div className="details">
        <div className="btncontainer">
          <button onClick={onClick}>Back to characters</button>
        </div>
        <div className="listInfo">
          <div className="insidecard">
            <div className="imgContainer">
              <img
                src={CHARACTER_IMAGES[character.name] || "https://via.placeholder.com/150"}
                alt={character.name}
                className="characterImage"
              />
            </div>
            
            <div className="quoteName">
              <h2>Character's name:</h2> 
              <span>{character.name}</span>
            </div>
            
            <div className="quoteHouse">
              <h2>Character's house:</h2>
              <span>
                {character.house === null
                  ? "This character does not have a house or his house is unknown"
                  : character.house.name}
              </span>
            </div>
            
            <div className="quoteQuotes">
              <h2>Character's quotes:</h2>
              <ul>
                {quotes.map((item, ind) => (
                  <li key={ind}>
                    <span>"{item.quotes || item}"</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;