import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
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
    height: "180px",
    width: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
    "&:hover": {
      filter: "brightness(1.2)",
    },
  },
  content: {
    flex: "1 0 auto",
    textAlign: "initial",
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(1),
    textTransform: "capitalize",
    color: "white",
    fontWeight: 400,
  },
  label: {
    marginBottom: theme.spacing(0.5), // Adjust spacing between labels and values
    color: theme.palette.text.secondary,
    fontWeight: 600,
  },
  value: {
    marginBottom: theme.spacing(1), // Adjust spacing between values
    color: theme.palette.text.primary,
    fontWeight: 400,
  },
}));

const CountryCard = ({ country }) => {
  const classes = useStyles();

  // Function to format population number
  const formatPopulation = (population) => {
    if (population >= 1e6) {
      return (population / 1e6).toFixed(1) + " Million";
    } else if (population >= 1e3) {
      return (population / 1e3).toFixed(1) + " Thousand";
    } else {
      return population.toString();
    }
  };

  return (
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
              variant="body1"
              component="span"
              className={classes.value}
            >
              {country.name.common}
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
              variant="body1"
              component="span"
              className={classes.value}
            >
              {formatPopulation(country.population)}
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
              variant="body1"
              component="span"
              className={classes.value}
            >
              {country.capital}
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
              variant="body1"
              component="span"
              className={classes.value}
            >
              {country.region}
            </Typography>
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CountryCard;
