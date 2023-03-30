import React from "react";
import { Box, Container } from "@mui/material";
import Title from "../../styles/Title";

import Divider from "../Divider/Divider";
import ContactForm from "./ContactForm";
import ContactDivs from "./ContactDivs";
import "./style.css";
import contactbg from "../../assets/contactbg.png";

const transparentBg = {
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  // flexDirection: "column",
  backgroundImage: `url(${contactbg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  // width: "100%",
  // height: "100%",
};

const Contact = () => {
  return (
    <Box minHeight="100vh" bgcolor="common.white" sx={transparentBg}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "0.5rem 0",
            direction: "rtl",
            gap: "1rem",
          }}>
          <Title fontColor="primary.dark" fontSize="2rem">
            צרי קשר
          </Title>
          <Divider />
          <ContactDivs />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              flexDirection: { xs: "column", sm: "column", lg: "row" },
            }}>
            <ContactForm />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <iframe
                className="iframe-map"
                title="map location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13531.63327494852!2d34.79562943663796!3d32.01759706213614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b4bb0c33bf39%3A0xfbdd79640525e72d!2z15fXldec15XXnw!5e0!3m2!1siw!2sil!4v1678799013436!5m2!1siw!2sil"
                style={{ border: "0" }}
                width="600"
                height="450"
                allowFullScreen={undefined}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
            <Box sx={{ display: { xs: "blcok", sm: "none" } }}>
              {" "}
              <iframe
                className="iframe-map"
                title="map location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13531.63327494852!2d34.79562943663796!3d32.01759706213614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b4bb0c33bf39%3A0xfbdd79640525e72d!2z15fXldec15XXnw!5e0!3m2!1siw!2sil!4v1678799013436!5m2!1siw!2sil"
                style={{ border: "0" }}
                width="300"
                height="300"
                allowFullScreen={undefined}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
          </Box>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio eum, iusto voluptates fugit quas
            dolorem rerum ipsa quia totam quibusdam blanditiis dolores unde placeat quos commodi, rem, perferendis
            sapiente repellat!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quod maxime rem
            corrupti? Vel officia, exercitationem ea voluptates, assumenda quod maiores quam enim nisi itaque illum
            fugiat dolores hic similique.
          </p>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
