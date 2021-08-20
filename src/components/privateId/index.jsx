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
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  },
  idTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: "20px",
    fontWeight: 500,
    fontFamily: "DM Sans",
    textTransform: "inherit",
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
}));

export default function PrivateId() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
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
          <KeyboardArrowDownIcon />
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
                    style={{ padding: 20 }}
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      className={classes.itemsText}
                      onClick={handleClose}
                    >
                      Overview
                    </MenuItem>
                    <Divider middle style={{ backgroundColor: " #BBD7FF" }} />
                    <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                      <MenuItem
                        className={classes.itemsText}
                        onClick={handleClose}
                      >
                        Features
                      </MenuItem>
                    </div>

                    <Divider middle style={{ backgroundColor: " #BBD7FF" }} />
                    <MenuItem
                      className={classes.itemsText}
                      onClick={handleClose}
                    >
                      Continuous Voice Authentication for Amazon Connect®
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
