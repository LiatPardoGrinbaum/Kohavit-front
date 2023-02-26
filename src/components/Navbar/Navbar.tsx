import { AppBar, Toolbar, styled, Typography, Button, Box, Menu, MenuItem } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { theme } from "../../theme";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#bba296",
});

// const Icons = styled(Box)(({ theme }) => ({
//   display: "none",
//   alignItems: "center",
//   gap: "20px",
//   //up - if its sm or bigger than it
//   [theme.breakpoints.up("sm")]: {
//     display: "flex",
//   },
// }));
const CallBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
}));

const boxSX = {
  textDecoration: "none",
  color: "white",
  // "&:hover": {
  //   color: "lightblue",
  // },
};

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  // const [open, setOpen] = useState(false);

  const scrollWithOffset = (el: Element) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <AppBar position="fixed" elevation={0}>
      <StyledToolbar>
        <CallBox>
          <PhoneIcon color="success" fontSize="medium" href="tel:+9720506225790" sx={{ cursor: "pointer", ...boxSX }} />

          <Typography component="a" href="tel:+9720506225790" sx={boxSX}>
            050-622-5490
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: theme.typography.fontSize, color: theme.palette.primary.main }}>
            התקשר/י עכשיו
          </Typography>
          {/* <Typography component="a" href="https://wa.me/10524555527" sx={{ textDecoration: "none", color: "white" }}>
            whatsapp
          </Typography> */}
        </CallBox>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button
            className="buttonLinkNav"
            component={NavHashLink}
            to="/#contact"
            sx={{ fontWeight: theme.typography.fontWeightBold }}
            activeStyle={{ color: "white" }}
            scroll={(el) => scrollWithOffset(el)}>
            צרי קשר
          </Button>

          <Button
            className="buttonLinkNav"
            component={NavHashLink}
            to="/#aboutMe"
            sx={{ fontWeight: theme.typography.fontWeightBold }}
            activeStyle={{ color: "white" }}
            scroll={(el) => scrollWithOffset(el)}>
            קצת עליי
          </Button>

          <Button className="buttonLinkNav" onClick={handleClick} sx={{ fontWeight: theme.typography.fontWeightBold }}>
            <p>טיפולים</p>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{ direction: "rtl" }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}>
            <MenuItem onClick={handleClose}>
              <a href="www.google.com">איפור קבוע בגבות</a>
            </MenuItem>
            <MenuItem onClick={handleClose}>איפור קבוע בשפתיים</MenuItem>
            <MenuItem onClick={handleClose}>הדמיית זקיקי שיער ונמשים</MenuItem>
          </Menu>

          <Button
            className="buttonLinkNav"
            component={NavHashLink}
            to="/#about"
            sx={{ fontWeight: theme.typography.fontWeightBold }}
            activeStyle={{ color: "white" }}
            scroll={(el) => scrollWithOffset(el)}>
            אודות
          </Button>

          <Button
            className="buttonLinkNav"
            component={NavHashLink}
            to="/#home"
            sx={{ fontWeight: theme.typography.fontWeightBold }}
            activeStyle={{ color: "white" }}
            scroll={(el) => scrollWithOffset(el)}>
            בית
          </Button>
        </Box>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Kohavit LOGO
        </Typography>
      </StyledToolbar>
      {/*  <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu> */}
    </AppBar>
  );
};

export default Navbar;
