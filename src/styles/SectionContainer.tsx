import { styled, Box } from "@mui/material";

export const SectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: theme.spacing(3),
  direction: "rtl",
  // textAlign: "center",
  width: "100%",
  padding: "2rem",
  background: "white",

  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "right",
  },
}));
