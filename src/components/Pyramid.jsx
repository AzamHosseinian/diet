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
      Height: "100vh",
      bgcolor: "#FEFDF9",
      m: 0,
      textAlign: "center",
    }}
  >
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ width: "100%", maxWidth: 1290, mx: "auto" }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mb: 4, // Add margin bottom for spacing
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
          رژیم غذایی مدیترانه‌ای، الگویی غذایی است که از سنت‌های غذایی مردمان
          نواحی زیتون‌خیز حوزه مدیترانه در دهه‌های ۱۹۵۰ و ۱۹۶۰ الهام گرفته و
          شامل مصرف بالای روغن زیتون، حبوبات، غلات کامل، میوه‌ها، سبزی‌ها و ماهی
          است، در حالی که مصرف گوشت قرمز محدود می‌شود. این رژیم به کاهش خطر
          بیماری‌های قلبی-عروقی و سایر بیماری‌های مزمن کمک می‌کند. تفاوت‌های
          فرهنگی و اقتصادی در کشورهای مدیترانه‌ای باعث شده تا تنوعی در این رژیم
          غذایی وجود داشته باشد. اصول کلی این رژیم در هرم غذایی مدیترانه‌ای نشان
          داده شده که شامل دستورالعمل‌های روزانه، هفتگی و گاه به گاه برای یک
          زندگی سالم‌تر است.
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
            width: "70%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "110px 0 110px 0",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Grid>
    </Grid>
  </Box>
);

export default Pyramid;
