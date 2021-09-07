import { Box, makeStyles, Paper } from "@material-ui/core";
import linkdin from "../../assets/linkdin.png";
import React from "react";
const useStyles = makeStyles((theme) => ({
  imgStyling: {
    height: 348,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: 358,
    },
    [theme.breakpoints.down("xs")]: {
      height: 170,
    },
  },
  designationStyling: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 30,
    color: "#66A5FE",
    [theme.breakpoints.down("lg")]: {
      fontSize: 18,
    },
  },
  detailStyling: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 22,
    color: "#3E3E3E",
    [theme.breakpoints.down("lg")]: {
      fontSize: 17,
    },
  },
  nameStyling: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 22,
    color: "#000000",
  },
  linkedinContainer: {
    display: "flex",
    justifyContent: "flex-end",
    bottom: -37,
    right: 38,
    position: "absolute",
  },
  bgHeight: {
    minHeight: 550,
    [theme.breakpoints.down("lg")]: {
      minHeight: 250,
    },
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
    <Box>
      <Paper component={Box} borderRadius="33px">
        <a href={linkedinProfile} target="_blank">
          <Box position="relative">
            <img className={classes.imgStyling} src={image} alt="logo" />
            <Box className={classes.linkedinContainer}>
              <img src={linkdin} alt="logo" />
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
