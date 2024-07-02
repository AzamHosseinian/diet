import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function CustomCard({ title, description, imageUrl }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }} dir="rtl">
      {" "}
      <CardMedia
        component="img"
        // height="340"
        image={imageUrl}
        alt={title}
        sx={{ borderRadius: "50%" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="white"
          fontFamily={"YekanBakh"}
          alignContent={"center"}
          alignItems={"center"}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="white" fontFamily={"YekanBakh"}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
