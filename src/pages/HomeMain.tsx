import React from "react";
import { Box } from "@mui/material";
import Home from "../components/Home/Home";
import { SectionIdEnum } from "../types/SectionIdEnum";
import About from "../components/About/About";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";

const sections = [
  {
    sectionId: SectionIdEnum.home,
    component: <Home />,
  },
  {
    sectionId: SectionIdEnum.about,
    component: <About />,
  },
  {
    sectionId: SectionIdEnum.aboutMe,
    component: <AboutMe />,
  },
  {
    sectionId: SectionIdEnum.contact,
    component: <Contact />,
  },
];

const HomeMain = () => {
  return (
    <Box minHeight="100vh" bgcolor="white" width="100%" sx={{ display: "flex", flexDirection: "column" }}>
      {/* <Toolbar /> */}
      {sections.map((section) => {
        return (
          <Box id={section.sectionId} key={section.sectionId}>
            {section.component}
          </Box>
        );
      })}
    </Box>
  );
};

export default HomeMain;
