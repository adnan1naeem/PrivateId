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
import { KeyRelationships } from "../components/keyRelationships";
import { Leadership } from "../components/leadership";

export const Home = () => {
  return (
    <>
      <AppBar />
      <Introduction />
      <DataRefinery />
      <Features />
      <VoiceAuthentication />
      <GetReady />
      <GoPricing />
      <LetsTalk />
      <WebFooter />
      <KeyRelationships />
      <Leadership />
    </>
  );
};
