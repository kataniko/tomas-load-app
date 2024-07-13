// CountryList.jsx
import React from "react";
import { Grid } from "@mui/material";
import CountryCard from "../components/CountryCard";

const CountryList = ({ currentCountries, classes }) => {
  return (
    <Grid container spacing={3} className={classes.countryList}>
      {currentCountries.map((country) => (
        <Grid key={country.cca3} item xs={12} sm={6} md={4} lg={3}>
          <CountryCard country={country} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CountryList;
