import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import webLaptop from "../../assets/webLaptop.png";
import search from "../../assets/search.png";
import connect from "../../assets/connect.png";
import vips from "../../assets/vips.png";
const useStyles = makeStyles({
  history: {
    width: 340.77,
    height: 316.66,
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
    width: 303.18,
    height: 55.58,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#2A3D80",
  },
  historyDetail: {
    width: "78%",
    height: 91,
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    color: "#595E64",
    paddingLeft: "1rem",
  },
});
export const AuthenticationCards = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.history}>
        <img className={classes.Imghiry} src={search} alt="" />
        <Box className={classes.historyTitle}>
          Voice search for call recordings
        </Box>
        <Box className={classes.historyDetail}>
          Instantly find the caller’s voice in all call recordings without
          reliance on Caller ID. Click again to list all voices in each call and
          follow the trail in their Voice History, too.
        </Box>
      </Box>
      <Box>
        <img
          src={webLaptop}
          style={{
            width: 310.99,
            height: 277.42,
            marginTop: 30,
            marginRight: 30,
          }}
          alt=""
        />
      </Box>
      <Box
        className="Vips"
        style={{
          width: 341.08,
          height: 411.82,
          background: "#FFFFFF",
          boxShadow: "2px 1px 36px 8px rgba(56, 125, 255, 0.11)",
          borderRadius: 26,
        }}
      >
        <img
          src={vips}
          alt=""
          style={{ width: 335.53, height: 257.94, marginLeft: 13 }}
        />
        <Box
          style={{
            width: 303.18,
            height: 55.58,
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "center",
            color: "#2A3D80",
            marginLeft: 16,
            marginTop: -15,
          }}
        >
          ROUTE VIPS BLOCK UNWANTED CALLERS
        </Box>
        <Box
          style={{
            width: 273.71,
            height: 80.01,
            fontWeight: "bold",
            fontSize: 12,
            textAlign: "center",
            color: "#595E64",
            marginLeft: 28,
          }}
        >
          Use the “block list” to give VIPs special treatment and disconnect or
          specially route blocked callers.
        </Box>
      </Box>
      <Box className="Connect" style={{}}>
        <img
          src={connect}
          alt=""
          style={{
            width: 232.56,
            height: 202.52,
            marginTop: 15,
            marginLeft: 50,
          }}
        />
        <Box
          style={{
            width: 303.18,
            height: 55.58,
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "center",
            color: "#2A3D80",
            marginTop: -10,
            marginLeft: 10,
          }}
        >
          CONNECT CCP INTEGRATION
        </Box>
        <Box
          style={{
            width: 273.71,
            height: 80.01,
            fontWeight: "bold",
            fontSize: 12,
            textAlign: "center",
            color: "#595E64",
            marginTop: -30,
            marginLeft: 25,
          }}
        >
          Intuitive UI integrations show identity of every voice on the call.
          Hover the mouse over each box to enroll, unenroll, find voice history
          and add to deny lists.
        </Box>
      </Box>
    </Box>
  );
};
