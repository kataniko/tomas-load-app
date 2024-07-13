// Header.jsx
import React from "react";
import { Box, Typography, TextField, Select, MenuItem } from "@mui/material";

const Header = ({
  region,
  handleSearchChange,
  handleRegionChange,
  classes,
}) => {
  return (
    <Box className={classes.header}>
      <Typography variant="h1" className={classes.title}>
        {region}
      </Typography>
      <div>
        <TextField
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
      </div>
    </Box>
  );
};

export default Header;
