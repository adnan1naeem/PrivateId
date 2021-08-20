import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Appbar from "../components/appBar";
import AboutusWeb from "../assets/about_us.png";

import aboutus1 from "../assets/aboutus1.png";
import { DataRefinery } from "../components/dataRefinery";
import { Leadership } from "../components/leadership";
import { WebFooter } from "../components/webfooter";
import { KeyRelationships } from "../components/keyRelationships";
const useStyles = makeStyles({
  bgImg: {
    backgroundImage: `url(${AboutusWeb})`,
    height: 249,
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
  },

  header: {
    fontSize: 70,
    fontWeight: 400,
    fontFamily: "Dm Sans",
    color: "#ffffff",
    marginTop: 48,
  },
  image2: {
    position: "absolute",
    right: 0,
    top: -200,
    height: 638,
    width: 427,
    zIndex: 1,
  },
});
export const AboutUs = () => {
  const classes = useStyles();
  return (
    <Box>
      <Appbar />
      <Box className={classes.bgImg}>
        <Grid container>
          <Grid style={{ position: "relative", left: 139 }} item lg={9}>
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
      <WebFooter />
    </Box>
  );
};
