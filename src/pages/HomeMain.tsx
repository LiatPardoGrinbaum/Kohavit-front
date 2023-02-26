import React from "react";
import { Box, Toolbar } from "@mui/material";
import Home from "../components/Home/sections/Home";
import { SectionIdEnum } from "../types/SectionIdEnum";
import About from "../components/Home/sections/About";
import AboutMe from "../components/Home/sections/AboutMe";
import Contact from "../components/Home/sections/Contact";

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
    <Box minHeight="100vh" bgcolor="white">
      <Toolbar />
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
