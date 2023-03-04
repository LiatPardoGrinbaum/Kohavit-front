import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";
// import { theme } from "../../../theme";
import bgHome from "../../../assets/homebgstars.png";
import divider from "../../../assets/svg/1769669.svg";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(5),
  direction: "rtl",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  color: "white",
  margin: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

const Home = () => {
  return (
    <Box
      height="100vh"
      width="100%"
      sx={{ position: "relative", backgroundColor: "primary.light", paddingTop: "2rem" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Title>תמונה</Title>
          </Box>
          <Box sx={{ flex: "1", marginTop: "2rem", zIndex: "1" }}>
            <Title>כשהנדסה פוגשת אומנות</Title>
            <p>להוסיף למעלה "טיפולים" דרופדאון עם הובר אבל לא של מטריאל. לראות באתר w3school</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ratione dolor qui eveniet, id eos
              veritatis cumque facilis numquam magnam adipisci, possimus repudiandae aperiam fuga voluptates atque
              laborum sint alias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sapiente
              consequatur perferendis eaque velit temporibus dolore quo reiciendis, fugit nostrum nulla ullam culpa
              delectus laudantium cum ipsum magni blanditiis! Ad.
            </p>
            <img src={divider} alt="My Happy SVG" height="200" />
          </Box>
        </CustomBox>
      </Container>
      <Box
        sx={{
          height: "500px",
          width: "70%",
          border: "solid 1px black",
          position: "absolute",
          zIndex: "0",
          bottom: "0",
          left: "0",
          backgroundImage: `URL(${bgHome}) `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 100%",
        }}></Box>
    </Box>
  );
};

export default Home;
