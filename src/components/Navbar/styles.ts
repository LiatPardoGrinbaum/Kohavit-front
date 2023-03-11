import { styled, Toolbar, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { theme } from "../../theme";

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "theme.palette.primary.light",
  paddingRight: "0",
  [theme.breakpoints.down("sm")]: {
    paddingRight: "16px",
  },
});

export const CallBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
}));

export const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
  cursor: "pointer",
  display: "none",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
