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
    minHeight: "100vh",
    padding: 72,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    backgroundPositionY: "-616px",
  },
  imgStyle: {
    boxShadow: "10px 8px 0px #0014ff",
  },
  btn: {
    fontWeight: 700,
    fontSize: 20,
    fontFamily: "DM Sans",
    marginTop: 26,
    backgroundColor: "#0B216E",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#0B216E",
      color: "#FFFFFF",
    },
    borderRadius: 46,
    lineHeight: "29px",
    width: 193,
    height: 63,
  },
});
export const DataRefinery = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bgImg}>
      <Grid container spacing={4}>
        <Grid item lg={6} xl={5}>
          <Box>
            <img src={videoImg} className={classes.imgStyle} />
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box className={classes.heading}>
            A data refinery, built to privately identify every individual
          </Box>
          <Box className={classes.detail}>
            Private Identity’s continuous, lightweight biometric recognition
            algorithms use Privacy Preserving Machine Learning, Fully
            Homomorphic Encryption and WebAssembly to provide private, fast and
            secure biometric identity on all major browsers, mobile and embedded
            devices, platforms and clouds without installation.
          </Box>
          <Button className={classes.btn}>READ MORE</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
