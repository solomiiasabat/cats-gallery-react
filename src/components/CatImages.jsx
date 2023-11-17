import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

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
  console.log(currentPageImages);

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
