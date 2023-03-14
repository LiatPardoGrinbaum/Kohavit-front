import { Grid, styled, Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ContactDivs = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: "2rem", direction: { xs: "row", sm: "column" } }}>
      <Grid item xs={12} sm={6} md={3}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  );
};

export default ContactDivs;
