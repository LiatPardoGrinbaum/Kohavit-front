import { styled, Toolbar } from "@mui/material";
import { theme } from "../../theme";

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.primary.light,
});
