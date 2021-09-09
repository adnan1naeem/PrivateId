import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 26,
    background: "#FFFFFF",
    boxShadow: "2px 1px 36px 8px rgba(56, 125, 255, 0.11)",

    [theme.breakpoints.up("xs")]: {
      padding: 39,
      height: 300,
      width: 250,
    },
    [theme.breakpoints.up("sm")]: {
      height: 350,
      width: 200,
      padding: 39,
    },
    [theme.breakpoints.up("md")]: {
      height: 345,
      padding: 30,
      width: 300,
    },
    [theme.breakpoints.up("lg")]: {
      height: 300,
      padding: 14,
      width: 205,
    },
    [theme.breakpoints.up("xl")]: {
      height: 480,
      width: 320,
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
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      lineHeight: "19px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "22px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "18px",
      marginTop: 12,
      width: 207,
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: "17px",
      marginTop: 10,
    },
  },
  Detail: {
    [theme.breakpoints.up("xs")]: {
      fontSize: 12,
      lineHeight: "15px",
      marginTop: "-20px",
      width: "unset",
      fontFamily: "DM Sans",
      color: "#595E64",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 10,
      fontWeight: 500,
      width: "unset",
      marginTop: "-8px",
      lineHeight: "18px",
      fontFamily: "DM Sans",
      color: "#595E64",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
      fontWeight: 500,
      width: "unset",
      marginTop: "-16px",
      fontFamily: "DM Sans",
      color: "#595E64",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 10,
      fontWeight: 400,
      width: "unset",
      marginTop: "-26px",
      lineHeight: "16px",
      fontFamily: "DM Sans",
      color: "#595E64",
    },
    [theme.breakpoints.up("xl")]: {
      fontWeight: 500,
      fontSize: 14,
      color: "#595E64",
      padding: 20,
      fontFamily: "DM Sans",
      textAlign: "center",
      lineHeight: "20px",
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
