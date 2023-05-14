import { Box, Typography, styled } from "@mui/material";
import PageHeading from "../components/PageHeading/PageHeading";
import bgtreatments from "../assets/bgtreatments.png";
import PageContainer from "../components/PageContainer/PageContainer";
import Divider from "../components/Divider/Divider";
import { SectionContainer } from "../styles/SectionContainer";

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

const Eyebrows = () => {
  return (
    <PageContainer>
      <MainBox>
        <PageHeading image={bgtreatments} title="גבות" />
      </MainBox>
      <SectionContainer>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            גבות טבעיות באיפור קבוע - כל השיטות
          </Typography>
          <Divider />
        </Box>
        <Box
          sx={{
            width: { sm: "100%", lg: "80%" },

            fontStyle: "italic",
            alignSelf: "center",
            padding: { xs: "1rem", lg: "2rem 6rem" },
            margin: "0.5rem",
            borderRadius: "1rem",
            borderBottom: `5px solid #EDA800`,
            borderTop: `5px solid #EDA800`,
          }}>
          <Typography sx={{ whiteSpace: "break-spaces", fontSize: "1.5rem", textAlign: "center" }}>
            כולן רוצות גבות טבעיות, יפות ומלאות, אבל לפעמים הגבות פשוט לא נראות כמו שאנחנו חולמות.<br></br> החדשות
            הטובות הן שבהחלט אפשר לשנות זאת באמצעות שיטות חדשניות.
          </Typography>
        </Box>
      </SectionContainer>
    </PageContainer>
  );
};

export default Eyebrows;
