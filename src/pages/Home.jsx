import React, { useState, useEffect } from "react";
import { getAllCountries } from "../services/countryService";
import CountryCard from "../components/CountryCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { Box, Grid, Input, Select, MenuItem } from "@mui/material";
import MainText from "../components/MainText";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

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
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
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

  return (
    <>
      <Box sx={{ height: "100vh", alignContent: "center" }}>
        <div style={{ height: "50%" }}>
          <MainText />
        </div>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2, width:"100%" }}>
        <Input
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ border: "1px solid white", borderRadius: 7, color: "white", marginRight: 1 }}
        />
        <Select
          value={region}
          onChange={handleRegionChange}
          displayEmpty
          inputProps={{ "aria-label": "Select region" }}
          sx={{ minWidth: 120, color: "white" }}
        >
          <MenuItem value="">All Regions</MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Americas">Americas</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </Box>
      <Box sx={{ maxWidth: 1440, marginTop: 2 }}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Grid
            justifyContent="center"
            container
            spacing={3}
            className="country-list"
          >
            {filteredCountries.map((country) => (
              <Grid key={country.cca3} item xs={10} sm={6} md={6} lg={3}>
                <CountryCard country={country} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Home;
