import React from "react";
import { Box, styled } from "@mui/material";
import bgtreatments from "../assets/bgtreatments.png";
import { Container } from "@mui/material";
import TreatmentCard from "../components/TreatmentCard/TreatmentCard";
import Title from "../styles/Title";
import Divider from "../components/Divider/Divider";

import treatments from "../constants/treatmentCardsInfo";
import PageHeading from "../components/PageHeading/PageHeading";
import PageContainer from "../components/PageContainer/PageContainer";

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
    <PageContainer>
      <MainBox>
        <PageHeading image={bgtreatments} title="טיפולים" />
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
    </PageContainer>
  );
};

export default Treatments;
