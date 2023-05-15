import { Box, Typography, styled } from "@mui/material";
import PageHeading from "../components/PageHeading/PageHeading";
import bgtreatments from "../assets/bgtreatments.png";
import PageContainer from "../components/PageContainer/PageContainer";
// import Divider from "../components/Divider/Divider";
import { SectionContainer } from "../styles/SectionContainer";
import { eyebrows } from "../constants/eyebrowsPage";

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
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.dark" }}>
            {eyebrows.title}
          </Typography>
          {/* <Divider /> */}
        </Box>
        <Box
          sx={{
            width: { sm: "100%", lg: "80%" },

            fontStyle: "italic",
            alignSelf: "center",
            // padding: { xs: "1rem", lg: "2rem 6rem" },
            margin: "0.5rem",
            // borderRadius: "1rem",
            // borderBottom: `5px solid #EDA800`,
            // borderTop: `5px solid #EDA800`,
          }}>
          <Typography sx={{ whiteSpace: "break-spaces", fontSize: "1.5rem", textAlign: "center" }}>
            {eyebrows.description}
          </Typography>
        </Box>
        <Box
          sx={{
            alignSelf: "flex-start",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start ",
            flexDirection: "column",
            gap: "0.5rem",
          }}>
          <Box sx={{ width: "100%" }}>
            {eyebrows.methods.map((method) => {
              return (
                <>
                  <Typography
                    sx={{ fontWeight: "bold", color: "primary.dark", fontSize: "25px" }}
                    key={method.subtitle}>
                    {method.subtitle}
                  </Typography>
                  <Typography sx={{ whiteSpace: "break-spaces" }}>{method.text}</Typography>
                </>
              );
            })}

            <Typography
              sx={{ whiteSpace: "break-spaces" }}
              dangerouslySetInnerHTML={{ __html: eyebrows.summary }}></Typography>
          </Box>
        </Box>
      </SectionContainer>
    </PageContainer>
  );
};

export default Eyebrows;
