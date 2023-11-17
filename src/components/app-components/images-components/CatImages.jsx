import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

import {
  selectCurrentPageImages,
  selectNumsOfPages,
  selectIsLoading,
} from "../../../redux/selectors";

import { setCurrentPage } from "../../../redux/slice";

import Loading from "./components/Loading";
import AppPagination from "./components/AppPagination";

export default function CatImages() {
  const loading = useSelector(selectIsLoading);
  const currentPageImages = useSelector(selectCurrentPageImages);
  const numsOfPages = useSelector(selectNumsOfPages);
  const dispatch = useDispatch();

  return (
    <>
      {loading && <Loading />}
      <Box sx={{ width: "100%", height: 100, zIndex: -1 }}>
        <ImageList
          sx={{ width: "100%", height: 340, overflow: "hidden" }}
          variant="woven"
          cols={5}
          gap={8}
        >
          {currentPageImages.map((img) => (
            <ImageListItem key={img.id}>
              <img
                srcSet={`${img.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${img.url}?w=248&fit=crop&auto=format`}
                alt={img.id}
                loading="lazy"
              />
              <ImageListItemBar
                position="top"
                title={img.breeds[0]?.name || "Unknown Breed"}
                sx={{ textAlign: "center" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box sx={{ width: "100%" }}>
        <AppPagination
          setCurrentPage={(page) => dispatch(setCurrentPage(page))}
          numsOfPages={numsOfPages}
        />
      </Box>
    </>
  );
}
