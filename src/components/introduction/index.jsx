import { Box, Button, Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import webIntro from "../../assets/webIntro.png";
import lgBg from "../../assets/lgBg.png";
import mdBg from "../../assets/mdBg.svg";

import mobileIcons from "../../assets/mobileIcons.png";
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${lgBg})`,
    backgroundSize: `101%`,
    backgroundRepeat: `no-repeat`,
    backgroundPositionX: "-3px",
    backgroundPositionY: "bottom",

    [theme.breakpoints.only("lg")]: {
      backgroundPositionY: "bottom",
      backgroundSize: `cover`,
    },

    [theme.breakpoints.down("md")]: {
      backgroundSize: `cover`,
      backgroundImage: `url(${mdBg})`,
    },
    [theme.breakpoints.only("xl")]: {
      backgroundSize: `cover`,
      backgroundPositionX: "center",
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
    fontSize: 24,
    fontWeight: 400,

    fontFamily: "Abel",
    width: "97%",
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
      lineHeight: "28px",
      width: "100%",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 26,
      lineHeight: "36px",
      width: "100%",
      textAlign: "center",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: 36,
      lineHeight: "45px",
    },

    [theme.breakpoints.only("xl")]: {
      fontSize: 29,
      lineHeight: "42px",
    },
    [theme.breakpoints.between(960, 1280)]: {
      textAlign: "center",
      fontSize: 40,
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

    [theme.breakpoints.only("lg")]: {
      width: 155,
      height: 50,
      fontSize: 12,
      fontWeight: 400,
      borderRadius: 49,
    },
    [theme.breakpoints.down("xl")]: {
      width: 200,
      height: 61,
      fontSize: 20,
      fontWeight: 400,
      borderRadius: 49,
    },
    [theme.breakpoints.down("md")]: {
      width: 155,
      height: 50,
      fontSize: 12,
      fontWeight: 400,
      borderRadius: 49,
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
    <Grid container justifyContent="center">
      <Grid item xs={12} xl={7} lg={9}>
        <Box className={classes.container} id="introduction">
          <Grid container justifyContent="center">
            <Grid item xs={12} lg={9} xl={7}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                className={classes.pt}
              >
                <Grid item xs={8} md={9} lg={6} xl={6}>
                  <Box className={classes.description}>
                    Decentralized biometrics for a surprising and delightful
                    customer experience
                  </Box>
                  <Hidden mdDown>
                    <Button className={classes.btn}>Get Started</Button>
                  </Hidden>
                </Grid>

                <Grid item xs={10} sm={5} md={4} lg={6} xl={6}>
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
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
