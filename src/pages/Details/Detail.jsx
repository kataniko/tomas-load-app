import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Box, Typography } from "@mui/material";
import useStyles from "./useStyles";
import { getCountryByName } from "../../services/countryService";
import { motion, AnimatePresence } from "framer-motion";
import TransitionPage from "../../components/TransitionPage";

const Detail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const data = await getCountryByName(name);
        setCountry(data[0]);
      } catch (error) {
        console.error("Error fetching country details:", error);
      } finally {
      }
    };

    fetchCountry();
  }, [name]);

  useEffect(() => {
    // Simulating loading data or any asynchronous task
    setTimeout(() => {
      setLoading(false); // Set loading to false after data is loaded
    }, 2000); // Simulating 2 seconds delay
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <TransitionPage key="transition" />
        ) : (
          <Box className={classes.container}>
            <Box sx={{ flex: "0 1 40%" }}>
              <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                className={classes.flagImage}
              />
            </Box>
            <Box sx={{ flex: "1 1 60%", backgroundColor: "red" }}>
              <Typography variant="h2" className={classes.title}>
                {country.name.common}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <strong>Official Name:</strong> {country.name.official}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <strong>Capital:</strong> {country.capital?.[0]}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <strong>Region:</strong> {country.region}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <strong>Subregion:</strong> {country.subregion}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <strong>Languages:</strong>{" "}
                {Object.values(country.languages).join(", ")}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <strong>Borders:</strong>{" "}
                {country.borders?.join(", ") || "None"}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <strong>Currency:</strong>{" "}
                {Object.values(country.currencies)
                  .map((currency) => `${currency.name} (${currency.symbol})`)
                  .join(", ")}
              </Typography>
            </Box>
          </Box>
        )}
      </AnimatePresence>
    </>
  );
};

export default Detail;
