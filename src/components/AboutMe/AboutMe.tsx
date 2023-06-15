import { Box, Typography } from "@mui/material";
// import Paragraph from "../../../styles/Paragraph";
import Title from "../../styles/Title";
import DividerWhite from "../Divider/DividerWhite";
import { theme } from "../../theme";
import photo from "../../assets/homephoto2.jpg";

const AboutMe = () => {
  return (
    <Box minHeight="90vh" bgcolor="primary.main" sx={{ display: "flex", justifyContent: "center" }}>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            margin: theme.spacing(6, 0, 0, 0),
          }}>
          <Typography
            variant="subtitle1"
            sx={{
              width: "50%",
              fontSize: "1.4rem",
              color: "common.white",
              padding: "1.5rem",
              [theme.breakpoints.down("sm")]: {
                fontSize: "1.5rem",
                padding: "0",
                width: "90%",
              },
            }}>
            <strong>היי, אני כוכבית. נעים להכיר!</strong>
            <br></br> <br></br>
            אני כוכבית - מהנדסת מיפוי ואמנית איפור קבוע בכל השיטות. <br></br>
            מצד אחד אני אמנית בנשמה ויש לי כשרון ציור מולד, ולכן אני יודעת לזהות פרופורציות נכונות בשרטוט שאני יוצרת
            ממנו בסוף מתפתח התוצר הסופי. מצד שני אני מהנדסת בתארים ובנשמה והדיוק חשוב לי, מה שאומר שאני שמה לב לפרטים
            קטנים מאוד ובכלל אני פריקית של סימטריה ורמת דיוק גבוהה. עבורי כל יצירה כזו מחדש היא אומנות לשמה! פשוט
            כיףףף!!! אני מקפידה על רמת סטריליות גבוהה בעמדת העבודה. וגם מסוגלת להגיע לעבוד ממש אצלך בבית ובנוחיות שלך!
          </Typography>

          <Box
            sx={{
              width: { xs: "350px", sm: "400px" },
              maxWidth: "100%",
              zIndex: "1",
              overflowY: "hidden",
              padding: "1.5rem",
            }}
            className="imgContainer">
            <img src={photo} alt="kohiphoto" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
