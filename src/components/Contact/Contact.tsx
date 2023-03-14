import React from "react";
import { Box, Container } from "@mui/material";
import Title from "../../styles/Title";

import Divider from "../Divider/Divider";
import ContactForm from "./ContactForm";
import ContactDivs from "./ContactDivs";

const Contact = () => {
  return (
    <Box minHeight="100vh" bgcolor="common.white">
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "0.5rem",
            direction: "rtl",
            gap: "1rem",
          }}>
          <Title fontColor="primary.dark" fontSize="2rem">
            צרי קשר
          </Title>
          <Divider />
          <ContactDivs />
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%" }}>
            <ContactForm />
            <p>lol</p>
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
