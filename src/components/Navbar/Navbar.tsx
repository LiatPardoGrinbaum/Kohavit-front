import { AppBar, Toolbar, styled, Typography, Button, Box, Menu, MenuItem } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";
import { NavHashLink } from "react-router-hash-link";
// import { theme } from "../../theme";

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
  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <CallBox>
          <PhoneIcon color="success" fontSize="medium" />
          <Typography component="a" href="tel:+9720506225790" sx={{ textDecoration: "none", color: "white" }}>
            050-622-5490
          </Typography>
          <Typography component="a" href="https://wa.me/10524555527" sx={{ textDecoration: "none", color: "white" }}>
            whatsapp
          </Typography>
        </CallBox>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button
            className="buttonLinkNav"
            component={NavHashLink}
            to="/#contact"
            sx={{ fontWeight: "bold", fontFamily: `"Assistant", sans-serif`, fontSize: "18px" }}
            activeStyle={{ color: "white" }}>
            צרי קשר
          </Button>

          <Button
            className="buttonLinkNav"
            component={NavHashLink}
            to="/#aboutMe"
            sx={{ fontWeight: "bold", fontFamily: `"Assistant", sans-serif`, fontSize: "18px" }}
            activeStyle={{ color: "white" }}>
            קצת עליי
          </Button>

          <Button
            className="buttonLinkNav"
            onClick={handleClick}
            sx={{ fontWeight: "bold", fontFamily: `"Assistant", sans-serif`, fontSize: "18px" }}>
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
            sx={{ fontWeight: "bold", fontFamily: `"Assistant", sans-serif`, fontSize: "18px" }}
            activeStyle={{ color: "white" }}>
            אודות
          </Button>

          <Button
            className="buttonLinkNav"
            component={NavHashLink}
            to="/#home"
            sx={{ fontWeight: "bold", fontFamily: `"Assistant", sans-serif`, fontSize: "18px" }}
            activeStyle={{ color: "white" }}>
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
