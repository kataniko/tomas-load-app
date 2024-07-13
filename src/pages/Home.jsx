// Home.jsx
import React, { useState, useEffect } from "react";
import { getAllCountries } from "../services/countryService";
import LoadingSpinner from "../components/LoadingSpinner";
import Header from "../components/Header";
import CountryList from "../components/CountryList";
import CustomPagination from "../components/Pagination";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1440,
    marginTop: theme.spacing(2),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
  title: {
    color: theme.palette.common.white,
    fontSize: "2rem",
    fontWeight: 600,
  },
  searchInput: {
    marginRight: theme.spacing(2),
    width: 250,
    "& .MuiOutlinedInput-input": {
      color: theme.palette.common.white,
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.common.white,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.dark,
      },
    },
  },
  select: {
    minWidth: 200,
    color: theme.palette.common.white,
    "& .MuiInputLabel-root": {
      color: theme.palette.common.white,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.dark,
      },
    },
  },
  countryList: {
    "& .country-list": {
      marginTop: theme.spacing(2),
    },
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
}));

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [startAnimation, setStartAnimation] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 8;

  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const data = await getAllCountries();
        setCountries(data);
        setFilteredCountries(data); // Initialize filtered countries with all countries
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const filtered = countries.filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) &&
        (region === "" || country.region === region)
    );
    setFilteredCountries(filtered);
  }, [searchTerm, region, countries]);

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 5000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts
  }, []);

  // Logic for pagination
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Box className={classes.container}>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <Header
                region={region}
                handleSearchChange={handleSearchChange}
                handleRegionChange={handleRegionChange}
                classes={classes}
              />
              <CountryList
                currentCountries={currentCountries}
                classes={classes}
              />
              <CustomPagination
                filteredCountries={filteredCountries}
                currentPage={currentPage}
                paginate={paginate}
                countriesPerPage={countriesPerPage}
                classes={classes}
              />
            </>
          )}
        </Box>
      </motion.div>
    </>
  );
};

export default Home;
