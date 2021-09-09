import { Box, makeStyles, Paper } from "@material-ui/core";
import linkdin from "../../assets/linkdin.png";
import React from "react";
const useStyles = makeStyles((theme) => ({
  imgStyling: {
    height: 348,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      height: 170,
    },
    [theme.breakpoints.up("sm")]: {
      height: "unset",
    },
    [theme.breakpoints.up("md")]: {
      height: "unset",
    },

    [theme.breakpoints.up("lg")]: {
      height: "unset",
    },
    [theme.breakpoints.up("xl")]: {
      height: "unset",
    },
  },
  designationStyling: {
    fontFamily: "Dm Sans",
    fontWeight: 500,

    color: "#66A5FE",
    [theme.breakpoints.up("xs")]: {
      fontSize: 12,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 15,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 24,
    },
  },
  detailStyling: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 22,
    color: "#3E3E3E",
    [theme.breakpoints.up("xs")]: {
      fontSize: 12,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 11,
      lineHeight: "16px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 16,
      lineHeight: "22px",
    },
  },
  nameStyling: {
    fontFamily: "Dm Sans",
    fontWeight: 500,

    color: "#000000",
    [theme.breakpoints.up("xs")]: {
      fontSize: 12,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 14,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 15,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 24,
    },
  },
  linkedinContainer: {
    display: "flex",
    justifyContent: "flex-end",
    bottom: -37,
    right: 38,
    position: "absolute",
    [theme.breakpoints.up("xs")]: {
      right: "-3px",
      bottom: "-19px",
      height: 44,
    },
    [theme.breakpoints.up("lg")]: {
      height: 38,
      right: 25,
      bottom: "-17px",
    },
    [theme.breakpoints.between("lg,md")]: {
      right: 30,
      bottom: "-18px",
      height: 45,
    },
  },
  bgHeight: {
    [theme.breakpoints.up("xs")]: {
      padding: 10,
      minHeight: 230,
    },
    [theme.breakpoints.up("sm")]: {
      padding: 20,
      minHeight: 190,
    },
    [theme.breakpoints.up("md")]: {
      minHeight: 190,
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: 220,
      padding: 20,
    },
  },
  bgWidth: {
    borderRadius: "19px",
    [theme.breakpoints.up("xs")]: {
      marginTop: 20,
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },

    [theme.breakpoints.up("lg")]: {
      width: 330,
    },
    [theme.breakpoints.up("xl")]: {
      borderRadius: "37px",
      marginTop: 30,
      width: "100%",
      height: 600,
    },
  },
  ml: {
    [theme.breakpoints.up("xs")]: {
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
