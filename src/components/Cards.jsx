import React from "react";
import CustomCard from "./CustomCard";
import { Box, Grid, Typography, Container } from "@mui/material";
import PackageOne from "../assets/images/PackageOne.png";
import PackageTwo from "../assets/images/PackageTwo.png";
import PackageThree from "../assets/images/PackageThree.png";

const cardsData = [
  {
    id: 1,
    title: "پکیج اول رژیم",
    description: "۲۵۰.۰۰۰ تومان",
    imageUrl: PackageOne,
  },
  {
    id: 2,
    title: "پکیج دوم رژیم",
    description: "۲۵۰.۰۰۰ تومان",
    imageUrl: PackageTwo,
  },
  {
    id: 3,
    title: "پکیج سوم رژیم",
    description: "۲۵۰.۰۰۰ تومان",
    imageUrl: PackageThree,
  },
];

function CardsSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        height: "100vh",
        position: "relative",
        bgcolor: "#FEFDF9",
        overflow: "auto",
      }}
      dir="rtl"
    >
      <Container sx={{ mt: 8, mb: 4 }}>
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          textAlign="center"
          fontFamily={"YekanBakhBold"}
          color="#3A3A97"
          fontSize={"36px"}
        >
          برنامه های سلامتی
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          fontFamily={"YekanBakh"}
          color="#3A3A97"
          fontSize={"18px"}
          mb={4}
        >
          شما می توانید برنامه های رژیمی مختلف را مشاهده کرده و خریداری نمایید.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {cardsData.map((card) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={card.id}
              sx={{
                fontFamily: "YekanBakh",
                "& .MuiPaper-root": {
                  bgcolor: "#3531F2",
                  borderRadius: "20px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                },
              }}
            >
              <CustomCard
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                imageStyle={{ borderRadius: "50%" }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "25%",
          height: "60px",
          bgcolor: "#3531F2",
          color: "white",
          p: 2,
          borderTop: "1px solid #fff",
          borderRadius: "0 200px 200px 0",
          fontFamily: "YekanBakhBold",
        }}
      >
        <Typography
          variant="h6"
          fontFamily={"YekanBakhBold"}
          alignItems="center"
        >
          به سلامتی خود، با هر لقمه، نزدیک‌تر شوید.
        </Typography>
      </Box>
    </Box>
  );
}

export default CardsSection;
