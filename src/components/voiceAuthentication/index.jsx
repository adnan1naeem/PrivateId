import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import webVoice from "../../assets/webVoice.png";
import { AuthenticationCards } from "../authenticationCards";
import { Inputs } from "../inputs";
const input = [
  { text: " Routes VIPs and blocks unwanted callers" },
  { text: " Searches Voice in call recordings “Voice History”" },
  { text: "Elastic AWS serverless architecture" },
  { text: " Guarantees user privacy with PPML and FHE" },
  {
    text: "Certified IEEE Standard for Biometric Privacy, ISO 27001, ISO 9001",
  },
  { text: "Exempt from GDPR, CCPA, BIPA and HIPAA" },
  { text: "Cloud pay-as-you-go pricing" },
];
const useStyles = makeStyles({
  bgImg: {
    backgroundImage: `url(${webVoice})`,
    minHeight: "100vh",
    backgroundSize: "cover",
  },
  title: {
    fontWeight: 700,
    fontSize: 50,
    color: "#FFFFFF",
    lineHeight: "55px",
    fontFamily: "DM Sans",
    marginTop: 76,
  },
  subTitle: {
    fontWeight: 700,
    fontSize: 45,
    color: "#00ABBA",
    lineHeight: "66px",
    fontFamily: "DM Sans",
    marginTop: 8,
  },
  detail: {
    fontWeight: 400,
    fontSize: 22,
    color: "#FFFFFF",
    lineHeight: "32px",
    fontFamily: "DM Sans",
    marginTop: 20,
  },
  mt: {
    marginTop: 80,
    justifyContent: "center",
  },
});
export const VoiceAuthentication = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bgImg}>
      <Box minHeight="100vh" bgcolor="rgb(42 61 130 / 58%)">
        <Grid container className={classes.mt}>
          <Grid item lg={4}>
            <Box className={classes.title}>CONTINUOUS VOICE AUTHENTICATION</Box>
            <Box className={classes.subTitle}>For AMAZON CONNECT</Box>
            <Box className={classes.detail}>
              Identifies and authenticates your customer’s voice every 3 seconds
              with 97% accuracy in IVR, Agent and call recordings
            </Box>
            {input.map((item) => (
              <Inputs text={item.text} />
            ))}
          </Grid>
          <Grid item lg={4}>
            <Box>
              <AuthenticationCards />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
