import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import stack from "../../assets/stack.png";
import tracker from "../../assets/tracker.png";
import api from "../../assets/api.png";
import ListItem from "@material-ui/core/ListItem";
import { Box, ButtonBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  font: {
    fontFamily: "Dm Sans",
    fontSize: 18,
    color: "#000000",
    fontWeight: 700,
  },
  companyitems: {
    padding: 10,
    fontFamily: " DM Sans",
    fontStyle: "normal",
    textAlign: "left",
    fontWeight: 500,
    fontSize: 20,
    lineHeight: "100%",
    color: " #565656",
    marginLeft: 5,
    width: "43%",
  },
  privateitems: {
    padding: 10,
    fontFamily: " DM Sans",
    fontStyle: "normal",
    textAlign: "left",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: "100%",
    color: "#4E4E4E",
    marginLeft: 5,
    width: "38%",
  },
  circle: {
    width: 10,
    marginTop: 13,
    height: 10,
    background: "#C4C4C4",
    borderRadius: 10,
  },
  dflex: {
    display: "flex",
    width: 450,
  },
  heading: {
    paddingTop: "4rem",
    margin: 10,
    height: 24,
    lineHeight: 24,
    fontFamily: "DM Sans",

    fontWeight: 700,
    fontSize: 24,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },
  connecteditems: {
    padding: 10,
    fontFamily: " DM Sans",
    fontStyle: "normal",
    textAlign: "left",
    fontWeight: 500,
    fontSize: 20,
    lineHeight: "100%",
    color: " #747474",
    marginLeft: 5,
    width: "63%",
  },
}));

export default function DrawerList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState([false, false, false]);

  const handleClick = (id) => {
    let newVal = [...open];
    newVal[id] = !newVal[id];
    setOpen([...newVal]);
  };

  return (
    <ul>
      <Box>
        <Box className={classes.heading}>Private ID</Box>
        <a
          href="/introduction"
          component={ButtonBase}
          style={{ textDecoration: "none" }}
        >
          <Box className={classes.dflex}>
            <Box className={classes.circle}></Box>
            <Box className={classes.privateitems}>Overview</Box>
          </Box>
        </a>

        <a
          href="#cards-container"
          component={ButtonBase}
          style={{ textDecoration: "none" }}
        >
          <Box className={classes.dflex}>
            <Box className={classes.circle}></Box>
            <Box className={classes.privateitems}>Features</Box>
          </Box>
        </a>

        <a
          href="#authentication"
          component={ButtonBase}
          style={{ textDecoration: "none" }}
        >
          <Box className={classes.dflex}>
            <Box className={classes.circle}></Box>
            <Box className={classes.privateitems}>
              {" "}
              Continuous Voice Authentication for Amazon Connect®
            </Box>
          </Box>
        </a>

        <a
          href="#pricing"
          component={ButtonBase}
          style={{ textDecoration: "none" }}
        >
          <Box className={classes.dflex}>
            <Box className={classes.circle}></Box>
            <Box className={classes.privateitems}>Pricing</Box>
          </Box>
        </a>

        <a
          href="#pricing"
          component={ButtonBase}
          style={{ textDecoration: "none" }}
        >
          <Box className={classes.dflex}>
            <Box className={classes.circle}></Box>
            <Box className={classes.privateitems}>Contact Us</Box>
          </Box>
        </a>
      </Box>

      <ListItem button onClick={() => handleClick(1)}>
        <Box>
          <Box className={classes.heading}>Support</Box>
          <a>
            <Box className={classes.dflex}>
              <img src={api} className={classes.image} alt="logo" />
              <Box className={classes.connecteditems}>API Documentation</Box>
            </Box>
          </a>
          <a
            href="https://github.com/openinfer/PrivateIdentity/issues"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box className={classes.dflex}>
              <img src={tracker} className={classes.image} alt="logo" />
              <Box className={classes.connecteditems}>Issue Tracker</Box>
            </Box>
          </a>
          <a
            href="https://stackoverflow.com/questions/tagged/privateid?tab=Newest"
            target="_blank "
            style={{ textDecoration: "none" }}
          >
            <Box className={classes.dflex}>
              <img src={stack} className={classes.image} alt="logo" />
              <Box className={classes.connecteditems}>Stack Overflow</Box>
            </Box>
          </a>
        </Box>
      </ListItem>

      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Box className={classes.heading}>Company</Box>
        <a
          href="/about"
          component={ButtonBase}
          style={{ textDecoration: "none" }}
        >
          <Box className={classes.dflex}>
            <Box className={classes.circle}></Box>
            <Box className={classes.companyitems}>About Us</Box>
          </Box>
        </a>
        <a
          href="#key-relationship"
          component={ButtonBase}
          style={{ textDecoration: "none" }}
        >
          <Box className={classes.dflex}>
            <Box className={classes.circle}></Box>
            <Box className={classes.companyitems}>Key Relationships</Box>
          </Box>
        </a>
        <a
          href="#leadership"
          component={ButtonBase}
          style={{ textDecoration: "none" }}
        >
          <Box className={classes.dflex}>
            <Box className={classes.circle}></Box>
            <Box className={classes.companyitems}>Leadership</Box>
          </Box>
        </a>
        <a
          href="https://github.com/openinfer/PrivateIdentity/wiki/Privacy-Policy"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Box className={classes.dflex}>
            <Box className={classes.circle}></Box>
            <Box className={classes.companyitems}>Privacy Policy</Box>
          </Box>
        </a>
        <Box className={classes.dflex}>
          <Box className={classes.circle}></Box>
          <Box className={classes.companyitems}>Terms of Use</Box>
        </Box>
        <Box className={classes.dflex}>
          <Box className={classes.circle}></Box>
          <Box className={classes.companyitems}>Intellectual Property</Box>
        </Box>
      </Box>
    </ul>
  );
}
