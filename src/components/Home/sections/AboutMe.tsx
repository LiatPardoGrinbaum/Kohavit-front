import { Box, Container, Typography } from "@mui/material";
// import Paragraph from "../../../styles/Paragraph";
import Title from "../../../styles/Title";
import DividerWhite from "../../Divider/DividerWhite";
import { theme } from "../../../theme";

const AboutMe = () => {
  return (
    <Box minHeight="90vh" bgcolor="secondary.main">
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "0.5rem",
            direction: "rtl",
          }}>
          <Title fontColor="white" fontSize="2rem">
            קצת עליי
          </Title>
          <DividerWhite />
          <Box sx={{ display: "flex", flexDirection: "row", margin: theme.spacing(6, 0, 0, 0) }}>
            <Typography
              variant="subtitle1"
              sx={{
                width: "50%",
                fontSize: "1.4rem",
                color: "white",

                [theme.breakpoints.down("sm")]: {
                  fontSize: "1.5rem",
                },
              }}>
              <strong>היי, אני כוכבית. נעים להכיר!</strong>
              <br></br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius harum incidunt modi alias
              consectetur quae ratione ut corrupti aliquam placeat velit, dignissimos voluptatibus. Libero ad quisquam
              soluta itaque possimus!
            </Typography>

            <Box sx={{ width: "200px", height: "300px", background: "white", flex: 1 }}>IMAGE</Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
