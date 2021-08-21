import { Box, Button, Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import webIntro from "../../assets/webIntro.png";
import bgGradient from "../../assets/bgGradient.svg";
import bgGradientMd from "../../assets/bgGradient-md.svg";
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
  },
}));
export const Introduction = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: 115, paddingBottom: 115 }}
      >
        <Grid item md={10} lg={5}>
          <Box className={classes.description}>
            Continuous authentication for a surprising and delightful customer
            experience
          </Box>
          <Hidden mdDown>
            <Button className={classes.btn}>Get Started</Button>
          </Hidden>
        </Grid>
        <Grid item lg={1} />
        <Grid item md={7} lg={4}>
          <img src={webIntro} width="100%" alt="logo" />

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
