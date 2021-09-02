import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { ButtonBase, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.only("xl")]: {
      flex: 1,
    },
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  itemsText: {
    color: "#0B216E",
    fontSize: 16,
    lineHeight: "16px",
    fontWeight: 500,
    fontFamily: "DM Sans",
    whiteSpace: "normal",
    maxWidth: 224,
    [theme.breakpoints.up("xl")]: {
      fontSize: 21,
      lineHeight: "35px",
    },
  },
  idTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: "20px",
    fontWeight: 500,
    fontFamily: "DM Sans",
    textTransform: "inherit",
    [theme.breakpoints.only("xl")]: {
      fontSize: 22,
      marginLeft: 32,
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "16px",
    },
  },
  dflex: {
    display: "flex",
    alignItems: "center",
  },
  wrap: {
    whiteSpace: "normal",
    wordWrap: "break-word",
  },
  margin: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
  },
  icon: {
    fontSize: "1.5rem",
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem",
    },
  },

  popper: {
    [theme.breakpoints.up("xl")]: {
      top: 60,
    },
  },
  padding: {
    padding: 20,
    [theme.breakpoints.up("xl")]: {
      padding: 30,
    },
  },
}));

export default function PrivateId() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    // event.preventDefault();
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <div onClick={handleToggle} className={classes.dflex}>
          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            className={classes.idTitle}
          >
            private ID
          </Button>
          <KeyboardArrowDownIcon className={classes.icon} />
        </div>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper className={classes.margin}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    className={classes.padding}
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                      <MenuItem
                        className={classes.itemsText}
                        onClick={handleClose}
                        href="#cards-container"
                        component={ButtonBase}
                      >
                        Features
                      </MenuItem>
                    </div>

                    <Divider middle style={{ backgroundColor: " #BBD7FF" }} />
                    <MenuItem
                      className={classes.itemsText}
                      onClick={handleClose}
                      href="#authentication"
                      component={ButtonBase}
                    >
                      Continuous Voice Authentication for Amazon Connect®
                    </MenuItem>
                    <Divider middle style={{ backgroundColor: " #BBD7FF" }} />
                    <MenuItem
                      className={classes.itemsText}
                      onClick={handleClose}
                      href="#pricing"
                      component={ButtonBase}
                    >
                      Pricing
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
