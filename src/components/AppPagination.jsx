import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { selectPageSize, selectCurrentPage } from "../redux/selectors";

export default function AppPagination({ setCurrentPage, numsOfPages }) {
  const pageSize = useSelector(selectPageSize);
  const currentPage = useSelector(selectCurrentPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  console.log("numsOfPages:", numsOfPages, "pageSize:", pageSize);

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
