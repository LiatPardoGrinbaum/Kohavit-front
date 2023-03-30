import React from "react";
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import "./style.css";

// const alignLabel = {
//   "& label": {
//     left: "unset",
//     right: "1.75rem",
//     transformOrigin: "right",
//   },
//   "& legend": {
//     textAlign: "right",
//   },
// };

const ContactForm = () => {
  return (
    <Grid>
      <Card sx={{ maxWidth: 450, padding: "10px", margin: "1rem", background: "#ffffffae" }}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            או... מלאי את הפרטים ואחזור אליך בהקדם.
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField placeholder="שם מלא" variant="outlined" fullWidth required size="small" />
              </Grid>

              <Grid item xs={12}>
                <TextField type="email" placeholder="כתובת מייל" variant="outlined" fullWidth required size="small" />
              </Grid>
              <Grid item xs={12}>
                <TextField type="number" placeholder="מספר טלפון" variant="outlined" fullWidth required size="small" />
              </Grid>
              <Grid item xs={12}>
                <TextField multiline rows={3} placeholder="כתבי פה את ההודעה" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" sx={{ color: "white" }} fullWidth>
                  שליחה
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ContactForm;
