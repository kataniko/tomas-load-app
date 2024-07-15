// Pagination.jsx
import React from "react";
import { Box, Pagination } from "@mui/material";

//I know you guys didnt asked for pagination but i couldnt see it without it (It kinda annoys me doing it in the frontend but there wasnt a huge amount of data so its ok :))

const CustomPagination = ({ filteredCountries, currentPage, paginate, countriesPerPage, classes }) => {
  return (
    <Box className={classes.pagination}>
      <Pagination
        count={Math.ceil(filteredCountries.length / countriesPerPage)}
        page={currentPage}
        onChange={paginate}
        variant="outlined"
        shape="rounded"
        color="primary"
      />
    </Box>
  );
};

export default CustomPagination;
