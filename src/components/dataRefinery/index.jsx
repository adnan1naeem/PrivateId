import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import webDataRef from "../../assets/webDataRef.png";
import videoImg from "../../assets/videoImg.png";

const useStyles = makeStyles({
  heading: {
    fontWeight: 400,
    fontSize: 35,
    color: "#000000",
    lineHeight: "42px",
    marginTop: 13,
    fontFamily: "DM Sans",
    width: "85%",
  },
  detail: {
    fontWeight: 400,
    fontSize: 24,
    color: "#000000",
    lineHeight: "37px",
    marginTop: 13,
    fontFamily: "DM Sans",
  },
  bgImg: {
    backgroundImage: `url(${webDataRef})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "60%",
    backgroundPositionY: -224,
    paddingTop: 450,
    marginTop: 100,
    paddingBottom: 200,
    position: "relative",
    top: -422,
    zIndex: -1,
  },
  imgStyle: {
    boxShadow: "29px 20px 0px #0060d5",
    width: "100%",
  },
});
export const DataRefinery = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={4}
      className={classes.bgImg}
      justifyContent="center"
    >
      <Grid item lg={6} xl={4}>
        <Box>
          <img src={videoImg} className={classes.imgStyle} />
        </Box>
      </Grid>
      <Grid item lg={1} />
      <Grid item lg={5}>
        <Box className={classes.heading}>
          Biometric security that guarantees privacy, a fundamental human right
        </Box>
        <Box className={classes.detail}>
          Private Identity’s continuous, lightweight biometric recognition
          algorithms use Privacy Preserving Machine Learning, Fully Homomorphic
          Encryption and WebAssembly to provide private, fast and secure
          biometric identity on all major browsers, mobile and embedded devices,
          platforms and clouds without installation.
        </Box>
      </Grid>
    </Grid>
  );
};
