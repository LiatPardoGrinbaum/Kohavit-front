import { Box, Typography } from "@mui/material";

import DividerWhite from "../../components/Divider/DividerWhite";

type headingProps = {
  image: String;
  title: string;
};

const PageHeading = (props: headingProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}>
      {" "}
      <Typography color="primary.dark" variant="h2" fontWeight="600" sx={{ textShadow: "2px 2px 5px #fff" }}>
        {props.title}
      </Typography>
      <DividerWhite />
    </Box>
  );
};

export default PageHeading;
