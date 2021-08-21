import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  bgClr: {
    backgroundColor: "#2A3D80",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 33,
    padding: 52,
    [theme.breakpoints.only("lg")]: {
      padding: 24,
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      padding: 20,
      marginLeft: 20,
      marginRight: 20,
    },
  },
  text1: {
    fontWeight: 400,
    fontSize: 40,
    color: "#B7D9F9",
    fontFamily: "DM Sans",

    [theme.breakpoints.only("lg")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 33,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 22,
    },
  },
  text2: {
    fontWeight: 700,
    fontSize: 40,
    color: "#FFFFFF",
    fontFamily: "DM Sans",

    marginLeft: 15,
    [theme.breakpoints.only("lg")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 33,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 22,
    },
  },
  detail: {
    fontWeight: 500,
    fontSize: 29,
    color: "#FFFFFF",
    fontFamily: "DM Sans",

    [theme.breakpoints.only("lg")]: {
      fontSize: 19,
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: 18,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      marginTop: 4,
    },
  },
  btn: {
    width: 370,
    borderRadius: 172,
    fontWeight: 500,
    fontSize: 30,
    color: "#2A3D80",
    textTransform: "capitalize",
    backgroundColor: "#FFFFFF",
    fontFamily: "Dm Sans",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#2A3D80",
    },
    [theme.breakpoints.down("lg")]: {
      width: 222,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      width: 120,
      marginTop: 20,
    },
  },
  dFlex: {
    display: "flex",
  },
  textCenter: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    top: "-381px",
    [theme.breakpoints.only("lg")]: {
      top: "-350px",
    },
  },
}));
export const GetReady = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item md={11} lg={9} xs={12}>
        <Box className={classes.textCenter}>
          <Box className={classes.bgClr}>
            <Box>
              <Box className={classes.dFlex}>
                <Box className={classes.text1}>Ready to </Box>
                <Box className={classes.text2}> GET STARTED</Box>
              </Box>
              <Box className={classes.detail}>
                It is easy to get started with pre-built AWS solutions, Wasm
                modules and SDKs for every use case.
              </Box>
            </Box>
            <Box>
              <Button className={classes.btn}>Sign up</Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
