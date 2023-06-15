import React from "react";
import { Box, styled, Button, Typography } from "@mui/material";
import { theme } from "../../theme";
import Title from "../../styles/Title";
// import bgHome from "../../../assets/homebgstars.png";
import homephoto from "../../assets/homephoto11.jpg";
import title from "../../assets/maintitle.png";
// import homephoto2 from "../../../assets/homephoto2.jpg";
import "../Home/style.css";
// import DividerStars from "../../Divider/DividerStars";
import PhoneIcon from "@mui/icons-material/Phone";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(5),
  direction: "rtl",
  textAlign: "center",
  width: "80%",

  // padding: theme.spacing(0, 4, 0, 4),
  padding: "0",
  marginTop: "65px",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column-reverse",
    alignItems: "center",
    textAlign: "center",
  },
}));
// const StarsBgBox = styled(Box)(({ theme }) => ({
//   height: "500px",
//   width: "70%",
//   position: "absolute",
//   zIndex: "0",
//   bottom: "0",
//   left: "0",
//   backgroundColor: "primary.light",
//   [theme.breakpoints.up("md")]: {
//     backgroundImage: `URL(${bgHome}) `,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "0% 100%",
//   },
// }));

const Home = () => {
  return (
    <Box
      minHeight="100vh"
      width="100%"
      sx={{
        position: "relative",
        // backgroundColor: "primary.light",
        backgroundImage: "linear-gradient(to right, #bba296 0%, white 100%)",
        // paddingTop: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <CustomBox>
        <Box
          sx={{
            width: { xs: "350px", sm: "500px" },
            maxWidth: "100%",
            zIndex: "1",
            overflowY: "hidden",
          }}
          className="imgContainer">
          <img src={homephoto} alt="kohi" />
        </Box>
        <Box
          sx={{
            zIndex: "1",
            maxWidth: "100%",
            width: { xs: "100%", lg: "60%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "4rem",
          }}>
          <Box
            sx={{
              width: "450px",
              maxWidth: "100%",
              zIndex: "1",
              overflowY: "hidden",
            }}
            className="imgTitleContainer">
            <img src={title} alt="main title" />
          </Box>

          {/* <DividerStars /> */}
          <Title fontColor="black" fontSize="2.5rem">
            כוכבית פרדו - אמנית איפור קבוע
          </Title>
          <Title fontColor="black" fontSize="1.5rem">
            איפור קבוע | נמשים | שפתיים | גבות
          </Title>
          <br></br>
          {/* <DividerStars /> */}
          <Button
            variant="contained"
            component="a"
            href="tel:+9720506225790"
            sx={{
              backgroundColor: "secondary.main",
              marginTop: "1.2rem",
              width: "300px",
              [theme.breakpoints.down("sm")]: {
                width: "210px",
              },
            }}>
            <Typography
              component="p"
              color="primary.main"
              sx={{
                fontSize: "1.3rem",
                display: "inline",
                marginLeft: "0.7rem",
                textDecoration: "none",
                color: "white",
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
              }}>
              התקשר\י עכשיו
            </Typography>

            <Typography
              color="praimary.main"
              sx={{ fontSize: "1.4rem", display: "inline", textDecoration: "none", color: "white" }}>
              050-622-5490
            </Typography>
            <PhoneIcon
              color="success"
              fontSize="medium"
              sx={{
                color: "white",
                marginRight: "10px",
                [theme.breakpoints.up("sm")]: {
                  display: "none",
                },
              }}
            />
          </Button>
        </Box>
      </CustomBox>

      {/* <StarsBgBox /> */}
    </Box>
  );
};

export default Home;
