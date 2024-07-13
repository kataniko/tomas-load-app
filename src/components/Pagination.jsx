// Pagination.jsx
import React from "react";
import { Box, Pagination } from "@mui/material";

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
