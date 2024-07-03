import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function CustomCard({ title, description, imageUrl }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }} dir="rtl">
      <CardMedia
        component="img"
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
          textAlign="center"
          fontWeight={"bold"}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="white"
          fontFamily={"YekanBakh"}
          textAlign="center"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
