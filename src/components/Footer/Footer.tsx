import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box>
      <Typography variant="h6">- להוסיף פרטים - צרי קשר</Typography>
      <Typography variant="h6"> להוסיף קישורים לטיפולים השונים ועמוד הבית</Typography>
      <Typography variant="h6">Developed and desiged by </Typography>
      <Link
        variant="h6"
        href="https://liat-portfolio.netlify.app/"
        underline="none"
        target="blank"
        sx={{ color: "black", "&:hover": { color: "white" } }}>
        &copy; Liat Pardo Grinbaum {new Date().getUTCFullYear()} &copy;{" "}
      </Link>
    </Box>
  );
};

export default Footer;
