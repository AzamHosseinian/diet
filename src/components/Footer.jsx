import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#3233F2",
        color: "white",
        p: 2,
        fontFamily: "YekanBakh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        {/* First Column - Left Side */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TextField
            placeholder="شماره همراه خود را وارد کنید"
            variant="outlined"
            sx={{
              bgcolor: "white",
              borderRadius: "30px 0 0 30px",
              "& .MuiOutlinedInput-input": {
                textAlign: "right",
                fontFamily: "YekanBakh",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              width: "70%",
              m: 0,
              height: "56px",
            }}
          />
          <Button
            variant="contained"
            color="warning"
            sx={{
              borderRadius: "0 30px 30px 0",
              height: "56px",
              fontFamily: "YekanBakh",
              width: "30%",
            }}
          >
            دریافت رژیم
          </Button>
        </Box>

        {/* Second Column - Center */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body1" sx={{ fontFamily: "YekanBakh" }}>
            درباره ما
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: "YekanBakh" }}>
            مقالات
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: "YekanBakh" }}>
            تماس با ما
          </Typography>
        </Box>

        {/* Third Column - Right Side */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              mr: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "YekanBakh" }}>
              شبکه های اجتماعی
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <TelegramIcon />
              </IconButton>
            </Box>
          </Box>
          <Box
            component="img"
            src="logo-footer.svg"
            alt="Logo"
            sx={{ height: "100px" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
