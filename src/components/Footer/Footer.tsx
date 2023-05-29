import { Box, Typography } from "@mui/material";
import { theme } from "../../theme";

const Footer = () => {
  return (
    <Box
      sx={{
        background: theme.palette.primary.dark,
        minHeight: "10vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem",
      }}>
      <Typography sx={{ fontSize: "14px", fontFamily: `'Poppins', sans-serif`, color: "white" }}>
        Website designed and developed by
      </Typography>
      <Typography
        component="a"
        href="https://github.com/LiatPardoGrinbaum"
        target="blank"
        sx={{
          color: "white",
          fontSize: "16px",
          fontFamily: `'Poppins', sans-serif`,
          textDecoration: "none",
          "&:hover": { color: "primary.main", fontWeight: "bold" },
        }}>
        Liat Pardo Grinbaum {new Date().getUTCFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
