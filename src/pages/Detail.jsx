import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles"; // Import useTheme to access theme object

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    gap: theme.spacing(4),
    alignItems: "flex-start",
    height: "100vh",
  },
  flagImage: {
    width: "100%",
    height: "auto",
    borderRadius: theme.spacing(1),
  },
  title: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
    fontWeight: 600,
  },
  text: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
}));

const Detail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const theme = useTheme(); // Access the current theme object

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${name}`
        );
        setCountry(response.data[0]);
      } catch (error) {
        console.error("Error fetching country details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!country) {
    return <div>Country not found.</div>;
  }

  return (
    <Box className={classes.container}>
      <Box sx={{ flex: "0 1 40%" }}>
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          className={classes.flagImage}
        />
      </Box>
      <Box sx={{ flex: "1 1 60%" }}>
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
          <strong>Population:</strong> {country.population.toLocaleString()}
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
          <strong>Borders:</strong> {country.borders?.join(", ") || "None"}
        </Typography>
        <Typography variant="body1" className={classes.text}>
          <strong>Currency:</strong>{" "}
          {Object.values(country.currencies)
            .map((currency) => `${currency.name} (${currency.symbol})`)
            .join(", ")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Detail;
