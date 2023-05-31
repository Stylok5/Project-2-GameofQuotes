import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const QuotePage = () => {
  const [quote, setQuote] = useState([]);
  const { id } = useParams();

  const characterImages = {
    "Tyrion Lannister":
      "https://www.leadershipgeeks.com/wp-content/uploads/tyrion-lannister-leadership-featured.jpg",
    "Jon Snow":
      "https://media.gq-magazine.co.uk/photos/62ac38f82da9f5f89888eba9/1:1/w_667,h_667,c_limit/jon-snow-series-1200.jpeg",
    "Daenerys Targaryen":
      "https://hips.hearstapps.com/ell.h-cdn.co/assets/16/30/1469916253-game-of-thrones-daenerys-targaryen-emilia-clarke.jpg?crop=0.532xw:0.946xh;0.291xw,0.0514xh&resize=1200:*",
    "Sansa Stark": "https://i.insider.com/5ce420e193a15232821d3084?width=700",
    'Eddard "Ned" Stark':
      "https://hips.hearstapps.com/hmg-prod/images/brienne-ned-game-of-thrones-1556025697.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=1200:*",
    "Catelyn Stark":
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Michelle_Fairley_Cat_Stark_in_the_Vale.png/220px-Michelle_Fairley_Cat_Stark_in_the_Vale.png",
    "Jaime Lannister":
      "https://sm.ign.com/t/ign_nordic/news/j/jaime-lann/jaime-lannister-actor-hasnt-watched-house-of-the-dragon-beca_pbx6.1200.jpg",
    "Cersei Lannister":
      "https://pyxis.nymag.com/v1/imgs/9eb/c1a/a838f7bffb25ed90a376864c85ae94c578-14-cersei-lannister.rsquare.w700.jpg",
    "Joffrey Baratheon":
      "https://www.who.com.au/media/82309/joffrey-baratheon-game-of-thrones.jpg?width=720&center=0.0,0.0",
    "Aerys II Targaryen":
      "https://images.immediate.co.uk/production/volatile/sites/3/2022/09/King-Aerys-Targaryen-Game-of-Thrones-c21166b.jpg?quality=90&resize=620,414",
    "Aemon Targaryen":
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/game-of-thrones/0/0d/Aemon.jpg",
    "Tywin Lannister":
      "https://static.tvtropes.org/pmwiki/pub/images/got_tywin_lannister.png",
    "Ramsay Bolton":
      "https://upload.wikimedia.org/wikipedia/en/5/5e/Ramsay_Bolton-_-Iwan_Rheon.jpg",
    "Arya Stark":
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/10/14/maisie-williams-as-arya-stark-in-game-of-thrones-season-8-1.jpg?width=1200",
    "Robert Baratheon":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDaxgHVuy2WwUpWfghPxXEk4r_DQU3e1GYJA&usqp=CAU",
    "Theon Greyjoy":
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/game-of-thrones/4/41/Theon_greyjoy_photo.jpg",
    "Samwell Tarly":
      "https://hips.hearstapps.com/hmg-prod/images/samtarly2-1558188483.jpg?crop=0.565xw:1.00xh;0.274xw,0&resize=1200:*",
    "Lord Varys":
      "https://decider.com/wp-content/uploads/2019/05/varys-game-of-thrones-s8.jpg?quality=75&strip=all",
    "Bran Stark":
      "https://m.media-amazon.com/images/M/MV5BZGM1MDdmYWQtMzNiMy00ODQwLTljOTItNzYwYmIzNDhkY2EyXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg",
    "Brienne of Tharth":
      "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2017%2F04%2FBrienne-of-Tarth.jpg",
    "Petyr Baelish":
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/game-of-thrones/1/13/Petyr_baelish.jpg?width=640",
    Tormund:
      "https://hips.hearstapps.com/ell.h-cdn.co/assets/17/34/1503503945-syn-elm-1503486795-kristofer-hivju-as-tormund-got-1.jpg?crop=0.751xw:1.00xh;0.125xw,0&resize=1200:*",
    Melisandre:
      "https://www.nme.com/wp-content/uploads/2019/07/melisandre-2000x1270.jpg",
    "Olenna Tyrell":
      "https://upload.wikimedia.org/wikipedia/en/d/da/Olenna_Tyrell-Diana_Rigg.jpg",
    "Mance Rayder":
      "https://upload.wikimedia.org/wikipedia/en/d/da/Olenna_Tyrell-Diana_Rigg.jpg",
    Ygritte:
      "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/ygritte-1920.jpg?w=1200",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.gameofthronesquotes.xyz/v1/character/${id}`
        );
        setQuote(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  const onClick = () => {
    navigate("/characters");
  };

  return (
    <div className="quotepage">
      <div className="details">
        {quote.map((item, ind) => (
          <ul key={ind} className="listInfo">
            <div className="insidecard">
              <div className="imgContainer">
                <img
                  src={characterImages[item.name]}
                  alt={item.name}
                  className="characterImage"
                />
              </div>
              <div className="btncontainer">
                <button onClick={onClick}>Back to characters</button>
              </div>
              <li className="quoteName">
                <h2> Character's name:</h2> <span>{item.name}</span>
              </li>
              <li className="quoteHouse">
                <h2>Character's house:</h2>{" "}
                <span>
                  {item.house === null
                    ? "This character does not have a house or his house is unknown"
                    : item.house.name}
                </span>
              </li>
              <li className="quoteQuotes">
                <h2>Character's quotes:</h2> <span>{item.quotes}</span>
              </li>
            </div>
            {/* <Link to="/">
              <button className="backtoHome">Back to characters</button>
            </Link> */}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default QuotePage;
