import React from "react";
import { Box, Typography, TextField, Select, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
  },
  title: {
    color: theme.palette.common.white,
    fontSize: "2rem",
    fontWeight: 600,
  },
  searchInput: {
    width: "100%",
    maxWidth: "300px",
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
  box2:{
    marginTop:5,
    [theme.breakpoints.down("sm")]: {
      marginTop:15,
    },
  },
  select: {
    minWidth: 150,
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
}));

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
