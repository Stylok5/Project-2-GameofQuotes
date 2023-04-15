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
    <div>
      {quote.map((item, ind) => (
        <ul
          key={ind}
          className="listInfo"
          style={{ padding: item.name === "Tyrion Lannister" ? "200px" : "35" }}
        >
          <li className="quoteName">
            Character's name:<span>{item.name}</span>{" "}
          </li>
          <li className="quoteHouse">
            Character's house:
            <span>
              {item.house === null
                ? "This character does not have a house or his house is unknown"
                : item.house.name}
            </span>
          </li>
          <li className="quoteQuotes">
            Character's quotes:<span>{item.quotes}</span>
          </li>
        </ul>
      ))}
      <Link to="/">
        <button className="backtoHome">Back to homepage</button>
      </Link>
    </div>
  );
};

export default QuotePage;
