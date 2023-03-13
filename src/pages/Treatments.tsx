import React from "react";
import { Box, styled, Typography } from "@mui/material";
import bgtreatments from "../assets/bgtreatments.png";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(5),
  direction: "rtl",
  textAlign: "center",
  width: "100%",
  height: "350px",

  // padding: theme.spacing(0, 4, 0, 4),
  padding: "0",
  marginTop: "100px",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column-reverse",
    alignItems: "center",
    textAlign: "center",
  },
}));

const Treatments = () => {
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
        alignItems: "flex-start",
      }}>
      <CustomBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${bgtreatments})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
          }}>
          <Typography variant="h2">טיפולים</Typography>
        </Box>
      </CustomBox>
    </Box>
  );
};

export default Treatments;
