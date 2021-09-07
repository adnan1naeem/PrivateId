import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Cards } from "../cards";
import webImg from "../../assets/webImg.png";
import ppml from "../../assets/ppml.png";
import wasm from "../../assets/wasm.png";
import elastic from "../../assets/elastic.png";
import fingerprint from "../../assets/fingerprint.png";
import accurate from "../../assets/accurate.png";
import security from "../../assets/security.png";
import edge from "../../assets/edge.png";
import identification from "../../assets/identification.png";
import facemask from "../../assets/facemask.png";
import plant from "../../assets/plant.png";
import remote from "../../assets/remote.png";
import mobile from "../../assets/mobile.png";
import framework from "../../assets/framework.png";
import vendor from "../../assets/vendor.png";
import language from "../../assets/language.png";
import fraud from "../../assets/fraud.png";
import voice from "../../assets/voice.png";
const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 500,
    fontSize: 48,
    color: "#0B216E",
    lineHeight: "58px",
    fontFamily: "DM Sans",
    [theme.breakpoints.up("xl")]: {
      fontSize: 75,
      fontWeight: 700,
      lineHeight: "60px",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: 30,
      fontWeight: 700,
    },
  },
  padding: {
    padding: 55,
    paddingLeft: "10%",
    paddingRight: "10%",
    [theme.breakpoints.up("xl")]: {
      padding: 75,
    },
  },
  seeMore: {
    fontWeight: 700,
    fontSize: 20,
    fontFamily: "DM Sans",
    marginTop: 26,
    backgroundColor: "#0B216E",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#0B216E",
      color: "#FFFFFF",
    },
    borderRadius: 46,
    lineHeight: "29px",
    width: 193,
    height: 63,
    [theme.breakpoints.only("xs")]: {
      marginTop: "0px",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: 10,
      fontWeight: 500,
      width: 160,
      height: 42,
    },
  },
  dFlex: {
    display: "flex",
    justifyContent: "center",
  },
  position: {
    position: "relative",
    top: -400,
    [theme.breakpoints.only("xs")]: {
      top: -716,
    },
    [theme.breakpoints.up("xl")]: {
      top: "-153px",
    },
    [theme.breakpoints.only("lg")]: {
      top: "-520px",
    },
    [theme.breakpoints.only("md")]: {
      top: "-550px",
    },
    [theme.breakpoints.only("sm")]: {
      top: "-550px",
    },
  },
  manageUI: {
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1424,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 1424,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 1424,
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: 1424,
    },
    [theme.breakpoints.up("xs")]: {
      maxWidth: 1424,
    },
  },
}));
const card = [
  {
    image: ppml,
    heading: "Privacy Preserving Machine Learning (PPML)",
    detail:
      "PPML and Fully Homomorphic Encryption (FHE) guarantee user privacy by irreversibly anonymizing all biometrics using ML at the edge. Certified compliant with IEEE 2410-2021 Standard for Biometric Privacy.",
  },
  {
    image: edge,
    heading: "Fully Homomorphic Encryption at the Edge",
    detail:
      "FHE@EDGE is 98% more efficient than comparable cryptographic algorithms. This allows the input data, output data and the occurrence of search itself to be concealed at the Edge in 10ms on any device.",
  },

  {
    image: accurate,
    heading: "Accurate, Fair and Unbiased",

    detail:
      "Amazon Rekognition® is awesome.  Private ID is better. In a recent head-to-head comparison, Private ID delivered absolute accuracy (>99.70%)  across  subgroups.",
  },

  {
    image: identification,
    heading: "0.00% False Positive Identification Rate",
    detail:
      "Private ID prevents false positive (Type 1) errors, and the results are stunning. In a recent head-to-head comparison, Private ID delivered 0.00% false negatives, while Amazon Rekognition® averaged 0.03% across all subgroups. ",
  },

  {
    image: facemask,
    heading: "Recognize Faces with Facemask",

    detail:
      "Our recognition algorithms accommodate boundary conditions including facemasks, sunglasses, distortions, facial expressions, image rotations, beards, scars, makeup, colored lenses and HSL. ",
  },

  {
    image: plant,
    heading: "Uses 99.99% Less Energy Than Competing Algorithms",

    detail:
      "Energy efficient, low powered, high accuracy on-device TensorFlow® DNNs deployed in WebAssembly modules consume 0.01% of expected power. ",
  },
  {
    image: remote,
    heading: "Verified Identity and Remote Onboarding ",

    detail:
      "Verify customers’ and employees’ identity with face, voice, Drivers Licenses, Passport, National ID Card and/or Credit Card. Fully integrated with Amazon Cognito. ",
  },

  {
    image: webImg,
    heading: "Continuous Biometric Authentication",

    detail:
      "Continuous face, voice and fingerprint biometric verification and 1:n identification changes the perspective of authentication from a one-time event to a continuous process.",
  },
  {
    image: wasm,
    heading: "W3C WebAssembly    (Wasm)",
    detail:
      "Lightweight biometric Wasm modules deploy portable (binary code) to all major browsers, mobile and embedded devices, platforms and clouds ",
  },
  {
    image: mobile,
    heading: "Supports General Purpose and Specialize Hardware",

    detail:
      "No training occurs on the client. We support phones, tablets, laptops, cameras and embedded devices without expensive batteries or extra memory. Of course, GPUs & TPUs are also fully supported. ",
  },
  {
    image: framework,
    heading: "AWS Well-Architected Framework",

    detail:
      "Private ID supports enterprise customers using AWS serverless technologies. AWS CloudTrail and CloudWatch enable auditing, governance and compliance.",
  },
  {
    image: vendor,
    heading: "Open Standards With No Vendor Lock-In",

    detail:
      "IEEE 2410-2021 Standard for Biometric Privacy,W3C WebAssembly Core Specification ISO 27001:2013 Information Security Management, ISO 9001:2015 Quality Management Systems, ",
  },
  {
    image: elastic,
    heading: "Elastic Throughput",
    detail:
      " Private ID scales elastically to support large enterprise customers using AWS serverless technologies, ECS/EKS and the AWS Well-Architected Framework®",
  },
  {
    image: security,
    heading: "Security for the real world",

    detail:
      "Every person is different. Our DNNs are trained to maintain high accuracy through extraordinary boundary conditions including facemasks, eyeglasses, sunglasses, image and audio distortions, ",
  },

  {
    image: language,
    heading: "Text and language independent Recognition ",
    detail:
      "We use 3 seconds of any voice to authenticate, identify or enroll. Pass phrases and voice prints are so yesterday.",
  },
  {
    image: fraud,
    heading: "KYC/AML/Watchlists and Fraud Detection",
    detail:
      "Confidently fight fraud and comply with global AML, CDD and  KYC requirements while remote onboarding and authenticating new customers. ",
  },
  {
    image: fingerprint,
    heading: "Contactless and Touch Fingerprint Recognition",

    detail:
      "Use phone cameras, scanners and capacitive readers to authenticate, verify and 1:n identify fingerprints. ",
  },
  {
    image: voice,
    heading: "Continuous Voice Authentication  ",

    detail:
      "Continuously authenticates voice every 3 seconds in IVR, live conversations and call recordings. Automatically invokes 1:n speaker identification when a new voice appears.",
  },
];
export const Features = () => {
  const classes = useStyles();
  const [showMore, setShowMore] = useState(false);
  const [cardsData, setcardsData] = useState(card.slice(0, 6));
  useEffect(() => {
    if (!showMore) {
      setcardsData(card.slice(0, 6));
    } else setcardsData(card);
  }, [showMore]);

  return (
    <Grid
      container
      justifyContent="center"
      className={classes.position}
      id="cards-container"
    >
      <Grid item xs={12} lg={7} md={10} sm={12} className={classes.manageUI}>
        <Box>
          <Box className={classes.dFlex}>
            <Box className={classes.title}>Features</Box>
            <Box></Box>
          </Box>
          <Grid
            container
            spacing={4}
            className={classes.padding}
            justifyContent="center"
          >
            {cardsData.map((item) => (
              <Grid item lg={4} sm={6} xs={12}>
                {" "}
                <Cards
                  image={item.image}
                  heading={item.heading}
                  detail={item.detail}
                />
              </Grid>
            ))}
          </Grid>
          <Box className={classes.dFlex}>
            <Button
              className={classes.seeMore}
              onClick={() => setShowMore(!showMore)}
              href={showMore ? "#cards-container" : ""}
            >
              {showMore ? "See less" : "See more"}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
