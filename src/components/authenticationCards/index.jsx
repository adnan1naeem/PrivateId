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
  },
  historyDetail: {
    fontWeight: 700,
    fontSize: 12,
    fontFamily: "DM Sans",
    color: "#595E64",
    lineHeight: "15px",
    marginTop: 15,
  },
  conectDetail: {
    fontFamily: "DM Sans",
    fontWeight: 700,
    textAlign: "center",
    color: "#595E64",
    lineHeight: "15px",
    marginTop: 10,
    fontSize: 14,
  },
  conectTitle: {
    fontWeight: 700,
    fontSize: 16,

    lineHeight: "15px",
    color: "#2A3D80",
    fontFamily: "DM Sans",
  },
  conectImg: {
    width: 232,
    height: 202,
    marginTop: 15,
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
  },
  vipDetail: {
    fontWeight: 700,
    fontSize: 12,
    textAlign: "center",
    color: "#595E64",
    fontFamily: "DM Sans",
    marginTop: 15,
    marginBottom: 30,
  },
  dFlex: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
  },
}));
export const AuthenticationCards = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" spacing={4} justifyContent="center">
      <Grid item className={classes.boxShadow} md={8} lg={6} xl={5}>
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
      <Grid item md={8} lg={5} sm={6} className={classes.boxShadow}>
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
