import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import {
  selectCurrentPageImages,
  selectNumsOfPages,
  selectIsLoading,
} from "../redux/selectors";

import { setCurrentPage } from "../redux/slice";

import Loading from "./Loading";
import AppPagination from "./AppPagination";

export default function CatImages() {
  const loading = useSelector(selectIsLoading);
  const currentPageImages = useSelector(selectCurrentPageImages);
  const numsOfPages = useSelector(selectNumsOfPages);
  const dispatch = useDispatch();

  return (
    <>
      {loading && <Loading />}
      <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={2}>
          {currentPageImages.map((img) => (
            <Grid xs={12 / 5} key={img.id}>
              <img src={img.url} width={200} height={175} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <AppPagination
        setCurrentPage={(page) => dispatch(setCurrentPage(page))}
        numsOfPages={numsOfPages}
      />
    </>
  );
}
