import React, { useState, useEffect } from "react";
import { getAllCountries } from "../services/countryService";
import CountryCard from "../components/CountryCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { Box, Grid, Input, Select, MenuItem, Typography } from "@mui/material";


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
        <Typography color={"white"} variant="main">Country Finder</Typography>
      </Box>
      <Box sx={{ maxWidth: 1440, marginTop: 2 }}>
        {loading ? (
          <LoadingSpinner />
        ) : (
           <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
              <Typography color={"white"} variant="h1">{region}</Typography>
              <div>
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{ minWidth: "300px", border: "1px solid white", color: "white", marginRight: 2, fontSize: "1.2rem" }}
                />
              <Select
                value={region}
                onChange={handleRegionChange}
                displayEmpty
                inputProps={{ "aria-label": "Select region" }}
                sx={{ minWidth: 200, color: "white", fontSize: "1.2rem" }}
                >
                <MenuItem value="">All Regions</MenuItem>
                <MenuItem value="Africa">Africa</MenuItem>
                <MenuItem value="Americas">Americas</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="Oceania">Oceania</MenuItem>
              </Select>
              </div>
            </Box>
            <Grid container spacing={3} className="country-list">
              {filteredCountries.map((country) => (
                <Grid key={country.cca3} item xs={12} sm={6} md={4} lg={3}>
                  <CountryCard country={country} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Box>
    </>
  );
};

export default Home;
