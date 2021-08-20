import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { LeadershipCard } from "../../components/leadershipCard";
import mikeweb from "../../assets/mikeweb.png";
import webscott from "../../assets/webscott.png";
const useStyles = makeStyles({
  heading: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 48,
    color: "#2A3D80",
    marginTop: 62,
  },
});
export const Leadership = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Box>
        <Box className={classes.heading}>Leadership</Box>
      </Box>
      <Grid item lg={5}>
        <LeadershipCard
          image={mikeweb}
          name="Mike Pollard"
          designation="CEO"
          detail="Mike is an entrepreneur experienced in high-growth technology ventures in biometrics, AI/ML, big data and cyber security. Prior to co-founding Private Identity, Mike served as VP and General Manager at Thomson Reuters, Executive VP and co-founder of Discovery Logic, CEO of thinkXML and CEO of Science Management Corp."
        />
      </Grid>
      <Grid item lg={5}>
        <LeadershipCard
          image={webscott}
          name="Scott Streit"
          designation="CTO"
          detail="Scott is a data scientist focused on cryptography, biometrics, AI/ML and cyber security, Scott currently leads everything technical at Private Identity, serves as Chair of Biometric Security for IEEE and chairs the IEEE 2410 Standard for Biometric Open Protocol. Prior to co-founding Private Identity, Scott served as CTO for a large biometrics company, was a research profesor for 30 years and supported the US Government for 26 years. Scott has authored key patents and papers in machine learning, biometrics and authentication."
        />
      </Grid>
    </Grid>
  );
};
