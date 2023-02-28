import { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { theme } from "../../theme";
import logo from "../../assets/logo.png";
import ButtonHashLink from "./ButtonHashLink";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#bba296",
});

const CallBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
}));

const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
  cursor: "pointer",
  display: "none",
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const boxSX = {
  textDecoration: "none",
  color: "white",
  // "&:hover": {
  //   color: "lightblue",
  // },
};
const buttonSX = {
  "&:hover": {
    color: "white",
  },
};

// const pages = [];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  // const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  //transition for dialog menu
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  //open function for mobile menu icon
  const onOpenHandler = () => {
    setOpenMobileMenu(true);
  };
  const onCloseHandler = () => {
    setOpenMobileMenu(false);
  };

  return (
    <AppBar position="fixed" elevation={0}>
      <StyledToolbar>
        <CallBox sx={{ display: { xs: "none", md: "flex" } }}>
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

        <CustomMenuIcon onClick={onOpenHandler} />
        <Dialog open={openMobileMenu} fullScreen fullWidth hideBackdrop={true}>
          <AppBar position="static" sx={{ background: "white", color: "text.primary" }}>
            <Toolbar>
              <Typography variant="h5" sx={{ flexGrow: 1 }}>
                תפריט
              </Typography>
              <IconButton color="inherit" onClick={onCloseHandler}>
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <ButtonHashLink to="/#contact" text="צרי קשר" />
          <ButtonHashLink to="/#aboutMe" text="  קצת עליי" />
        </Dialog>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <ButtonHashLink to="/#contact" text="צרי קשר" />
          <ButtonHashLink to="/#aboutMe" text="  קצת עליי" />

          <Button
            className="buttonLinkNav"
            onClick={handleClick}
            sx={{ fontWeight: theme.typography.fontWeightBold, ...buttonSX }}>
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
          <ButtonHashLink to="/#about" text="  אודות" />
          <ButtonHashLink to="/#home" text="  בית" />
        </Box>
        <img src={logo} alt="logo" width="150" />
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
