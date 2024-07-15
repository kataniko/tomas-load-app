import React from "react";
import { Grid } from "@mui/material";
import CountryCard from "../Card/CountryCard";
import { motion } from "framer-motion";

const CountryList = ({ currentCountries, classes }) => {
  // Function to determine animation variant based on index
  const getAnimationVariant = (index) => {
    return index % 2 === 0 ? "variant1" : "variant2";
  };

  // Define animation variants
  const variants = {
    variant1: { opacity: 1, y: -25 },
    variant2: { opacity: 1, y: 25 },
  };

  return (
    <Grid
      sx={{ marginTop: 1 }}
      container
      spacing={6}
      className={classes.countryList}
      justifyContent="center"
    >
      {currentCountries.map((country, index) => (
        <Grid
          key={country.cca3}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          container
          justifyContent="center"
        >
          <Grid item>
            <motion.div
              initial={getAnimationVariant(index)}
              animate={{ y: 0, opacity: 1 }}
              variants={variants}
            >
              <CountryCard country={country} />
            </motion.div>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default CountryList;
