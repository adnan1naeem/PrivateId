import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    height: 560,
    width: 405,
    borderRadius: 26,
    background: "#FFFFFF",
    boxShadow: "2px 1px 36px 8px rgba(56, 125, 255, 0.11)",
  },
  heading: {
    color: "#2A3D80",
    width: 345,
    height: 66,
    fontWeight: 700,
    fontFamily: "DM Sans",
    fontSize: 22,
    lineHeight: "30px",
    textAlign: "center",
    marginTop: 28,
  },
  Detail: {
    width: "82%",
    fontWeight: 500,
    fontSize: 16,
    color: "#595E64",
    marginTop: 13,
    fontFamily: "DM Sans",
    textAlign: "center",
  },
  btnFonts: {
    fontWeight: 500,
    fontSize: 16,
    color: "#2A3D80",
    marginTop: 26,
    textTransform: "initial",
    backgroundColor: "#FFFFFF",
    borderRadius: 46,
    lineHeight: "20px",
    boxShadow: "0px 3px 2px rgba(0, 0, 0, 0.1)",
    fontFamily: "DM Sans",
    height: 35,
    width: 132,

    "&:hover": {
      backgroundColor: "#387DFF",
      color: "#FFFFFF",
    },
  },

  imgBg: {
    width: 184,
    height: 184,
    borderRadius: 149,
    boxShadow: " 0px 4px 4px rgb(0 0 0 / 25%)",
    border: " 8px solid rgba(56, 125, 255, 0.1)",
    marginTop: 33,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dFlex: {
    display: "flex",
    justifyContent: "center",
  },
});
export const Cards = ({ image, heading, detail }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.dFlex}>
        <Box>
          <Box className={classes.imgBg}>
            <img
              style={{ position: "relative", top: -26, left: "-4px" }}
              src={image}
            />
          </Box>
        </Box>
      </Box>
      <Box className={classes.dFlex}>
        <Box className={classes.heading}>{heading}</Box>
      </Box>
      <Box className={classes.dFlex}>
        <Box className={classes.Detail}>{detail}</Box>
      </Box>
      <Box className={classes.dFlex}>
        <Box>
          <Button className={classes.btnFonts}>read more</Button>
        </Box>
      </Box>
    </Box>
  );
};
