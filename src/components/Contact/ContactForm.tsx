import React from "react";
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";

const ContactForm = () => {
  return (
    <Grid>
      <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "2rem" }}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            או... מלא\י את הפרטים ואחזור אליך בהקדם.
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField placeholder="שם מלא" label="שם מלא" variant="outlined" fullWidth required />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="email"
                  placeholder="כתובת מייל"
                  label="כתובת מייל"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  placeholder="מספר טלפון"
                  label="מספר טלפון"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="הודעה"
                  multiline
                  rows={4}
                  placeholder="כתבי פה את ההודעה"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Submit
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
