import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import phn from "../../assets/phn.png";
import en from "../../assets/envelop.png";
import yt from "../../assets/youtube.png";
import stack from "../../assets/stack.png";
import tracker from "../../assets/tracker.png";
import api from "../../assets/api.png";
import patent from "../../assets/patent.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
  },
  line: {
    paddingLeft: "3rem",
    width: 1660,
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
    top: " -359px",
  },
}));
export const WebFooter = () => {
  const classes = useStyles();

  return (
    <Box className={classes.bgClr}>
      <Grid container justifyContent="center">
        <Grid item lg={9}>
          <Grid
            container
            className={classes.footer}
            spacing={3}
            justifyContent="center"
          >
            <Grid item lg={3}>
              <Box>
                <Box className={classes.heading}>Private ID</Box>
                <Box className={classes.dflex}>
                  <Box className={classes.circle}></Box>
                  <Box className={classes.privateitems}>Overview</Box>
                </Box>
                <Box className={classes.dflex}>
                  <Box className={classes.circle}></Box>
                  <Box className={classes.privateitems}>Features</Box>
                </Box>
                <Box className={classes.dflex}>
                  <Box className={classes.circle}></Box>
                  <Box className={classes.privateitems}>
                    {" "}
                    Continuous Voice Authentication for Amazon Connect®
                  </Box>
                </Box>
                <Box className={classes.dflex}>
                  <Box className={classes.circle}></Box>
                  <Box className={classes.privateitems}>Pricing</Box>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={3}>
              <Typography className={classes.heading}>Company</Typography>
              <Box className={classes.dflex}>
                <Box className={classes.circle}></Box>
                <Box className={classes.companyitems}>About Us</Box>
              </Box>
              <Box className={classes.dflex}>
                <Box className={classes.circle}></Box>
                <Box className={classes.companyitems}>Key Relationships</Box>
              </Box>
              <Box className={classes.dflex}>
                <Box className={classes.circle}></Box>
                <Box className={classes.companyitems}>Leadership</Box>
              </Box>
              <Box className={classes.dflex}>
                <Box className={classes.circle}></Box>
                <Box className={classes.companyitems}>Privacy Policy</Box>
              </Box>
              <Box className={classes.dflex}>
                <Box className={classes.circle}></Box>
                <Box className={classes.companyitems}>Terms of Use</Box>
              </Box>
            </Grid>

            <Grid item lg={3}>
              <Typography className={classes.heading}>
                Stay Connected
              </Typography>
              <Box className={classes.dflex}>
                <img src={yt} className={classes.image} />
                <Box className={classes.connecteditems}>Private Identity</Box>
              </Box>
              <Box className={classes.dflex}>
                <img src={phn} className={classes.image} />
                <Box className={classes.connecteditems}> +1 (800) 123-4567</Box>
              </Box>
              <Box className={classes.dflex}>
                <img src={en} className={classes.image} />
                <Box className={classes.connecteditems}>Email Us</Box>
              </Box>
            </Grid>

            <Grid item lg={3}>
              <Typography className={classes.heading}>Support</Typography>
              <Box className={classes.dflex}>
                <img src={stack} className={classes.image} />
                <Box className={classes.connecteditems}>Stack Overflow</Box>
              </Box>
              <Box className={classes.dflex}>
                <img src={tracker} className={classes.image} />
                <Box className={classes.connecteditems}>Issue Tracker</Box>
              </Box>
              <Box className={classes.dflex}>
                <img src={api} className={classes.image} />
                <Box className={classes.connecteditems}>API Documentation</Box>
              </Box>
              <Box className={classes.dflex}>
                <img src={patent} className={classes.image} />
                <Box className={classes.connecteditems}>
                  {" "}
                  Intellectual Property/Patents
                </Box>
              </Box>
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
        </Grid>
      </Grid>
    </Box>
  );
};
