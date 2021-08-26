import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import callBg from "../../assets/callBg.png";
import { AuthenticationCards } from "../authenticationCards";
import { Inputs } from "../inputs";
import voiceIPad from "../../assets/voiceIPad.png";
import { Link } from "react-router-dom";
const input = [
  { text: " Routes VIPs and blocks unwanted callers" },
  { text: "Search any voice in call recordings" },
  { text: "Instantly disambiguate customer profiles" },

  { text: " Guarantees user privacy with PPML and FHE" },
  {
    text: "Certified IEEE Standard for Biometric Privacy, ISO 27001, ISO 9001",
  },
  { text: "Exempt from GDPR, CCPA, BIPA and HIPAA" },
  { text: "Cloud pay-as-you-go pricing" },
];
const useStyles = makeStyles((theme) => ({
  bgImg: {
    backgroundImage: `url(${callBg})`,
    [theme.breakpoints.only("md")]: {
      backgroundImage: `url(${voiceIPad})`,
    },
    minHeight: "135vh",
    backgroundSize: "cover",
    position: "relative",
    top: -300,
    [theme.breakpoints.only("xs")]: {
      top: -651,
    },
    [theme.breakpoints.up("xl")]: {
      top: "-55px",
      minHeight: "0vh",
    },
  },
  iPadView: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: 700,
    fontSize: 50,
    color: "#FFFFFF",
    lineHeight: "55px",
    fontFamily: "DM Sans",
    [theme.breakpoints.down("md")]: {
      fontSize: 41,
      marginTop: 50,
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      lineHeight: "24px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 70,
      lineHeight: "77px",
    },
  },
  subTitle: {
    fontWeight: 700,
    fontSize: 43,
    color: "#00ABBA",
    lineHeight: "66px",
    fontFamily: "DM Sans",
    marginTop: 8,
    [theme.breakpoints.down("md")]: {
      fontSize: 36,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      color: "#0B216E",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 48,
      lineHeight: "68px",
    },
  },
  detail: {
    fontWeight: 400,
    fontSize: 22,
    color: "#FFFFFF",
    lineHeight: "32px",
    fontFamily: "DM Sans",
    marginTop: 20,
    marginBottom: 32,
    maxWidth: "93%",
    [theme.breakpoints.down("md")]: {
      fontWeight: 700,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
      lineHeight: "24px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 25,
    },
  },
  mt: {
    padding: "5%",
    [theme.breakpoints.down("md")]: {
      paddingBottom: 200,
    },
  },
  width: {
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginRight: 9,
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
    },
  },
  minHeight: {
    minHeight: "135vh",
    backgroundColor: "rgb(42 61 128 / 81%)",
    [theme.breakpoints.up("xl")]: {
      minHeight: "0vh",
    },
  },
}));
export const VoiceAuthentication = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="center"
      className={classes.bgImg}
      id="authentication"
    >
      <Grid item xs={12} xl={6} lg={6}>
        <Box>
          <Box className={classes.minHeight}>
            <Grid
              container
              className={classes.mt}
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Grid
                item
                xs={11}
                md={10}
                lg={5}
                xl={4}
                className={classes.iPadView}
              >
                <Box className={classes.title}>
                  CONTINUOUS VOICE AUTHENTICATION
                </Box>
                <Box>
                  <Link className={classes.subTitle}>For AMAZON CONNECT®</Link>
                </Box>
                <Box className={classes.detail}>
                  Identifies and authenticates your customer’s voice every 3
                  seconds with 97% accuracy in IVR, Agent and call recordings
                </Box>
                <Box className={classes.width}>
                  {input.map((item) => (
                    <Inputs text={item.text} />
                  ))}
                </Box>
              </Grid>
              <Grid item lg={7} xl={6}>
                <AuthenticationCards />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
