// CountryList.jsx
import React from "react";
import { Grid } from "@mui/material";
import CountryCard from "../Card/CountryCard";

const CountryList = ({ currentCountries, classes }) => {
  return (
    <Grid sx={{marginTop:1}} container spacing={6} className={classes.countryList} justifyContent="center">
      {currentCountries.map((country) => (
        <Grid key={country.cca3} item xs={12} sm={6} md={4} lg={3} container justifyContent="center">
          <Grid item>
            <CountryCard country={country} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default CountryList;
