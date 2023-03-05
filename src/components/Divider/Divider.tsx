import { Box } from "@mui/material";
import dividerLine from "../../assets/svg/divider.svg";

const Divider = () => {
  return (
    <Box sx={{ height: "40px" }}>
      <img src={dividerLine} alt="My Happy SVG" height="200" />
    </Box>
  );
};

export default Divider;
