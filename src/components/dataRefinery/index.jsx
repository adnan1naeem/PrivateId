import { Box, Grid, Hidden, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import webDataRef from "../../assets/webDataRef.png";

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
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "19px",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "19px",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: "25px",
    },
    [theme.breakpoints.only("xl")]: {
      width: "85%",
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
    [theme.breakpoints.only("lg")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
    [theme.breakpoints.only("xl")]: {
      width: "84%",
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
    [theme.breakpoints.only("xs")]: {
      top: -508,
    },
    [theme.breakpoints.up("xl")]: {
      top: "-350px",
    },
    [theme.breakpoints.down("lg")]: {
      backgroundPositionY: -108,
    },
  },
  bgImgAboutUs: {
    backgroundImage: `url(${webDataRef})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "60%",
    backgroundPositionY: -224,
    paddingTop: 130,
    paddingBottom: 200,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 30,
    },

    [theme.breakpoints.only("lg")]: {
      backgroundSize: "none",
    },
  },
  imgStyle: {
    boxShadow: "29px 20px 0px #0060d5",
    width: "100%",
    minHeight: 400,
    [theme.breakpoints.only("xs")]: {
      boxShadow: "13px 14px 0px #0060d5",
    },
    [theme.breakpoints.only("lg")]: {
      height: 200,
      minHeight: 0,
    },
  },
  handleMargin: {
    marginTop: "200px !important",
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px !important",
    },
  },
  flexDirection: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "row-reverse",
    },
  },
}));
export const DataRefinery = ({
  title1,
  title2,
  heading1,
  heading2,

  image,
  description_about,
}) => {
  let videoLink = "https://www.youtube.com/embed/5iYEhEiOlrI";
  const classes = useStyles();
  const {
    location: { pathname },
  } = useHistory();
  let containerClass =
    pathname === "/about" ? classes.bgImgAboutUs : classes.bgImg;

  return (
    <Grid container justifyContent="center">
      <Grid item lg={9} xl={8}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          className={[containerClass, classes.flexDirection]}
        >
          <Hidden mdDown>
            <Grid item xs={6} lg={5} xl={6}>
              <Box>
                <iframe
                  width="560"
                  height="315"
                  className={classes.imgStyle}
                  src={videoLink}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Box>
              {description_about && (
                <Box className={`${classes.detail} ${classes.handleMargin}`}>
                  {description_about}
                </Box>
              )}
            </Grid>
            <Grid item lg={1} />
          </Hidden>
          <Grid item xs={10} lg={5} xl={5} md={4}>
            <Box className={classes.heading}>{title1}</Box>

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
            <Grid item xs={10} lg={5} xl={4} md={4}>
              <Box>
                <iframe
                  width="560"
                  height="315"
                  className={classes.imgStyle}
                  src={videoLink}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Box>
              {description_about && (
                <Box className={`${classes.detail} ${classes.handleMargin}`}>
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
      </Grid>
    </Grid>
  );
};
