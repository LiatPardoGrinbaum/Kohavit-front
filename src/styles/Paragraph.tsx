import { Typography } from "@mui/material";
import React from "react";
import { theme } from "../theme";

type ParagraphProp = {
  children: React.ReactNode;
  fontColor: string;
};
const Paragraph = (props: ParagraphProp) => {
  return (
    <>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: "1.4rem",
          color: props.fontColor,
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

export default Paragraph;
