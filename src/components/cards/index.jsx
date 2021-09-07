import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    height: 560,
    borderRadius: 26,
    background: "#FFFFFF",
    boxShadow: "2px 1px 36px 8px rgba(56, 125, 255, 0.11)",
    [theme.breakpoints.only("lg")]: {
      height: 245,
      padding: 14,
    },
    [theme.breakpoints.only("md")]: {
      height: 345,
      padding: 22,
    },
    [theme.breakpoints.only("sm")]: {
      height: 350,
      padding: 27,
    },
    [theme.breakpoints.only("xs")]: {
      height: 320,
      padding: 39,
    },
  },
  heading: {
    color: "#2A3D80",
    width: 327,
    height: 66,
    fontWeight: 700,
    fontFamily: "DM Sans",
    fontSize: 22,
    lineHeight: "30px",
    textAlign: "center",
    marginTop: 28,

    [theme.breakpoints.only("lg")]: {
      fontSize: 12,
      fontWeight: 600,
      lineHeight: "15px",
      marginTop: 10,
    },
    [theme.breakpoints.only("md")]: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      lineHeight: "22px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      lineHeight: "19px",
    },
  },
  Detail: {
    width: "82%",
    fontWeight: 500,
    fontSize: 16,
    color: "#595E64",
    marginTop: 13,
    fontFamily: "DM Sans",
    textAlign: "center",

    [theme.breakpoints.only("lg")]: {
      fontSize: 8,
      fontWeight: 400,
      width: "unset",
      marginTop: "-30px",
      lineHeight: "11px",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 10,
      fontWeight: 500,
      width: "unset",
      marginTop: "-8px",
      lineHeight: "18px",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: 10,
      fontWeight: 500,
      width: "unset",
      marginTop: "-16px",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
      lineHeight: "15px",
      marginTop: "-20px",
      width: "unset",
    },
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
    [theme.breakpoints.down("sm")]: {},
  },
  img: {
    [theme.breakpoints.only("lg")]: {
      width: 120,
      height: 120,
    },
    [theme.breakpoints.only("md")]: {
      width: 170,
      height: 170,
    },
    [theme.breakpoints.only("sm")]: {
      width: 160,
      height: 160,
    },
    [theme.breakpoints.only("xs")]: {
      width: 140,
      height: 140,
    },
  },
}));
export const Cards = ({ image, heading, detail }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.dFlex}>
        <Box>
          <Box pt={2}>
            <img className={classes.img} src={image} alt="logo" />
          </Box>
        </Box>
      </Box>
      <Box className={classes.dFlex}>
        <Box className={classes.heading}>{heading}</Box>
      </Box>
      <Box className={classes.dFlex}>
        <Box className={classes.Detail}>{detail}</Box>
      </Box>
      {/* <Box className={classes.dFlex}>
        <Box>
          <Button className={classes.btnFonts}>read more</Button>
        </Box>
      </Box> */}
    </Box>
  );
};
