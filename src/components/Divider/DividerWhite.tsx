import { Box } from "@mui/material";
import dividerLineWhite from "../../assets/svg/dividerWhite.svg";

const DividerWhite = () => {
  return (
    <Box sx={{ height: "40px" }}>
      <img src={dividerLineWhite} alt="My Happy SVG" height="200" />
    </Box>
  );
};

export default DividerWhite;
