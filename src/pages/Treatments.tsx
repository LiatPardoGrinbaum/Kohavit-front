import React from "react";
import { Box, styled, Typography } from "@mui/material";
import bgtreatments from "../assets/bgtreatments.png";
import { Container } from "@mui/material";
import TreatmentCard from "../components/TreatmentCard/TreatmentCard";
import Title from "../styles/Title";
import Divider from "../components/Divider/Divider";
import DividerWhite from "../components/Divider/DividerWhite";
import treatments from "../constants/treatmentCardsInfo";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(5),
  direction: "rtl",
  textAlign: "center",
  width: "100%",
  height: "350px",
  backgroundColor: "white",
  // padding: theme.spacing(0, 4, 0, 4),
  padding: "0",
  marginTop: "100px",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column-reverse",
    alignItems: "center",
    textAlign: "center",
  },
}));

const TreatmentsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "1rem",
  width: "80%",
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0",
    flexDirection: "column",
  },
}));

const Treatments = () => {
  return (
    <Box
      id="treatments"
      minHeight="100vh"
      width="100%"
      sx={{
        position: "relative",
        // backgroundColor: "primary.light",
        backgroundImage: "linear-gradient(to right, #bba296 0%, white 100%)",
        // paddingTop: "2rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
      }}>
      <MainBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundImage: `url(${bgtreatments})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
          }}>
          {" "}
          <DividerWhite />
          <Typography color="primary.dark" variant="h2" fontWeight="600" sx={{ textShadow: "2px 2px 5px #fff" }}>
            טיפולים
          </Typography>
          <DividerWhite />
        </Box>
      </MainBox>
      <Container
        maxWidth="xl"
        sx={{
          background: "white",
          padding: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <Title fontColor="primary.dark" fontSize="2rem">
          הטיפולים שלנו
        </Title>
        <Divider />
        <TreatmentsBox>
          {treatments.map((treatmentInfo) => {
            return (
              <TreatmentCard
                key={treatmentInfo.id}
                title={treatmentInfo.title}
                content={treatmentInfo.content}
                link={treatmentInfo.link}
                image={treatmentInfo.image}
              />
            );
          })}
        </TreatmentsBox>
      </Container>
    </Box>
  );
};

export default Treatments;
