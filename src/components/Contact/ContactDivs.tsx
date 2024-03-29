import { Grid, styled, Paper } from "@mui/material";
import { Phone, WhatsApp, LocationOn, AlternateEmail } from "@mui/icons-material";
import Button from "@mui/material/Button";

import Paragraph from "../../styles/Paragraph";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "#ffffffae",
}));

const contactWays = [
  {
    contactId: "phone",
    buttonIcon: (
      <Button sx={{ borderRadius: "50%", width: "60px", height: "60px" }} variant="contained">
        <Phone sx={{ color: "common.white" }} />
      </Button>
    ),
    text: <Paragraph fontColor="primary.dark">050-622-5490</Paragraph>,
  },
  {
    contactId: "whatsapp",
    buttonIcon: (
      <Button sx={{ borderRadius: "50%", width: "60px", height: "60px" }} variant="contained">
        <WhatsApp sx={{ color: "common.white" }} />
      </Button>
    ),
    text: <Paragraph fontColor="primary.dark">הודעת וואטספ</Paragraph>,
  },
  {
    contactId: "location",
    buttonIcon: (
      <Button sx={{ borderRadius: "50%", width: "60px", height: "60px" }} variant="contained">
        <LocationOn sx={{ color: "common.white" }} />
      </Button>
    ),
    text: <Paragraph fontColor="primary.dark">להוסיף כתובת בחולון</Paragraph>,
  },
  {
    contactId: "mail",
    buttonIcon: (
      <Button sx={{ borderRadius: "50%", width: "60px", height: "60px" }} variant="contained">
        <AlternateEmail sx={{ color: "common.white" }} />
      </Button>
    ),
    text: <Paragraph fontColor="primary.dark">email@gmail.com</Paragraph>,
  },
];

const ContactDivs = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: "2rem", direction: { xs: "row", sm: "column" } }}>
      {contactWays.map((contact) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={contact.contactId}>
            <Item>
              {contact.buttonIcon}
              {contact.text}
            </Item>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ContactDivs;
