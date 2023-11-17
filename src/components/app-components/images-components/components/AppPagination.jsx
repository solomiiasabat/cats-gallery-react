import React from "react";

import { useSelector } from "react-redux";

import { Box, Pagination, Stack } from "@mui/material";

import { selectPageSize, selectCurrentPage } from "../../../../redux/selectors";

export default function AppPagination({ setCurrentPage, numsOfPages }) {
  const pageSize = useSelector(selectPageSize);
  const currentPage = useSelector(selectCurrentPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ margin: "250px 0px 0px 0px" }}
    >
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(numsOfPages / pageSize)}
          color="primary"
          onChange={handlePageChange}
          page={currentPage}
        />
      </Stack>
    </Box>
  );
}
