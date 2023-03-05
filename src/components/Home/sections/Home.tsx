import React from "react";
import { Box, styled } from "@mui/material";
// import { theme } from "../../../theme";
import Title from "../../../styles/Title";
import bgHome from "../../../assets/homebgstars.png";
import homephoto from "../../../assets/homephoto.png";
import "../../Home/style.css";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(5),
  direction: "rtl",
  textAlign: "center",
  width: "100%",
  padding: theme.spacing(0, 4, 0, 4),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));
const StarsBgBox = styled(Box)(({ theme }) => ({
  height: "500px",
  width: "70%",

  position: "absolute",
  zIndex: "0",
  bottom: "0",
  left: "0",
  backgroundImage: `URL(${bgHome}) `,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0% 100%",
}));

const Home = () => {
  return (
    <Box
      minHeight="100vh"
      width="100%"
      sx={{ position: "relative", backgroundColor: "primary.light", paddingTop: "2rem" }}>
      <CustomBox>
        <Box sx={{ width: { xs: "400px", sm: "650px" }, zIndex: "1", overflowY: "hidden" }} className="imgContainer">
          <img src={homephoto} alt="kohi" />
        </Box>
        <Box sx={{ marginTop: "2rem", zIndex: "1", width: "50%" }}>
          <Title fontColor="white" fontSize="2rem">
            כשהנדסה פוגשת אומנות
          </Title>
          <p>להוסיף למעלה "טיפולים" דרופדאון עם הובר אבל לא של מטריאל. לראות באתר w3school</p>
          <p>להוסיף</p>
        </Box>
      </CustomBox>

      <StarsBgBox />
    </Box>
  );
};

export default Home;
