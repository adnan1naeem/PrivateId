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

    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
      padding: 12,
      marginLeft: 28,
      marginRight: 20,
      borderRadius: 22,
      flexDirection: "unset",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "unset",
      padding: 24,
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "unset",
      padding: 24,
    },
    [theme.breakpoints.up("lg")]: {
      padding: 24,
    },
  },
  text1: {
    fontWeight: 400,
    fontSize: 40,
    color: "#B7D9F9",
    fontFamily: "DM Sans",

    [theme.breakpoints.only("lg")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 30,
    },
  },
  text2: {
    fontWeight: 700,
    fontSize: 40,
    color: "#FFFFFF",
    fontFamily: "DM Sans",

    marginLeft: 15,
    [theme.breakpoints.only("lg")]: {
      fontSize: 25,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 25,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 30,
    },
  },
  detail: {
    fontWeight: 500,
    fontSize: 29,
    color: "#FFFFFF",
    fontFamily: "DM Sans",

    [theme.breakpoints.only("lg")]: {
      fontSize: 20,
      width: 637,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 15,
      width: 415,
    },

    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
      marginTop: 4,
      display: "flex",
      textAlign: "center",
      width: 166,
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: 20,
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
    [theme.breakpoints.only("lg")]: {
      fontSize: 15,
      width: 120,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 15,
      width: 120,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 10,
      width: 100,
    },
  },
  dFlex: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  textCenter: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    top: "-381px",
    marginBottom: 150,
    [theme.breakpoints.up("xs")]: {
      top: "-644px",
      marginBottom: -70,
    },
    [theme.breakpoints.up("sm")]: {
      top: -480,
    },
    [theme.breakpoints.up("md")]: {
      top: -480,
    },
    [theme.breakpoints.up("lg")]: {
      top: "-498px",
    },
    [theme.breakpoints.up("xl")]: {
      top: "-140px",
    },
  },
  manageUI: {
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1120,
    },
  },
}));
export const GetReady = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.manageUI}>
        <Grid container justifyContent="center" id="get-ready">
          <Grid item xs={5} sm={11} md={11} lg={10}>
            <Box className={classes.textCenter}>
              <Box className={classes.bgClr}>
                <Box>
                  <Box className={classes.dFlex}>
                    <Box className={classes.text1}>Ready to </Box>
                    <Box className={classes.text2}> GET STARTED</Box>
                  </Box>
                  <Box className={classes.detail}>
                    It is easy to get started with pre-built AWS solutions, Wasm
                    modules and SDKs.
                  </Box>
                </Box>
                <a
                  href="https://aws.amazon.com/marketplace/pp/prodview-7llim6nzt656u"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Box>
                    <Button className={classes.btn}>Sign up</Button>
                  </Box>
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
