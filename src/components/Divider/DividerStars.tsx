import { Box } from "@mui/material";

import StarIcon from "@mui/icons-material/Star";

const DividerStars = () => {
  return (
    <Box sx={{ height: "40px", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <StarIcon color="inherit" sx={{ fontSize: "1rem" }} />
      <StarIcon color="inherit" fontSize="small" />
      <StarIcon color="inherit" fontSize="medium" />
      <StarIcon color="inherit" fontSize="large" />
      <StarIcon color="inherit" fontSize="medium" />
      <StarIcon color="inherit" fontSize="small" />
      <StarIcon color="inherit" sx={{ fontSize: "1rem" }} />
    </Box>
  );
};

export default DividerStars;
