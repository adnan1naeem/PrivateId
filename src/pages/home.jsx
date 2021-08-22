import React from "react";
import AppBar from "../components/appBar";
import { DataRefinery } from "../components/dataRefinery";
import { Features } from "../components/features";
import { Introduction } from "../components/introduction";
import { VoiceAuthentication } from "../components/voiceAuthentication";
import GoPricing from "../components/goPricing";
import { LetsTalk } from "../components/letsTalk";
import { GetReady } from "../components/getReady";
import { WebFooter } from "../components/webfooter";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({}));
export const Home = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar />
      <Introduction />
      <DataRefinery
        title1=" Biometric security that guarantees privacy, a fundamental human right"
        heading1="Private Identity’s continuous, lightweight biometric recognition
      algorithms use Privacy Preserving Machine Learning, Fully Homomorphic
      Encryption and WebAssembly to provide private, fast and secure
      biometric identity on all major browsers, mobile and embedded devices,
      platforms and clouds without installation."
      />
      <Features />
      <VoiceAuthentication />
      <GetReady />
      <GoPricing />
      <LetsTalk />
      <WebFooter className={classes.footer} />
    </>
  );
};
