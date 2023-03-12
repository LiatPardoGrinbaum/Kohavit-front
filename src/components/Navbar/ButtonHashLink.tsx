import { Button } from "@mui/material";
import { theme } from "../../theme";
import { NavHashLink } from "react-router-hash-link";

const buttonSX = {
  color: "black",
  padding: "0px 10px",
  height: "40px",
  "&:hover": {
    color: theme.palette.primary.main,
  },
};

type LinkProps = {
  to: string;
  text: string;
  onClick?: React.MouseEventHandler | undefined;
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
      activeStyle={{ color: "white", background: theme.palette.primary.light }}
      scroll={(el) => scrollWithOffset(el)}
      onClick={props.onClick}>
      {props.text}
    </Button>
  );
};

export default ButtonHashLink;

//other style to button active (need to change in Navbar comp in buttonSx as well)
/*   
  <Button
      className="buttonLinkNav"
      component={NavHashLink}
      to={props.to}
      sx={{ fontWeight: theme.typography.fontWeightBold, ...buttonSX }}
      activeStyle={{ color: "white", background: theme.palette.secondary.main }}
      scroll={(el) => scrollWithOffset(el)}
      onClick={props.onClick}>
      {props.text}
    </Button>
     */
