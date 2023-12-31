import * as React from "react";

import { Card, CardContent, Typography } from "@mui/material";

const cardStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "#262526",
  boxShadow: 24,
  p: 4,
  zIndex: 1,
};

const textStyle = {
  fontSize: "30px",
  color: "white",
  textAlign: "center",
  position: "absolute",
  top: "47%",
  left: "40%",
};

export default function Loading() {
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography sx={textStyle} gutterBottom>
          Cats are comming...🐈🐈🐈
        </Typography>
      </CardContent>
    </Card>
  );
}
