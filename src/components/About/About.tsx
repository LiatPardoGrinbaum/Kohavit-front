import { Box, Container } from "@mui/material";
import Paragraph from "../../styles/Paragraph";
import Title from "../../styles/Title";
// import { theme } from "../../../theme";
import Divider from "../Divider/Divider";

const About = () => {
  return (
    <Box minHeight="70vh" bgcolor="white">
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
          <Title fontColor="primary.dark" fontSize="2rem">
            מה זה בעצם איפור קבוע?
          </Title>
          <Divider />
          <Paragraph fontColor="primary.dark">
            <strong>לשנות תוכן!!</strong>
            איפור קבוע הוא אחד הטרנדים החמים ביותר כיום בעולם בכלל ובארץ בפרט, ואם תשאלו אותנו, הטרנד הזה לא הולך לשום
            מקום בזמן הקרוב. האיפור הקבוע, המכונה גם כטיפול מיקרופיגמנטציה, הוא טכניקה קוסמטית הפועלת בעזרת מכונת
            קעקועים המחדירה את הפיגמנט הרצוי לעור בעזרת מחט ייעודית. <br></br>האיפור הקבוע חייב להתבצע על ידי גורם מוסמך
            בעל ניסיון המסוגל לבצע את הטיפול בצורה הבטוחה, והאסתטית ביותר לקבלת תוצאה מיטבית עבור הלקוחה.
          </Paragraph>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
