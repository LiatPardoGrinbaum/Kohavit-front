import { Typography } from "@mui/material";
import { theme } from "../theme";

//  const TitleStyle = styled(Typography)({
//   fontSize: "2rem",
//   color: "white",
//   fontFamily: ` 'Secular One', sans-serif`,
//   margin: theme.spacing(4, 0, 4, 0),
//   [theme.breakpoints.down("sm")]: {
//     fontSize: "1.5rem",
//   },
// });

type TitleProp = {
  children: string;
  fontSize: string;
  fontColor: string;
};
const Title = (props: TitleProp) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: props.fontSize,
          color: props.fontColor,

          fontFamily: ` 'Secular One', sans-serif`,
          margin: theme.spacing(4, 0, 0, 0),
          [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem",
          },
        }}>
        {props.children}
      </Typography>
    </>
  );
};

export default Title;
