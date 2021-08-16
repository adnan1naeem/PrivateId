import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import webLaptop from "../../assets/webLaptop.png";
import search from "../../assets/search.png";
import connect from "../../assets/connect.png";
import vips from "../../assets/vips.png";
const useStyles = makeStyles({
  boxShadow: {
    background: "#FFFFFF",
    boxShadow: "2px 1px 36px 8px rgba(56, 125, 255, 0.11)",
    borderRadius: 26,
  },
  historyImg: {
    width: 312.46,
    height: 133.16,
    marginLeft: "1rem",
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
    fontSize: 12,
    textAlign: "center",
    color: "#595E64",
    lineHeight: "15px",
  },
  conectTitle: {
    fontWeight: 700,
    fontSize: 18,
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
    width: 310,
    height: 277.42,
    marginTop: 22,
  },

  vipImg: {
    width: 335,
    height: 257,
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
  },
  dFlex: {
    display: "flex",
    textAlign: "center",

    flexDirection: "column",
  },
});
export const AuthenticationCards = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      spacing={4}
      justifyContent="space-evenly"
    >
      <Grid item className={classes.boxShadow} lg={5}>
        <Box>
          <img src={webLaptop} className={classes.laptopImg} alt="" />
        </Box>

        <Grid item className={classes.boxShadow}>
          <Box>
            <img src={vips} alt="" className={classes.vipImg} />
          </Box>
          <Box>
            <Box className={classes.vipTitle}>
              Route VIPs Block unwanted callers
            </Box>
            <Box className={classes.vipDetail}>
              Use the “block list” to give VIPs special treatment and disconnect
              or specially route blocked callers.
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid item lg={5} className={classes.boxShadow}>
        <Box className={classes.dFlex}>
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
        </Box>

        <Grid className={classes.boxShadow}>
          <Box className={classes.dFlex}>
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
        </Grid>
      </Grid>
    </Grid>
  );
};
