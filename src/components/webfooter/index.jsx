import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box, ButtonBase, Hidden, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import phn from "../../assets/phn.png";
import en from "../../assets/envelop.png";
import stack from "../../assets/stack.png";
import tracker from "../../assets/tracker.png";
import api from "../../assets/api.png";
import MobileFooter from "../mobileFooter";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
  },
  line: {
    width: "100%",
    height: 3,
    background: "#EDEDED",
    marginTop: "3rem",
  },
  dflex: {
    display: "flex",
    width: 450,
  },
  lowertext1: {
    fontFamily: "DM Sans",
    fontWeight: 400,
    fontSize: 18,
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
    marginTop: 32,
  },
  lowertext2: {
    fontFamily: "DM Sans",
    fontWeight: 400,
    fontSize: 18,
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },
  lowertext3: {
    fontFamily: "DM Sans",
    fontWeight: 400,
    fontSize: 18,
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
    marginBottom: "5rem",
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
  image: {
    width: 32,
    height: 20,
    marginTop: 10,
  },
  privateitems: {
    padding: 10,
    fontFamily: " DM Sans",
    fontStyle: "normal",
    textAlign: "left",
    fontWeight: 500,
    fontSize: 20,
    lineHeight: "100%",
    color: "#4E4E4E",
    marginLeft: 5,
    width: "38%",
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
  circle: {
    width: 10,
    marginTop: 13,
    height: 10,
    background: "#C4C4C4",
    borderRadius: 10,
  },
  bgClr: {
    backgroundColor: "#DEDEDE",
    position: "relative",
    top: "-303px",
    marginBottom: -303,
  },
  bgClrAboutUs: {
    backgroundColor: "#DEDEDE",
  },
}));
export const WebFooter = () => {
  const classes = useStyles();
  const {
    location: { pathname },
  } = useHistory();
  let containerClass =
    pathname === "/about" ? classes.bgClrAboutUs : classes.bgClr;

  return (
    <Box className={containerClass}>
      {pathname === "/about" && <Box height={11} bgcolor="#2A3D80" />}
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={9}>
          <Hidden mdDown>
            <Grid
              container
              className={classes.footer}
              spacing={3}
              justifyContent="center"
            >
              <Grid item lg={3}>
                <Typography className={classes.heading}>Private ID</Typography>
                <Box>
                  <a
                    href="#introduction"
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
                </Box>
              </Grid>

              <Grid item lg={3}>
                <Typography className={classes.heading}>Company</Typography>
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
                    <Box className={classes.companyitems}>
                      Key Relationships
                    </Box>
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
                  <Box className={classes.companyitems}>
                    Intellectual Property
                  </Box>
                </Box>
                <a
                  style={{ textDecoration: "none" }}
                  href="mailto:support@private.id"
                >
                  <Box className={classes.dflex}>
                    <Box className={classes.circle}></Box>
                    <Box className={classes.companyitems}>
                      sales@private.id{" "}
                    </Box>
                  </Box>
                </a>
              </Grid>

              <Grid item lg={3}>
                <Typography className={classes.heading}>
                  Stay Connected
                </Typography>

                <a
                  style={{ textDecoration: "none" }}
                  href="tel:+1 (800) 123-4567"
                >
                  <Box className={classes.dflex}>
                    <img src={phn} className={classes.image} alt="logo" />
                    <Box className={classes.connecteditems}>
                      {" "}
                      +1-301-938-6300
                    </Box>
                  </Box>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href="mailto:support@private.id"
                >
                  <Box className={classes.dflex}>
                    <img src={en} className={classes.image} alt="logo" />
                    <Box className={classes.connecteditems}>api@private.id</Box>
                  </Box>
                </a>
              </Grid>

              <Grid item lg={3}>
                <Typography className={classes.heading}>Support</Typography>
                <a>
                  <Box className={classes.dflex}>
                    <img src={api} className={classes.image} alt="logo" />
                    <Box className={classes.connecteditems}>
                      API Documentation
                    </Box>
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
              </Grid>

              <Box className={classes.line}></Box>
              <Box>
                <Box className={classes.lowertext1}>
                  © 2021 Private Identity LLC All Rights Reserved.
                </Box>
                <Box className={classes.lowertext2}>
                  Private ID and Private Identity are registered trademarks of
                  Private Identity LLC.
                </Box>
                <Box className={classes.lowertext3}>
                  All other trademarks, service marks, trade names, trade dress,
                  product names and logos are the property of their respective
                  owners.
                </Box>
              </Box>
            </Grid>
          </Hidden>
          <MobileFooter styling={classes} />
        </Grid>
      </Grid>
    </Box>
  );
};
