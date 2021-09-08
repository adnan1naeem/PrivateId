import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { LeadershipCard } from "../../components/leadershipCard";
import mikeweb from "../../assets/mikeweb.png";
import webscott from "../../assets/webscott.png";
const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 48,
    color: "#2A3D80",
    paddingTop: 62,
    textAlign: "center",
    paddingBottom: "2rem",
    [theme.breakpoints.only("lg")]: {
      fontSize: 24,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 20,
    },
  },
  mt: {
    [theme.breakpoints.only("sm")]: {
      marginTop: 20,
    },
    [theme.breakpoints.only("md")]: {
      marginTop: 30,
    },
  },
}));
export const Leadership = () => {
  const classes = useStyles();
  return (
    <Box bgcolor="#F3F3F3" pt={4} pb={8} id="leadership">
      <Box>
        <Box className={classes.heading}>Leadership</Box>
      </Box>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={11} sm={10} lg={8} xl={9} md={12}>
          <Grid container spacing={5} justifyContent="center">
            <Grid item md={8} lg={6}>
              <LeadershipCard
                image={mikeweb}
                name="Mike Pollard"
                designation="CEO"
                linkedinProfile="https://www.linkedin.com/in/mpollard/"
                detail="Mike is an entrepreneur experienced in high-growth technology ventures in biometrics, AI/ML, big data and cyber security. Prior to co-founding Private Identity, Mike served as VP and General Manager at Thomson Reuters, Executive VP and co-founder of Discovery Logic, CEO of thinkXML and CEO of Science Management Corp."
              />
            </Grid>
            <Grid item md={8} lg={6}>
              <LeadershipCard
                image={webscott}
                name="Scott Streit"
                designation="CTO"
                linkedinProfile="https://www.linkedin.com/in/scott-streit/"
                detail="Scott is a data scientist focused on cryptography, biometrics, AI/ML and cyber security, Scott currently leads everything technical at Private Identity, serves as Chair of Biometric Security for IEEE and chairs the IEEE 2410 Standard for Biometric Open Protocol. Prior to co-founding Private Identity, Scott served as CTO for a large biometrics company, was a research profesor for 30 years and supported the US Government for 26 years. Scott has authored key patents and papers in machine learning, biometrics and authentication."
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
