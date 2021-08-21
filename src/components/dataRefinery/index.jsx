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
    [theme.breakpoints.down("md")]: { textAlign: "center", width: "100%" },
  },
  detail: {
    fontWeight: 400,
    fontSize: 24,
    color: "#000000",
    lineHeight: "37px",
    marginTop: 13,
    fontFamily: "DM Sans",
    [theme.breakpoints.down("md")]: { textAlign: "center" },
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
        <Grid item md={10} lg={5}>
          <Box>
            <img src={videoImg} className={classes.imgStyle} alt="logo" />
          </Box>
          {description_about && (
            <Box mt={"200px !important"} className={classes.detail}>
              {description_about}
            </Box>
          )}
        </Grid>
      </Hidden>
      <Grid item lg={1} />
      <Grid item md={10} lg={5}>
        <Box className={classes.heading}>{title1}</Box>
        <Box className={classes.detail}>{heading1}</Box>
        <Box className={classes.heading}> {title2}</Box>
        <Box>
          <Box className={classes.detail}>{heading2}</Box>

          <Box mt={"74px"}>
            <img src={image} alt="" />
          </Box>
        </Box>
      </Grid>

      <Hidden lgUp>
        <Grid item md={10} lg={5}>
          <Box>
            <img src={videoImg} className={classes.imgStyle} alt="logo" />
          </Box>
          {description_about && (
            <Box mt={"200px !important"} className={classes.detail}>
              {description_about}
            </Box>
          )}
        </Grid>
      </Hidden>
    </Grid>
  );
};
