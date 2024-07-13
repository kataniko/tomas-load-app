import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Spline from "@splinetool/react-spline";

const AppbarComponent = ({
  searchTerm,
  setSearchTerm,
  region,
  setRegion,
  toggleMode,
}) => {

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <InputBase
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearchInputChange}
            sx={{ marginLeft: 1, flex: 1 }}
          />
          <Button onClick={toggleMode} color="inherit">
            Change Theme
          </Button>
          <Select
            value={region}
            onChange={handleRegionChange}
            displayEmpty
            inputProps={{ "aria-label": "Select region" }}
            sx={{ marginLeft: 1, minWidth: 120 }}
          >
            <MenuItem value="">All Regions</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="Americas">Americas</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppbarComponent;
