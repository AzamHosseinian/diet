import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import PyramidImage from "../assets/images/pyramid.png"; // Renamed the import to PyramidImage

const Pyramid = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      maxHeight: "100vh",
      bgcolor: "#FEFDF9",
      m: 0,
      textAlign: "center",
    }}
  >
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ width: "100%", maxWidth: 990, mx: "auto" }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontFamily: "YekanBakhBold",
            fontSize: "36px",
            textAlign: "right",
            direction: "rtl",
          }}
        >
          هرم غذایی رژیم مدیترانه‌ای
        </Typography>
        <Typography
          sx={{
            fontFamily: "YekanBakh",
            color: "black",
            fontSize: "18px",
            textAlign: "right",
            direction: "rtl",
          }}
        >
          هرم غذایی رژیم مدیترانه‌ای را مشاهده میکنید که بر اساس مواد غذایی سالم
          و مغذی ساخته شده است...
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img
          src={PyramidImage}
          alt="Mediterranean Diet Pyramid"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "0 150px 0 150px",
          }}
        />
      </Grid>
    </Grid>
  </Box>
);

export default Pyramid;
