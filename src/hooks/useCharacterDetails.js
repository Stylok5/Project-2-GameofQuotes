import { useState, useEffect } from "react";
import axios from "axios";

export const useCharacterDetails = (id) => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.gameofthronesquotes.xyz/v1/character/${id}`
        );
        setQuotes(data);
      } catch (error) {
        console.error("Error fetching character details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return { quotes, loading };
};