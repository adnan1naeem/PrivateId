import { Box, Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import webDataRef from "../../assets/webDataRef.png";
import videoImg from "../../assets/videoImg.png";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: 400,
    fontSize: 35,
    color: "#000000",
    lineHeight: "42px",
    marginTop: 13,
    fontFamily: "DM Sans",
    width: "85%",

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      width: "100%",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "19px",
    },
  },
  detail: {
    fontWeight: 400,
    fontSize: 24,
    color: "#000000",
    lineHeight: "37px",
    marginTop: 13,
    fontFamily: "DM Sans",
    [theme.breakpoints.down("md")]: { textAlign: "center" },
    [theme.breakpoints.only("xs")]: {
      fontSize: 12,
      lineHeight: "16px",
    },
  },
  bgImg: {
    backgroundImage: `url(${webDataRef})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "60%",
    backgroundPositionY: -224,
    paddingTop: 450,
    marginTop: 100,
    paddingBottom: 200,
    position: "relative",
    top: -422,
    zIndex: -1,
    [theme.breakpoints.only("xs")]: {
      top: -508,
    },
  },
  bgImgAboutUs: {
    backgroundImage: `url(${webDataRef})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "60%",
    backgroundPositionY: -224,
    paddingTop: 130,
    paddingBottom: 200,
    zIndex: -1,
  },
  imgStyle: {
    boxShadow: "29px 20px 0px #0060d5",
    width: "100%",
    [theme.breakpoints.only("xs")]: {
      top: -94,
      boxShadow: "13px 14px 0px #0060d5",
      position: "relative",
    },
  },
}));
export const DataRefinery = ({
  title1,
  title2,
  heading1,
  heading2,
  description,
  image,
  description_about,
}) => {
  const classes = useStyles();
  const {
    location: { pathname },
  } = useHistory();
  let containerClass =
    pathname === "/about" ? classes.bgImgAboutUs : classes.bgImg;

  return (
    <Grid
      container
      spacing={4}
      className={containerClass}
      justifyContent="center"
    >
      <Hidden mdDown>
        <Grid item xs={10} lg={5}>
          <Box>
            <img src={videoImg} className={classes.imgStyle} alt="logo" />
          </Box>
          {description_about && (
            <Box mt={"200px !important"} className={classes.detail}>
              {description_about}
            </Box>
          )}
        </Grid>
        <Grid item lg={1} />
      </Hidden>
      <Grid item xs={10} lg={5}>
        <Hidden mdDown>
          <Box className={classes.heading}>{title1}</Box>
        </Hidden>
        <Box className={classes.heading}>
          A data refinery, built to privately identify every individual
        </Box>
        <Box className={classes.detail}>{heading1}</Box>
        <Box className={classes.heading}> {title2}</Box>
        <Box>
          <Box className={classes.detail}>{heading2}</Box>
          <Hidden mdDown>
            <Box mt={"74px"}>
              <img src={image} alt="" />
            </Box>
          </Hidden>
        </Box>
      </Grid>

      <Hidden lgUp>
        <Grid item xs={10} lg={5}>
          <Box>
            <img src={videoImg} className={classes.imgStyle} alt="logo" />
          </Box>
          {description_about && (
            <Box mt={"200px !important"} className={classes.detail}>
              {description_about}
            </Box>
          )}
          <Hidden lgUp>
            <Box mt={"74px"} display="flex" justifyContent="center">
              <img src={image} alt="" />
            </Box>
          </Hidden>
        </Grid>
      </Hidden>
    </Grid>
  );
};
