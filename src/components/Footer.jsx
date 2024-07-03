import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#3233F2",
        color: "white",
        py: 4,
        fontFamily: "YekanBakh",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        {/* First Column - Logo and Social Icons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src="logo-footer.svg"
            alt="Logo"
            sx={{ height: "100px", mb: 2 }}
          />

          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
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

        {/* Second Column - Quick Access Links */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            direction: "rtl",
            textAlign: "right",
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "YekanBakh", mb: 1 }}>
            دسترسی آسان
          </Typography>
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

        {/* Third Column - Text Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "right",
            direction: "rtl",
            maxWidth: "500px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontFamily: "YekanBakh", mb: 1, fontWeight: "bold" }}
          >
            زندگی سالم با رژیم مدیترانه‌ای: استراتژی‌های دکتر ربیعی
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: "YekanBakh", lineHeight: 2 }}
          >
            در این وبسایت، ما با بهره‌گیری از دانش و تخصص دکتر محمدرضا ربیعی،
            متخصص تغذیه و سلامتی، به شما کمک می‌کنیم تا به یک زندگی سالم‌تر و
            بهتر دست یابید. هدف ما ارائه راهکارهای غذایی علمی و مبتنی بر آخرین
            یافته‌های پزشکی است تا هر فرد بتواند بهترین نتایج را در مسیر تناسب
            اندام و سلامت عمومی خود کسب کند. ما به شما اطمینان می‌دهیم که با
            پیروی از راهنمایی‌های دکتر محمدرضا ربیعی، شما قدم‌های موثری در جهت
            بهبود کیفیت زندگی‌تان خواهید داشت.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
