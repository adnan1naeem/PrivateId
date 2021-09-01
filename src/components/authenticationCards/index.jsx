import { Box, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import webLaptop from "../../assets/webLaptop.png";
import search from "../../assets/search.png";
import connect from "../../assets/connect.png";
import vips from "../../assets/vips.png";
const useStyles = makeStyles((theme) => ({
  boxShadow: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  historyImg: {
    width: "100%",
  },
  historyTitle: {
    fontWeight: 700,
    fontSize: 18,
    color: "#2A3D80",
    lineHeight: "22px",
    fontFamily: "DM Sans",
    [theme.breakpoints.only("lg")]: {
      fontSize: 10,
      lineHeight: "10px",
      marginTop: 5,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 10,
      lineHeight: "10px",
      marginTop: 5,
    },
  },
  historyDetail: {
    fontWeight: 700,
    fontSize: 12,
    fontFamily: "DM Sans",
    color: "#595E64",
    lineHeight: "15px",
    marginTop: 15,
    [theme.breakpoints.only("lg")]: {
      fontSize: 10,
      lineHeight: "15px",
      marginTop: 5,
      fontWeight: 500,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 10,
      lineHeight: "15px",
      marginTop: 5,
      fontWeight: 500,
    },
  },
  conectDetail: {
    fontFamily: "DM Sans",
    fontWeight: 700,
    textAlign: "center",
    color: "#595E64",
    lineHeight: "15px",
    marginTop: 10,
    fontSize: 14,
    [theme.breakpoints.only("lg")]: {
      fontSize: 7,
      marginTop: 5,
      lineHeight: "13px",
      fontWeight: 700,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 7,
      marginTop: 5,
      lineHeight: "13px",
      fontWeight: 700,
    },
  },
  conectTitle: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: "15px",
    color: "#2A3D80",
    fontFamily: "DM Sans",
    [theme.breakpoints.only("lg")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 10,
    },
  },
  conectImg: {
    width: 232,
    height: 202,
    marginTop: 15,

    [theme.breakpoints.only("lg")]: {
      width: "100%",

      marginTop: "0px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",

      marginTop: "0px",
    },
  },
  laptopImg: {
    width: "100%",
  },

  vipImg: {
    width: "100%",
  },
  vipTitle: {
    lineHeight: "22px",
    fontWeight: 700,
    fontSize: 18,
    color: "#2A3D80",
    [theme.breakpoints.only("lg")]: {
      fontSize: 10,
      lineHeight: "13px",
      marginTop: 5,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 10,
      lineHeight: "13px",
      marginTop: 5,
    },
  },
  vipDetail: {
    fontWeight: 700,
    fontSize: 12,
    textAlign: "center",
    color: "#595E64",
    fontFamily: "DM Sans",
    marginTop: 15,
    marginBottom: 30,
    [theme.breakpoints.only("lg")]: {
      fontSize: 7,
      marginTop: 5,
      lineHeight: "13px",
      fontWeight: 700,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 7,
      marginTop: 5,
      lineHeight: "13px",
      fontWeight: 700,
    },
  },
  dFlex: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "88%",
    },
    [theme.breakpoints.down(480)]: {
      width: "80%",
    },
  },
  manageMargin: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: 100,
    },
  },
}));
export const AuthenticationCards = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      spacing={1}
      justifyContent="center"
      className={classes.manageMargin}
    >
      <Grid item className={classes.boxShadow} xs={11} sm={9} lg={6} xl={5}>
        <Paper
          square={false}
          elevation={7}
          component={Box}
          padding="22px"
          borderRadius="26px"
          className={classes.dFlex}
        >
          <img src={webLaptop} className={classes.laptopImg} alt="" />
        </Paper>

        <Paper
          square={false}
          elevation={7}
          component={Box}
          padding="22px"
          borderRadius="26px"
          marginTop={"18px"}
          className={classes.dFlex}
        >
          <Box>
            <img src={vips} alt="" className={classes.vipImg} />
          </Box>
          <Box>
            <Box className={classes.vipTitle}>
              Route VIPs
              <br />
              Block unwanted callers
            </Box>
            <Box className={classes.vipDetail}>
              Use the “block list” to give VIPs special treatment and disconnect
              or specially route blocked callers.
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={11} sm={9} lg={5} className={classes.boxShadow}>
        <Paper
          square={false}
          elevation={7}
          component={Box}
          padding="22px"
          borderRadius="26px"
          className={classes.dFlex}
        >
          <Box>
            <img className={classes.historyImg} src={search} alt="" />
          </Box>
          <Box className={classes.historyTitle}>
            Voice search for call recordings
          </Box>
          <Box className={classes.historyDetail}>
            Instantly find the caller’s voice in all call recordings without
            reliance on Caller ID. Click again to list all voices in each call
            and follow the trail in their Voice History, too.
          </Box>
        </Paper>

        <Paper
          square={false}
          elevation={7}
          component={Box}
          padding="22px"
          borderRadius="26px"
          marginTop={"18px"}
          className={classes.dFlex}
        >
          <Box display="flex" textAlign="center" flexDirection="column">
            <Box>
              <img src={connect} alt="" className={classes.conectImg} />
            </Box>
            <Box className={classes.conectTitle}>CONNECT CCP INTEGRATION</Box>
            <Box className={classes.conectDetail}>
              Intuitive UI integrations show the identity of every voice on the
              call. Mouse over each caller to enroll, unenroll, search and add
              to deny lists.
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
