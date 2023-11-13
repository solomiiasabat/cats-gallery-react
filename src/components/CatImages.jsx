import React from "react";
import { useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
// import { Item } from "../utils/grid-item";

import { selectImages } from "../redux/selectors";
import { selectIsLoading } from "../redux/selectors";

// const Item = styled(Paper)(({ theme }) => ({
// backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
// ...theme.typography.body2,
// padding: theme.spacing(1),
// textAlign: "center",
// color: theme.palette.text.secondary,
// }));

export default function CatImages() {
  const images = useSelector(selectImages);
  const loading = useSelector(selectIsLoading);
  return (
    <>
      {loading && <p>Loading...</p>}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {images.map((img) => (
            <Grid xs={2} key={img.id}>
              {/* <Item> */}
              <img src={img.url} width={185} height={170} />
              {/* </Item> */}
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
