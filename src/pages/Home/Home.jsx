import React, { useState, useEffect, useContext } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Header from "../../components/Header/Header";
import CountryList from "../../components/List/CountryList";
import CustomPagination from "../../components/Pagination";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { TimerContext } from "../../Context/TimeContext"; // Import your TimerContext
import useStyles from "./useStyles";
import { getAllCountries, getCountriesByRegion } from "../../services/countryService";

const Home = () => {
  const { hasAppRendered, setAppRendered } = useContext(TimerContext);
  const [startAnimation, setStartAnimation] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 8;

  const classes = useStyles();

  //fetch API using axios to get all countries
  const fetchCountries = async () => {
    setLoading(true);
    try {
      let data;
      if (regionFilter) {
        data = await getCountriesByRegion(regionFilter);
      } else {
        data = await getAllCountries();
      }
      setCountries(data);
      setFilteredCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [regionFilter]);

  //Filters UseEffect
  useEffect(() => {
    const applyFilters = () => {
      const filtered = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered);
      setCurrentPage(1); // Reset currentPage to 1 whenever filters change
    };

    applyFilters();
  }, [searchTerm, countries]);

  //Animation timer function
  useEffect(() => {
    let timer;
    if (hasAppRendered) {
      timer = setTimeout(() => {
        setStartAnimation(true);
      }, 100); // Timer duration if hasAppRendered is true
    } else {
      timer = setTimeout(() => {
        setStartAnimation(true);
        setAppRendered();
      }, 3000); // Timer duration if hasAppRendered is false
    }

    return () => clearTimeout(timer);
  }, [hasAppRendered, setAppRendered]);

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegionFilter(event.target.value);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ pointerEvents: startAnimation ? 'auto' : 'none' }}
      >
        <Box className={classes.container}>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              <Header
                selectedRegion={regionFilter}
                handleSearchChange={handleSearchChange}
                handleRegionChange={handleRegionChange}
                region={regionFilter}
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
