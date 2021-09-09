import { Box, makeStyles, Paper } from "@material-ui/core";
import linkdin from "../../assets/linkdin.png";
import React from "react";
const useStyles = makeStyles((theme) => ({
  imgStyling: {
    height: 348,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: "unset",
    },
    [theme.breakpoints.down("xs")]: {
      height: 170,
    },
    [theme.breakpoints.only("lg")]: {
      height: "unset",
    },
  },
  designationStyling: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 30,
    color: "#66A5FE",
    [theme.breakpoints.only("lg")]: {
      [theme.breakpoints.only("md")]: {
        fontSize: 14,
      },
      [theme.breakpoints.only("sm")]: {
        fontSize: 14,
      },
      fontSize: 15,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
    },
  },
  detailStyling: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 22,
    color: "#3E3E3E",
    [theme.breakpoints.only("lg")]: {
      fontSize: 11,
      lineHeight: "16px",
    },
    [theme.breakpoints.only("md")]: {
      fontSize: 14,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
    },
  },
  nameStyling: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 22,
    color: "#000000",
    [theme.breakpoints.only("lg")]: {
      fontSize: 15,
    },
    [theme.breakpoints.only("md")]: {
      fontSize: 14,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
    },
  },
  linkedinContainer: {
    display: "flex",
    justifyContent: "flex-end",
    bottom: -37,
    right: 38,
    position: "absolute",
    [theme.breakpoints.only("lg")]: {
      height: 38,
      right: 25,
      bottom: "-17px",
    },
    [theme.breakpoints.between("lg,md")]: {
      right: 30,
      bottom: "-18px",
      height: 45,
    },
    [theme.breakpoints.only("xs")]: {
      right: "-3px",
      bottom: "-19px",
      height: 44,
    },
  },
  bgHeight: {
    [theme.breakpoints.up("xl")]: {
      minHeight: 500,
      padding: 30,
    },
    [theme.breakpoints.only("lg")]: {
      minHeight: 220,
      padding: 20,
    },
    [theme.breakpoints.only("md")]: {
      minHeight: 190,
    },
    [theme.breakpoints.only("sm")]: {
      padding: 20,
      minHeight: 190,
    },
    [theme.breakpoints.only("xs")]: {
      padding: 10,
      minHeight: 230,
    },
  },
  bgWidth: {
    borderRadius: "19px",
    [theme.breakpoints.only("lg")]: {
      width: 330,
    },
    [theme.breakpoints.only("md")]: {
      width: "100%",
    },
    [theme.breakpoints.only("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: 20,
    },
  },
  ml: {
    [theme.breakpoints.only("xs")]: {
      marginLeft: 20,
      marginRight: 20,
    },
  },
  logo: {
    height: 45,
  },
}));
export const LeadershipCard = ({
  image,
  name,
  designation,
  detail,
  linkedinProfile,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.ml}>
      <Paper component={Box} className={classes.bgWidth}>
        <a href={linkedinProfile} target="_blank">
          <Box position="relative">
            <img className={classes.imgStyling} src={image} alt="logo" />
            <Box className={classes.linkedinContainer}>
              <img className={classes.ml} src={linkdin} alt="logo" />
            </Box>
          </Box>
        </a>

        <Box p={5} className={classes.bgHeight}>
          <Box className={classes.nameStyling}>{name}</Box>
          <Box className={classes.designationStyling}>{designation}</Box>
          <Box className={classes.detailStyling}>{detail}</Box>
        </Box>
      </Paper>
    </Box>
  );
};
