import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { getCountryByName } from "../../services/countryService";
import { AnimatePresence } from "framer-motion";
import TransitionPage from "../../components/TransitionPage";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useStyles from "./useStyles";

const Detail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const data = await getCountryByName(name);
        setCountry(data[0]);
      } catch (error) {
        console.error("Error fetching country details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  const handleBorderClick = async (borderCountry) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha?codes=${borderCountry}`
      );
      const data = response.data[0];
      const borderCountryName = data?.name?.common ?? "Border Country";

      if (borderCountryName !== "Border Country") {
        navigate(`/detail/${encodeURIComponent(borderCountryName)}`);
      } else {
        console.error("Border country name not found in API response.");
      }
    } catch (error) {
      console.error("Error fetching border country details:", error);
    }
  };

  return (
    <AnimatePresence>
      {loading ? (
        <TransitionPage key="transition" />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={classes.background}
        >
          <Box className={classes.container}>
            {!isMobile && (
              <Box className={classes.buttonContainer2}>
                <IconButton
                  className={classes.backButton}
                  component={Link}
                  to="/"
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            )}
            <Box className={classes.container2}>
              <img
                src={country.flags.png}
                alt={`${country?.name?.common ?? "Country"} flag`}
                className={classes.flagImage}
              />
            </Box>
            <Box sx={{ flex: "1 1 50%", width: "100%" }}>
              <Typography variant="h1" className={classes.title}>
                {country?.name?.common ?? "Country"}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <span className={classes.label}>Official Name:</span>{" "}
                {country?.name?.official ?? "-"}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <span className={classes.label}>Capital:</span>{" "}
                {country?.capital?.[0] ?? "-"}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <span className={classes.label}>Population:</span>{" "}
                {country?.population
                  ? country.population.toLocaleString()
                  : "-"}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <span className={classes.label}>Region:</span>{" "}
                {country?.region ?? "-"}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <span className={classes.label}>Subregion:</span>{" "}
                {country?.subregion ?? "-"}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <span className={classes.label}>Languages:</span>{" "}
                {country ? Object.values(country.languages).join(", ") : "-"}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <span className={classes.label}>Borders:</span>{" "}
                {country?.borders?.length > 0 ? (
                  country.borders.map((border, index) => (
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleBorderClick(border)}
                      className={classes.button}
                    >
                      {border}
                    </Button>
                  ))
                ) : (
                  <Typography>No bordering countries listed</Typography>
                )}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                <span className={classes.label}>Currency:</span>{" "}
                {country
                  ? Object.values(country.currencies)
                      .map(
                        (currency) => `${currency.name} (${currency.symbol})`
                      )
                      .join(", ")
                  : "-"}
              </Typography>
              {isMobile && (
                <Box className={classes.buttonContainer}>
                  <IconButton
                    aria-label="go back"
                    className={classes.backButton}
                    component={Link}
                    to="/"
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              )}
            </Box>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Detail;
