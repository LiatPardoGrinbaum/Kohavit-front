import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  // Button,
  Box,
  // Menu,
  // MenuItem,
  IconButton,
  // List,
  // ListItemButton,
  // ListItemText,
  // Collapse,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

import CloseIcon from "@mui/icons-material/Close";
import React from "react";

import { theme } from "../../theme";
import logo from "../../assets/logo3.png";
import ButtonHashLink from "./ButtonHashLink";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { StyledToolbar, CallBox, CustomMenuIcon } from "./styles";
import { NavHashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";
// import { NavHashLink } from "react-router-hash-link";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";

const boxSX = {
  textDecoration: "none",
  color: "black",
};

// const buttonSX = {
//   color: "black",
//   padding: "0px 10px",
//   height: "40px",
//   "&:hover": {
//     color: "primary.main",
//   },
// };

// const buttonListSx = {
//   // color: theme.palette.secondary.main,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   textAlign: "center",
//   padding: "0",
//   color: "black",
//   // padding: "0px 10px",
//   height: "40px",
//   "&:hover": {
//     color: "primary.main",
//   },
// };

//transition for dialog menu
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Navbar = () => {
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  // const [openNestedList, setOpenNestedList] = useState(false);
  const [navbarStyleScroll, setNavbarStyleScroll] = useState(false);

  window.addEventListener("scroll", changeNavbarStyle);
  function changeNavbarStyle() {
    if (window.scrollY >= 150) {
      setNavbarStyleScroll(true);
    } else {
      setNavbarStyleScroll(false);
    }
  }

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const open = Boolean(anchorEl);

  //open function for mobile menu icon
  const onOpenHandler = () => {
    setOpenMobileMenu(true);
  };
  const onCloseHandler = () => {
    setOpenMobileMenu(false);
  };

  // const handleClickNested = () => {
  //   setOpenNestedList(!openNestedList);
  // };

  return (
    <AppBar
      position="fixed"
      elevation={navbarStyleScroll ? 3 : 0}
      sx={{
        background: "#ffffffae",
        padding: navbarStyleScroll ? "0px 0px" : "18px 0px",
        // [theme.breakpoints.down("sm")]: {
        //   paddingRight: "16px",
        // },
        transition: "0.5s",
      }}>
      <StyledToolbar>
        <CallBox
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "10px",
            transition: "0.5s",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}>
          <PhoneIcon color="success" fontSize="medium" href="tel:+9720506225790" sx={{ cursor: "pointer", ...boxSX }} />
          <Typography component="a" href="tel:+9720506225790" sx={boxSX}>
            050-622-5490
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: theme.typography.fontSize, color: theme.palette.primary.main }}>
            {/* ??????????/?? ?????????? */}
          </Typography>
          {/* <Typography component="a" href="https://wa.me/10524555527" sx={{ textDecoration: "none", color: "white" }}>
            whatsapp
          </Typography> */}
        </CallBox>

        <CustomMenuIcon onClick={onOpenHandler} />
        <Dialog
          open={openMobileMenu}
          fullWidth
          fullScreen
          disableScrollLock={true}
          TransitionComponent={Transition}
          hideBackdrop={true}
          PaperProps={{
            sx: {
              background: theme.palette.secondary.main,
            },
          }}>
          <AppBar
            position="static"
            sx={{
              background: theme.palette.secondary.main,
              color: "text.primary",
            }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0.8rem" }}>
              <IconButton color="inherit" onClick={onCloseHandler}>
                <CloseIcon />
              </IconButton>
              <Typography variant="h5">??????????</Typography>
            </Toolbar>
          </AppBar>

          <Box display="flex" flexDirection="column">
            <ButtonHashLink linkto="/#home" text="??????" onClick={onCloseHandler} />
            <ButtonHashLink linkto="/#about" text=" ?????????? " onClick={onCloseHandler} />
            <ButtonHashLink linkto="/#treatments" text=" ?????????????? " onClick={onCloseHandler} />
            <ButtonHashLink linkto="/#contact" text="?????? ??????" onClick={onCloseHandler} />
            <ButtonHashLink linkto="/#aboutMe" text="  ?????? ????????" onClick={onCloseHandler} />
          </Box>
        </Dialog>

        {/* <Dialog
          open={openMobileMenu}
          fullWidth
          fullScreen
          disableScrollLock={true}
          TransitionComponent={Transition}
          hideBackdrop={true}
          PaperProps={{
            sx: {
              background: theme.palette.secondary.main,
            },
          }}>
          <AppBar
            position="static"
            sx={{
              background: theme.palette.secondary.main,
              color: "text.primary",
            }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "0.8rem" }}>
              <IconButton color="inherit" onClick={onCloseHandler}>
                <CloseIcon />
              </IconButton>
              <Typography variant="h5">??????????</Typography>
            </Toolbar>
          </AppBar>

          <List>
            <Box display="flex" flexDirection="column">
              <ButtonHashLink to="/#home" text="??????" onClick={onCloseHandler} />
              <ButtonHashLink to="/#about" text=" ?????????? " onClick={onCloseHandler} />
            </Box>
            <ListItemButton
              onClick={handleClickNested}
              sx={{
                color: "black",
                fontSize: "20px",
                padding: "0px 10px",
                height: "40px",
                fontWeight: "bold",
                "&:hover": {
                  color: "white",
                },
              }}>
              <ListItemText primary="??????????????" />
              {openNestedList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openNestedList} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  component={Link}
                  to="/"
                  onClick={onCloseHandler}
                  sx={{ ...buttonListSx, ...buttonSX, pr: 3 }}>
                  <ListItemText primary="?????????? ???????? ??????????" />
                </ListItemButton>
                <ListItemButton
                  component={Link}
                  to="/"
                  onClick={onCloseHandler}
                  sx={{ ...buttonListSx, ...buttonSX, pr: 3 }}>
                  <ListItemText primary="?????????? ???????? ??????????????" />
                </ListItemButton>
                <ListItemButton
                  component={Link}
                  to="/"
                  onClick={onCloseHandler}
                  sx={{ ...buttonListSx, ...buttonSX, pr: 3 }}>
                  <ListItemText primary="???????????? ?????????? ???????? ????????????" />
                </ListItemButton>
              </List>
            </Collapse>

            <Box display="flex" flexDirection="column">
              <ButtonHashLink to="/#contact" text="?????? ??????" onClick={onCloseHandler} />
              <ButtonHashLink to="/#aboutMe" text="  ?????? ????????" onClick={onCloseHandler} />
            </Box>
          </List>
        </Dialog>
      */}

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <ButtonHashLink linkto="/#contact" text="?????? ??????" />
          <ButtonHashLink linkto="/#aboutMe" text="  ?????? ????????" />
          <ButtonHashLink linkto="/treatments" text=" ?????????????? " />

          {/*    <Button
            className="buttonLinkNav"
            onClick={handleClick}
            sx={{ fontWeight: theme.typography.fontWeightBold, ...buttonSX }}>
            <p>??????????????</p>
          </Button> */}
          {/* <Menu
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
              <a href="www.google.com">?????????? ???????? ??????????</a>
            </MenuItem>
            <MenuItem onClick={handleClose}>?????????? ???????? ??????????????</MenuItem>
            <MenuItem onClick={handleClose}>???????????? ?????????? ???????? ????????????</MenuItem>
          </Menu> */}
          <ButtonHashLink linkto="/#about" text="  ??????????" />
          <ButtonHashLink linkto="/#home" text="  ??????" />
        </Box>
        <NavHashLink to="/#home">
          <img src={logo} alt="logo" width="150" />
        </NavHashLink>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
