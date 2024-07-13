import axios from "axios";

const API_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

export const getCountryByName = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/name/${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching country:", error);
    throw error;
  }
};
