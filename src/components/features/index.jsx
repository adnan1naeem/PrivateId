import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Cards } from "../cards";
import webImg from "../../assets/webImg.png";
import ppml from "../../assets/ppml.png";
import wasm from "../../assets/wasm.png";
import elastic from "../../assets/elastic.png";
import fair from "../../assets/fair.png";
import encryption from "../../assets/encryption.png";
import security from "../../assets/security.png";

const useStyles = makeStyles({
  title: {
    fontWeight: 500,
    fontSize: 48,
    color: "#0B216E",
    lineHeight: "58px",
    fontFamily: "DM Sans",
  },
  dFlex: {
    display: "flex",
    justifyContent: "center",
  },
  padding: {
    padding: 55,
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
  },
  dFlex: {
    display: "flex",
    justifyContent: "center",
  },
});
const card = [
  {
    image: webImg,
    heading: "Continuous Biometric Identification",
    detail:
      "Continuous face, voice and fingerprint biometric verification and 1:n identification changes the perspective of authentication from a one-time event to a continuous process.",
  },
  {
    image: ppml,
    heading: "Privacy Preserving Machine Learning (PPML)",
    detail:
      "PPML and Fully Homomorphic Encryption (FHE) guarantee user privacy by irreversibly anonymizing all biometrics using ML at the edge. Certified compliant with IEEE 2410-2021 Standard for Biometric Privacy.",
  },
  {
    image: wasm,
    heading: "W3C WebAssembly (Wasm)",
    detail:
      "Lightweight biometric Wasm modules deploy portable (binary code) to all major browsers, mobile and embedded devices, platforms and clouds ",
  },
  {
    image: elastic,
    heading: "Elastic Throughput",
    detail:
      " Private ID scales elastically to support large enterprise customers using AWS serverless technologies, ECS/EKS and the AWS Well-Architected Framework®",
  },
  {
    image: fair,
    heading: "Fair and Unbiased",
    detail:
      " AWS Rekognition is awesome. Private ID is better. In a recent head-to-head comparison, Private ID delivered absolute accuracy (99.8%)",
  },
  {
    image: encryption,
    heading: "Fully Homomorphic Encryption at the Edge",
    detail:
      "FHE@EDGE is 98% more efficient than comparable cryptographic algorithms. This allows the input data, output data and the occurrence of search itself to be concealed at the Edge in 10ms on any device.",
  },
  {
    image: security,
    heading: "Security for the real world",
    detail:
      " Every person is different. Our DNNs are trained to maintain high accuracy through extraordinary boundary conditions including facemasks, eyeglasses, sunglasses, image and audio distortions, ",
  },

  {
    image: webImg,
    heading: "Global scale identity based on open standards",
    detail:
      "IEEE 2410-2021 Standard for Biometric Privacy,W3C WebAssembly Core Specification,ISO 27001:2013 Information Security Management, ISO 9001:2015 Quality Management Systems,  ",
  },
  {
    image: webImg,
    heading: "AWS Well-Architected Framework",
    detail:
      "Private ID supports enterprise customers using AWS serverless technologies. AWS CloudTrail and CloudWatch enable auditing, governance and compliance.",
  },
  {
    image: webImg,
    heading: "Raspy Voice Identification ",
    detail:
      "Maintains accuracy through signal variations, background noise, noise cancelling algorithms, and physiological variations due to sleep, smoking, and alcohol.",
  },
  {
    image: webImg,
    heading: "Text and language independent Recognition ",
    detail:
      "We use 3 seconds of any voice to authenticate, identify or enroll. Pass phrases and voice prints are so yesterday.",
  },
  {
    image: webImg,
    heading: "Text and language independent Recognition ",
    detail:
      "We use 3 seconds of any voice to authenticate, identify or enroll. Pass phrases and voice prints are so yesterday.",
  },
  {
    image: webImg,
    heading: "Text and language independent Recognition ",
    detail:
      "We use 3 seconds of any voice to authenticate, identify or enroll. Pass phrases and voice prints are so yesterday.",
  },
  {
    image: webImg,
    heading: "Text and language independent Recognition ",
    detail:
      "We use 3 seconds of any voice to authenticate, identify or enroll. Pass phrases and voice prints are so yesterday.",
  },
  {
    image: webImg,
    heading: "Text and language independent Recognition ",
    detail:
      "We use 3 seconds of any voice to authenticate, identify or enroll. Pass phrases and voice prints are so yesterday.",
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
    <Box>
      <Box className={classes.dFlex}>
        <Box className={classes.title}>Features</Box>
        <Box></Box>
      </Box>
      <Grid container spacing={4} className={classes.padding}>
        {cardsData.map((item) => (
          <Grid item lg={4}>
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
        >
          {showMore ? "See less" : "See more"}
        </Button>
      </Box>
    </Box>
  );
};
