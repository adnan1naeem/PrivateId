import { Box, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    background: "#FFFFFF",
    boxShadow: "3px 11px 13px -4px rgba(0, 0, 0, 0.05)",
    borderRadius: 67,
    marginBottom: 14,
  },
  text: {
    fontSize: 20,
    color: "#000000",
    fontFamily: "DM Sans",
    fontWeight: 400,
    marginLeft: 25,
  },
  circul: {
    backgroundColor: " #2A3D80",
    height: 19,
    width: 19,
    borderRadius: 10,
  },
  dFlex: {
    display: "flex",
    alignItems: "center",
    padding: 13,
  },
});
export const Inputs = ({ text }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.dFlex}>
        <Box>
          <Box className={classes.circul}></Box>
        </Box>

        <Box>
          {" "}
          <Box className={classes.text}>{text}</Box>
        </Box>
      </Box>
    </Box>
  );
};
