import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Appbar from "../components/appBar";
import AboutusWeb from "../assets/about_us.png";

import aboutus1 from "../assets/aboutus1.png";
import { DataRefinery } from "../components/dataRefinery";
import { Leadership } from "../components/leadership";
import { WebFooter } from "../components/webfooter";
import { KeyRelationships } from "../components/keyRelationships";
const useStyles = makeStyles((theme) => ({
  bgImg: {
    backgroundImage: `url(${AboutusWeb})`,
    height: 249,
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.up("xs")]: {
      height: 80,
    },
    [theme.breakpoints.up("sm")]: {
      height: 117,
      width: 500,
    },

    [theme.breakpoints.up("md")]: {
      height: 144,
      width: 700,
    },
    [theme.breakpoints.up("lg")]: {
      height: 194,
      width: 1000,
    },
    [theme.breakpoints.up("xl")]: {
      height: 170,
      width: 1100,
    },
  },

  header: {
    fontSize: 70,
    fontWeight: 400,
    fontFamily: "Dm Sans",
    color: "#ffffff",
    [theme.breakpoints.down("md")]: {
      fontSize: 50,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },

  image2: {
    position: "absolute",
    right: 0,
    top: -200,
    height: 638,
    width: 427,
    zIndex: 1,
  },
  position: {
    position: "relative",
    left: 139,
  },
  componentMargin: {
    position: "relative",
    top: -230,
  },
  manageUI: {
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1250,
      width: "none",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 947,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 947,
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: 948,
    },
    [theme.breakpoints.up("xs")]: {
      maxWidth: 947,
    },
  },
}));
export const AboutUs = () => {
  const classes = useStyles();
  return (
    <Box id="about">
      <Appbar />
      <Grid container justifyContent="center">
        <Grid item xs={5} sm={6} lg={9} xl={6} className={classes.manageUI}>
          <Box className={classes.bgImg}>
            <Grid container justifyContent="center">
              <Grid xs={10} item lg={9}>
                <Box className={classes.header}>Company</Box>
              </Grid>
            </Grid>
          </Box>
          <DataRefinery
            title2="Private Identity"
            heading2="Private Identity LLC provides private, secure and accurate continuous biometric authentication and identity across all major browsers, phones and embedded devices and platforms using 1-way fully homomorphic encryption at the edge. The societal good achieved with fully homomorphic encryption is full privacy. "
            description="Our underlying technology was developed by a small group of computer scientists and ML engineers.  We converged on a solution to fully homomorphic encryption (FHE) in early 2018 and received our first cryptography patent in 2019."
            description_about="Our underlying technology was developed by a small group of computer scientists and ML engineers.  We converged on a solution to fully homomorphic encryption (FHE) in early 2018 and received our first cryptography patent in 2019."
            image={aboutus1}
          />

          <KeyRelationships />
          <Leadership />
        </Grid>
      </Grid>
      <WebFooter />
    </Box>
  );
};
