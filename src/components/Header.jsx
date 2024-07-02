import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import InputIcon from "@mui/icons-material/Input";

function Header() {
  return (
    <AppBar
      position="static"
      style={{
        background: "#FEFDF9",
        color: "#3A3A97",
        padding: "0 50px 0 40px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left-side Button with specific styling */}
        <Button
          variant="outlined"
          endIcon={<InputIcon />}
          href="#login"
          sx={{
            color: "#3A3A97",
            border: "1px solid #FFA301",
            borderRadius: "10px",
            fontWeight: "bold",
            boxShadow: "-2px 3px 6px rgba(0, 0, 0, 0.25)",
            padding: "8px 36px",
            fontFamily: "YekanBakhBold",
          }}
        >
          ورود
        </Button>

        {/* Right-side Box containing buttons and the logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            color="inherit"
            href="#about"
            sx={{ mx: 2, fontFamily: "YekanBakhBold" }}
          >
            درباره ما
          </Button>
          <Button
            color="inherit"
            href="#article"
            sx={{ mx: 2, fontFamily: "YekanBakhBold" }}
          >
            بلاگ ها
          </Button>
          <Button
            color="inherit"
            href="#home"
            sx={{ mx: 2, fontFamily: "YekanBakhBold" }}
          >
            صفحه اصلی
          </Button>
          <img src="logo-nav.svg" alt="Logo" style={{ height: "100px" }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
