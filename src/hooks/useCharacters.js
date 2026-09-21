import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../consts";

export const useCharacters = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}`);
        setAllData(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { allData, loading };
};