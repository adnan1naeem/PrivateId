import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  bgClr: {
    backgroundColor: "#2A3D80",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 33,
    padding: 50,
    width: "75%",
  },
  text1: {
    fontWeight: 400,
    fontSize: 72,
    color: "#B7D9F9",

    fontFamily: "DM Sans",
    lineHeight: "106px",
  },
  text2: {
    fontWeight: 700,
    fontSize: 72,
    color: "#FFFFFF",
    fontFamily: "DM Sans",
    lineHeight: "106px",
    marginLeft: 15,
  },
  detail: {
    fontWeight: 500,
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "DM Sans",
    lineHeight: "28px",
    width: "71%",
  },
  btn: {
    width: 370,
    borderRadius: 172,
    fontWeight: 500,
    fontSize: 48,
    fontFamily: "DM Sans",
    lineHeight: "71px",
    color: "#2A3D80",
    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#2A3D80",
    },
  },
  dFlex: {
    display: "flex",
  },
  textCenter: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    top: "-440px",
  },
});
export const GetReady = () => {
  const classes = useStyles();
  return (
    <Box className={classes.textCenter}>
      <Box className={classes.bgClr}>
        <Box>
          <Box className={classes.dFlex}>
            <Box className={classes.text1}>Ready to </Box>
            <Box className={classes.text2}> GET STARTED</Box>
          </Box>
          <Box className={classes.detail}>
            It is easy to get started with pre-built AWS solutions, Wasm modules
            and SDKs for every use case.
          </Box>
        </Box>
        <Box>
          <Button className={classes.btn}>Sign up</Button>
        </Box>
      </Box>
    </Box>
  );
};
