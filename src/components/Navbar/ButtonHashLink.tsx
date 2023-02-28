import { Button } from "@mui/material";
import { theme } from "../../theme";
import { NavHashLink } from "react-router-hash-link";

const buttonSX = {
  "&:hover": {
    color: "white",
  },
};

type LinkProps = {
  to: string;
  text: string;
};

const ButtonHashLink = (props: LinkProps) => {
  const scrollWithOffset = (el: Element) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <Button
      className="buttonLinkNav"
      component={NavHashLink}
      to={props.to}
      sx={{ fontWeight: theme.typography.fontWeightBold, ...buttonSX }}
      activeStyle={{ color: "white" }}
      scroll={(el) => scrollWithOffset(el)}>
      {props.text}
    </Button>
  );
};

export default ButtonHashLink;
