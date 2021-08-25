import { Box, Button, Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import webIntro from "../../assets/webIntro.png";
import bgGradient from "../../assets/bgGradient.svg";
import bgGradientMd from "../../assets/bgGradient-md.svg";
import mobileIcons from "../../assets/mobileIcons.png";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${bgGradient})`,
    backgroundSize: `101%`,
    backgroundRepeat: `no-repeat`,
    backgroundPositionX: "-3px",
    backgroundPositionY: "bottom",

    [theme.breakpoints.down("lg")]: {
      backgroundImage: `url(${bgGradientMd})`,
      backgroundPositionY: "top",
    },
    [theme.breakpoints.down("md")]: {
      backgroundSize: `cover`,
    },
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 68,
    fontWeight: 400,
    lineHeight: "81px",
  },
  description: {
    color: "#FFFFFF",
    fontSize: 70,
    fontWeight: 400,
    lineHeight: "90px",
    fontFamily: "Abel",
    width: "97%",
    [theme.breakpoints.down("md")]: { textAlign: "center" },
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
      lineHeight: "28px",
      width: "100%",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 134,
      lineHeight: "136px",
    },
  },
  btn: {
    fontWeight: 700,
    fontSize: 24,
    fontFamily: "DM Sans",
    marginTop: 26,
    backgroundColor: "#0B216E",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#0B216E",
      color: "#FFFFFF",
    },
    borderRadius: 46,
    lineHeight: "35px",
    width: 298,
    height: 103,
    [theme.breakpoints.only("xs")]: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "23px",
      width: 179,
      height: 51,
      position: "relative",
      bottom: "-137px",
    },
    [theme.breakpoints.up("xl")]: {
      width: 375,
      height: 133,
      fontSize: 40,
    },
  },
  pt: {
    paddingTop: 115,
    paddingBottom: 115,
    [theme.breakpoints.only("xs")]: {
      paddingTop: 30,
      paddingBottom: 122,
    },
    [theme.breakpoints.only("xl")]: {
      paddingTop: 206,
      paddingBottom: 267,
    },
  },
  dFlex: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
  },
}));
export const Introduction = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container} id="introduction">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.pt}
      >
        <Grid item xs={10} md={10} lg={5} xl={5}>
          <Box className={classes.description}>
            Decentralized biometrics  for a surprising and delightful customer
            experience
          </Box>
          <Hidden mdDown>
            <Button className={classes.btn}>Get Started</Button>
          </Hidden>
        </Grid>
        <Grid item lg={1} />
        <Grid item xs={10} md={7} lg={4}>
          <Hidden xsDown>
            <img src={webIntro} width="100%" alt="logo" />
          </Hidden>
          <Hidden smUp>
            <Box className={classes.dFlex}>
              <img src={mobileIcons} alt="" />
            </Box>
          </Hidden>

          <Hidden lgUp>
            <Box display="flex" justifyContent="center">
              <Button className={classes.btn}>Get Started</Button>
            </Box>
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  );
};
