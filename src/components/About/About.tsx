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
            איפור קבוע לגבות עיניים ולשפתיים הוא אמנות לכל דבר ועניין 🎨<br></br>
            בכדי להשיג את התוצאה המושלמת, יש לשלב כישרון ודיוק וליישם טכניקות מתקדמות. <br></br>✘ לא עוד מספריים, פינצטה
            וחוט שמצריך תחזוק חודשי.. 🤦‍♀️<br></br>✘ לא עוד איפור קבוע בשיטה ישנה ממנה לא ניתן לחזור.. 🏃<br></br>✔ כן
            עיצוב גבות/שפתיים/איילנר בשיטה טכנולוגית חדישה שיטת המיקרו – פיגמנטציה 💪 ובנוסף גם בטכניקות נוספות כגון:
            טכניקת האבקה, מיקרוביליידינג, הצללה והשיטה המשולבת. <br></br>
            תשמחי לגלות שלצד כישרון טבעי, השכלה כמהנדסת והקפדה על רמה מקצועית בלתי מתפשרת, אני מחזיקה בידע, כלים והיכרות
            עם כל השיטות המתקדמות והאיכותיות לאיפור קבוע בשפתיים עיניים ובגבות – מה שיבטיח שלא תתפשרי על פחות מהתוצאות
            המושלמות!
          </Paragraph>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
