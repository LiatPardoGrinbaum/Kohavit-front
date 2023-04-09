import { Box, styled } from "@mui/material";
import PageHeading from "../components/PageHeading/PageHeading";
import bgtreatments from "../assets/bgtreatments.png";
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

const Freckles = () => {
  return (
    <PageContainer>
      <MainBox>
        {" "}
        <PageHeading image={bgtreatments} title="נמשים" />
      </MainBox>
    </PageContainer>
  );
};

export default Freckles;
