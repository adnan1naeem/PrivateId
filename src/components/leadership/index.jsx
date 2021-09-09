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
    [theme.breakpoints.up("xs")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: 20,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 24,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 48,
    },
  },
  mt: {
    [theme.breakpoints.up("md")]: {
      marginTop: 30,
    },
  },
  cardItem: {
    [theme.breakpoints.up("lg")]: {
      width: 400,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 600,
    },
  },
  container: {
    [theme.breakpoints.between(1920, 2300)]: {
      flexGrow: 0,
      maxWidth: "91.666667%",
      flexBasis: "91.666667%",
    },
  },
}));
export const Leadership = () => {
  const classes = useStyles();
  return (
    <Box bgcolor="#F3F3F3">
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={11} md={6} lg={8} xl={12} className={classes.container}>
          <Box bgcolor="#F3F3F3" pt={4} pb={8} id="leadership">
            <Box>
              <Box className={classes.heading}>Leadership</Box>
            </Box>

            <Grid container spacing={8} justifyContent="center">
              <Grid
                item
                xs={11}
                md={11}
                lg={6}
                xl={6}
                className={classes.cardItem}
              >
                <LeadershipCard
                  image={mikeweb}
                  name="Mike Pollard"
                  designation="CEO"
                  linkedinProfile="https://www.linkedin.com/in/mpollard/"
                  detail="Mike is an entrepreneur experienced in high-growth technology ventures in biometrics, AI/ML, big data and cyber security. Prior to co-founding Private Identity, Mike served as VP and General Manager at Thomson Reuters, Executive VP and co-founder of Discovery Logic, CEO of thinkXML and CEO of Science Management Corp."
                />
              </Grid>
              <Grid
                item
                xs={11}
                md={11}
                lg={6}
                xl={6}
                className={classes.cardItem}
              >
                <LeadershipCard
                  image={webscott}
                  name="Scott Streit"
                  designation="CTO"
                  linkedinProfile="https://www.linkedin.com/in/scott-streit/"
                  detail="Scott is a data scientist focused on cryptography, biometrics, AI/ML and cyber security, Scott currently leads everything technical at Private Identity, serves as Chair of Biometric Security for IEEE and chairs the IEEE 2410 Standard for Biometric Open Protocol. Prior to co-founding Private Identity, Scott served as CTO for a large biometrics company, was a research profesor for 30 years and supported the US Government for 26 years. Scott has authored key patents and papers in machine learning, biometrics and authentication."
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
