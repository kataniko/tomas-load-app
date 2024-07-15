import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import { RandomReveal } from "react-random-reveal";

//Card styles

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "280px",
    width: "280px",
    border: `1px solid ${theme.palette.primary.main}`,
    opacity: 0.5,
    transition:
      "opacity 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    backgroundColor: "transparent",
    "&:hover": {
      opacity: 1,
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 10px ${theme.palette.primary.main}`,
    },
  },
  media: {
    flex: "0 0 auto",
    height: "150px",
    width: "180px",
    objectFit: "cover",
    transition: "transform 1s ease-in-out, filter 1s ease-in-out",
    "&:hover": {
      filter: "brightness(1.2)",
    },
  },
  content: {
    flex: "1 0 auto",
    textAlign: "initial",
    padding: theme.spacing(2),
  },
  label: {
    marginBottom: theme.spacing(0.5),
    color: theme.palette.text.secondary,
    fontWeight: 600,
  },
  value: {
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
    fontWeight: 400,
  },
}));

const CountryCard = ({ country }) => {
  
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const [capital, setCapital] = useState(country.capital); // Split capital into an array of characters

  //I noticed that the capital field needed to be formatted to string otherwise the text animation would iterate only one position instead of each letter
  if (typeof country.capital !== "string") {
    country.capital = String(country.capital);
  }

  // Function to format population number
  const formatPopulation = (population) => {
    if (population >= 1e9) {
      return (population / 1e9).toFixed(1) + " Billion";
    } else if (population >= 1e6) {
      return (population / 1e6).toFixed(1) + " Million";
    } else if (population >= 1e3) {
      return (population / 1e3).toFixed(1) + " Thousand";
    } else {
      return population.toString();
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 1.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className={classes.card}>
        <Link
          to={`/detail/${encodeURIComponent(country.name.common)}`}
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            className={classes.media}
            component="img"
            image={country.flags.png}
            alt={`${country.name.common} flag`}
          />

          <CardContent className={classes.content}>
            <Typography variant="body1" component="div">
              <Typography
                variant="body1"
                component="span"
                className={classes.label}
              >
                Country:
              </Typography>{" "}
              <Typography
                variant="body2"
                component="span"
                className={classes.value}
              >
                {isHovered && (
                  <RandomReveal
                    isPlaying
                    duration={0.5}
                    revealDuration={1}
                    characters={country.name.common}
                    onComplete={() => ({ shouldRepeat: false })}
                  />
                )}
                {!isHovered && country.name.common}
              </Typography>
            </Typography>

            <Typography variant="body1" component="div">
              <Typography
                variant="body1"
                component="span"
                className={classes.label}
              >
                Population:
              </Typography>{" "}
              <Typography
                variant="body2"
                component="span"
                className={classes.value}
              >
                {isHovered && (
                  <RandomReveal
                    isPlaying
                    duration={0.5}
                    revealDuration={1}
                    characters={formatPopulation(country.population)}
                    onComplete={() => ({ shouldRepeat: false })}
                  />
                )}
                {!isHovered && formatPopulation(country.population)}
              </Typography>
            </Typography>

            <Typography variant="body1" component="div">
              <Typography
                variant="body1"
                component="span"
                className={classes.label}
              >
                Capital:
              </Typography>{" "}
              <Typography
                variant="body2"
                component="span"
                className={classes.value}
              >
                {isHovered && (
                  <RandomReveal
                    isPlaying
                    duration={0.5}
                    revealDuration={1}
                    characters={capital}
                    onComplete={() => ({ shouldRepeat: false })}
                  />
                )}
                {!isHovered && country.capital}
              </Typography>
            </Typography>

            <Typography variant="body1" component="div">
              <Typography
                variant="body1"
                component="span"
                className={classes.label}
              >
                Region:
              </Typography>{" "}
              <Typography
                variant="body2"
                component="span"
                className={classes.value}
              >
                {isHovered && (
                  <RandomReveal
                    isPlaying
                    duration={0.5}
                    revealDuration={1}
                    characters={country.region}
                    onComplete={() => ({ shouldRepeat: false })}
                  />
                )}
                {!isHovered && country.region}
              </Typography>
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
};

export default CountryCard;
