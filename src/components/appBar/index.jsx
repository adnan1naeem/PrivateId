import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import webLogo from "../../assets/webLogo.svg";
import PrivateId from "../privateId";
import CompanyId from "../companyId";
import SalesId from "../saleId";
import { Box, Button, Hidden } from "@material-ui/core";
import { MenuDrawer } from "../drawer";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  flex: {
    display: "flex",
    justifyContent: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logo: {
    height: 61,
    width: 311,
    flex: 1,
    [theme.breakpoints.only("xs")]: {
      height: 30,
      width: 152,
    },
  },
  padding: {
    padding: 40,
    flex: 1,
    [theme.breakpoints.only("xs")]: {
      padding: "0px",
    },
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  btnFonts: {
    color: "#39ACE8",
    fontSize: 16,
    lineHeight: "16px",
    fontWeight: 500,
    fontFamily: "DM Sans",
    backgroundColor: "#0B216F",
    border: "1px solid #39ACE8",
    borderRadius: 180,
    padding: 10,
    marginLeft: 100,
  },
  dFlex: {
    display: "flex",
    [theme.breakpoints.only("xs")]: {
      display: "flex",
    },
  },
}));

export default function Appbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      padding={4}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "#0B216F" }}>
        <Box className={classes.dFlex}>
          <Hidden lgUp>
            <MenuDrawer />
          </Hidden>
          <Toolbar className={classes.padding}>
            <img className={classes.logo} src={webLogo} alt="logo" />

            <div className={classes.dFlex}>
              <Hidden mdDown className={classes.flex}>
                <div>
                  <PrivateId />
                </div>
                <div>
                  <CompanyId />
                </div>
                <div>
                  <SalesId />
                </div>
              </Hidden>
              <Hidden mdDown>
                <div>
                  <Button className={classes.btnFonts}>GET AN API KEY</Button>
                </div>
              </Hidden>
            </div>

            <div className={classes.sectionMobile}></div>
          </Toolbar>
        </Box>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
