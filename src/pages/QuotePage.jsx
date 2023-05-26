import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const QuotePage = () => {
  const [quote, setQuote] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.gameofthronesquotes.xyz/v1/character/${id}`
        );
        setQuote(data);
        console.log(id);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="quotepage">
      <div className="details">
        {quote.map((item, ind) => (
          <ul
            key={ind}
            className="listInfo"
            style={{
              padding:
                item.name === "Tyrion Lannister"
                  ? "50px 20px 190px 20px"
                  : "35",
            }}
          >
            <div className="insidecard">
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
