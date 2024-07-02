import React from "react";
import { Box, Button, Grid, Typography, Paper } from "@mui/material";

function MainSection() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "670px",
        bgcolor: "#FEFDF9",
      }}
    >
      {/* Left Column */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "70%",
            height: "80%",
            borderRadius: "170px 0 170px 0",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="Hero.jpg"
            alt="Hero in Box"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Paper>
      </Grid>

      {/* Right Column */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            direction: "rtl",
            padding: "20px",
            color: "#3A3A97",
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{ marginBottom: "20px", fontFamily: "YekanBakhBold" }}
          >
            رژیم مدیترانه‌ای، نه فقط غذا بلکه یک سبک زندگی است.
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "20px", fontFamily: "YekanBakh" }}
          >
            برنامه شخصی سازشده خود را دریافت کنید، ما در هر مرحله با شماییم.
          </Typography>
          <Button
            variant="contained"
            sx={{
              color: "#3A3A97",
              border: "1px solid #FFA301",
              borderRadius: "10px",
              fontWeight: "bold",
              boxShadow: "-2px 3px 6px rgba(0, 0, 0, 0.25)",
              padding: "8px 36px",
              fontFamily: "YekanBakhBold",
              backgroundColor: "#FFA301",
              "&:hover": {
                backgroundColor: "transparent",
                border: "1px solid #e69500",
              },
              width: "150px",
            }}
          >
            دریافت رژیم
          </Button>
        </Box>
        <Box
          sx={{
            width: "30%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "70px",
          }}
        >
          <img
            src="kashi.svg"
            alt="Decorative pattern"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            without
            distortion
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default MainSection;
