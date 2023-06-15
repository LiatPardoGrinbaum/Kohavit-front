import { Typography } from "@mui/material";
// import { theme } from "../theme";

type TitleProp = {
  children: string;
  fontSize: string;
  fontColor: string;
  fontFamily?: string;
};
const Title = (props: TitleProp) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: props.fontSize,
          color: props.fontColor,

          fontFamily: props.fontFamily,
          // margin: theme.spacing(4, 0, 0, 0),
          // [theme.breakpoints.down("sm")]: {
          //   fontSize: "1.5rem",
          // },
        }}>
        {props.children}
      </Typography>
    </>
  );
};

export default Title;
