import React from "react";
import { Box, Typography, TextField, Select, MenuItem } from "@mui/material";
import useStyles from "./useStyles"; // Adjust the path as necessary

//Header (not a normal header xD but the component that has the filters for the List)
const Header = ({
  selectedRegion,
  handleSearchChange,
  handleRegionChange,
  region,
}) => {
  
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Typography variant="h1" className={classes.title}>
        {selectedRegion ? selectedRegion : "World"}
      </Typography>

      <Box className={classes.box2} style={{ display: "flex" }}>
        <TextField
          sx={{ marginRight: 2 }}
          onChange={handleSearchChange}
          className={classes.searchInput}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.input,
            },
          }}
        />
        <Select
          value={region}
          onChange={handleRegionChange}
          displayEmpty
          inputProps={{ "aria-label": "Select region" }}
          className={classes.select}
        >
          <MenuItem value="">All Regions</MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Americas">Americas</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default Header;
