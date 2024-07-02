import React from "react";
import { Box, Typography } from "@mui/material";

function InformationSection() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        padding: "20px",
        backgroundColor: "#FEFDF9",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "80px",
          right: 0,
          width: "15%",
          height: "60px",
          bgcolor: "#3531F2",
          color: "white",
          p: 2,
          borderTop: "1px solid #fff",
          borderRadius: "200px 0 0 200px",
          fontFamily: "YekanBakhBold",
          alignContent: "center",
          direction: "rtl",
        }}
      >
        <Typography
          variant="h6"
          fontFamily={"YekanBakhBold"}
          alignItems="center"
        >
          متخصص تغذیه
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center", // Center align items vertically
          margin: "100px",
        }}
      >
        <Box
          sx={{
            width: "45%",
            overflow: "hidden", // Ensures only the top part of the image is shown
            height: "500px", // Adjust the height as needed
            borderRadius: "30px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Added box shadow
          }}
        >
          <img
            src={require("../assets/images/dr.jpeg")}
            alt="Doctor Information"
            style={{
              width: "100%",
              objectFit: "cover",
              height: "100%", // Make sure the image covers the container height
            }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </Box>
        <article
          style={{
            width: "50%",
            fontFamily: "YekanBakh",
            direction: "rtl",
            marginLeft: "20px", // Adjusted margin for spacing between image and text
          }}
        >
          <h3>
            دکتر محمدرضا ربیعی فارغ التحصیل رشته تغذیه از دانشگاه شهید بهشتی با
            شماره نظام پزشکی ت-1118 با پنج سال سابقه کاری موفق و همکاری با
            هنرمندان و ورزشکاران است. محمدرضا ربیعی دارای بالاترین درصد رضایت
            مردمی در صفحه اینستاگرام خود و بیش از ۱۰۰۰ تجربه موفق از مراجعین خود
            دارد.
          </h3>
          <ul>
            <li>کارشناس تغذیه از دانشگاه علوم پزشکی شیراز</li>
            <li>کارشناس ارشد تغذیه ورزشی از دانشگاه شیراز</li>
            <li>دکتری بیوشیمی و متابولیسم ورزشی از دانشگاه شیراز</li>
            <li>عضو هیات مدیره انجمن تغذیه استان فارس</li>
            <li>مدرس دانشگاه زند شیراز</li>
          </ul>
        </article>
      </Box>
    </section>
  );
}

export default InformationSection;
