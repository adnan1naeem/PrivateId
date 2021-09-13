import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import callBg from "../../assets/callBg.png";
import { AuthenticationCards } from "../authenticationCards";
import { Inputs } from "../inputs";
import voiceIPad from "../../assets/voiceIPad.png";
import { Link } from "react-router-dom";
import authMob from "../../assets/authMob.svg";
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
    backgroundColor: "#2A3D80",
    backgroundPosition: "center",
    minHeight: "135vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    top: -300,
    [theme.breakpoints.up("xs")]: {
      backgroundImage: `url(${authMob})`,
      top: -600,
    },
    [theme.breakpoints.up("sm")]: {
      minHeight: "77vh",
      top: "-434px",
      backgroundImage: `url(${voiceIPad})`,
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${voiceIPad})`,
      minHeight: "unset",
      top: "-434px",
    },

    [theme.breakpoints.up("lg")]: {
      backgroundImage: `url(${callBg})`,

      top: "-439px",
      minHeight: "42vh",
    },
    [theme.breakpoints.up("xl")]: {
      backgroundImage: `url(${callBg})`,
      top: "-68px",
      minHeight: "44vh",
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
    [theme.breakpoints.up("xs")]: {
      fontSize: 22,
      marginTop: 50,
    },

    [theme.breakpoints.up("sm")]: {
      fontSize: 22,
      lineHeight: "24px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 25,
      marginTop: 50,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 25,
      lineHeight: "32px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 40,
      lineHeight: "58px",
    },
  },
  subTitle: {
    fontWeight: 700,
    fontSize: 43,
    color: "#00ABBA",
    lineHeight: "66px",
    fontFamily: "DM Sans",
    marginTop: 8,
    [theme.breakpoints.up("xs")]: {
      fontSize: 22,
      marginTop: "unset",
      lineHeight: "unset",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 22,
      marginTop: "unset",
      lineHeight: "unset",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 22,
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: 22,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 33,
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
    [theme.breakpoints.up("xs")]: {
      fontSize: 16,

      lineHeight: "24px",
      width: 378,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 16,
      lineHeight: "24px",
      width: 378,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
      width: 378,
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: 16,
      lineHeight: "19px",

      marginTop: "0px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 18,
      lineHeight: "25px",
    },
  },
  mt: {
    padding: "5%",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: 72,
    },
    [theme.breakpoints.up("md")]: {
      paddingBottom: 110,
    },
    [theme.breakpoints.up("xl")]: {
      paddingBottom: 110,
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
    [theme.breakpoints.down("md")]: {
      width: "unset",
    },
  },
  minHeight: {
    minHeight: "135vh",

    [theme.breakpoints.up("xl")]: {
      minHeight: "0vh",
    },
  },
  manageUI: {
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1120,
    },
    [theme.breakpoints.down("xl")]: {
      maxWidth: 1120,
    },
  },
}));
export const VoiceAuthentication = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} lg={9} xl={7} className={classes.manageUI}>
        <Grid container justifyContent="center" id="authentication">
          <Box>
            <Box className={classes.bgImg}>
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
                  xl={5}
                  className={classes.iPadView}
                >
                  <Box className={classes.title}>
                    CONTINUOUS VOICE AUTHENTICATION
                  </Box>
                  <Box>
                    <Link className={classes.subTitle}>
                      For AMAZON CONNECT®
                    </Link>
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
    </Grid>
  );
};
