import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import { theme } from "../../../theme";

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
    <Box minHeight="100vh" bgcolor="#bba296">
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Title>תמונה</Title>
          </Box>
          <Box sx={{ flex: "1", marginTop: "2rem" }}>
            <Title>כשהנדסה פוגשת אומנות</Title>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Home;
