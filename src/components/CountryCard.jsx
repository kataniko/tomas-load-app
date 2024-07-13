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
    height: "100%", // Adjusted to make card take full height of its container
    border: `1px solid ${theme.palette.primary.main}`, // Use theme primary color
    opacity: 0.5, // Initial transparency
    transition: "opacity 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Transition for smooth effect
    backgroundColor: "transparent", // Initial background color
    '&:hover': {
      opacity: 1, // Full opacity on hover
      backgroundColor: theme.palette.background.paper, // Use theme background color on hover
      borderColor: theme.palette.primary.main, // Border color change on hover using theme
      boxShadow: `0 0 10px ${theme.palette.primary.main}`, // Shining border effect using theme
    },
  },
  media: {
    flex: "0 0 auto", // Ensures media does not grow or shrink
    height: "180px",
    width: "100%",
    objectFit: "cover", // Ensures the image covers the entire area
    transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out", // Add filter transition
    '&:hover': {
      filter: "brightness(1.2)", // Increase brightness on hover
    },
  },
  content: {
    flex: "1 0 auto",
    textAlign: "initial",
  
    padding: theme.spacing(2), // Example padding for content
  },
  title: {
    marginBottom: theme.spacing(1),
    textTransform: "capitalize",
      color: "white",
    fontWeight: 600,
  },
}));

const CountryCard = ({ country }) => {
  const classes = useStyles();
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
        

           <Typography variant="body1" component="h6" className={classes.title}>
            Country: {country.name.common}
          </Typography>
        
            <Typography variant="h6" component="h3" className={classes.title}>
            Population: {country.population}
            </Typography>
          
               <Typography variant="h6" component="h3" className={classes.title}>
            Capital: {country.capital}
          </Typography>
        
          <Typography variant="h6" component="h3" className={classes.title}>
           Region:  {country.region}
          </Typography>
        
        </CardContent>
      </Link>
    </Card>
  );
};

export default CountryCard;
