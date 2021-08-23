import {
  Box,
  Button,
  Grid,
  Hidden,
  makeStyles,
  Paper,
  withWidth,
} from "@material-ui/core";
import React, { useState } from "react";
import letstalk from "../../assets/letstalk.png";
import customerPhone from "../../assets/callweb.png";
import customer from "../../assets/customer.png";
const useStyles = makeStyles((theme) => ({
  bgImage: {
    backgroundImage: `url(${letstalk})`,
    backgroundColor: "#2A3D80",
    minHeight: "100vh",
    position: "relative",
    top: -303,
    padding: "5%",
    [theme.breakpoints.down("xs")]: {
      minHeight: "75vh",
    },
  },
  btnFonts: {
    fontWeight: 600,
    fontSize: 28,
    color: "#FFFFFF",
    marginTop: 44,
    fontFamily: "Inter",
    backgroundColor: "#2A3D80",
    width: 292,
    borderRadius: 64,
    textTransform: "capitalize",
    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: "#2A3D80",
    },
    [theme.breakpoints.down("xs")]: {
      padding: 9,
      fontSize: 12,
      width: 135,
      marginTop: 22,
    },
  },
  title: {
    fontWeight: 600,
    fontSize: 64,
    color: "#FFFFFF",
    marginTop: 101,
    fontFamily: "DM Sans",
  },
  heading: {
    fontWeight: 400,
    fontSize: 40,
    color: "#FFFFFF",
    lineHeight: "24px",
    fontFamily: "DM Sans",
    marginTop: 32,
  },
  customerImg: {
    borderRadius: 62,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      borderRadius: "unset",
    },
  },
  textenter: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  boxShadow: {
    borderRadius: 72,
    position: "relative",
    left: 60,
    [theme.breakpoints.down("md")]: {
      left: "unset",
      top: -150,
    },
    [theme.breakpoints.down("xs")]: {
      top: -60,
      borderRadius: 14,
    },
  },
  input: {
    color: "#797979",
    border: "1px solid #C9C9C9",
    fontSize: 24,
    display: "flex",
    fontFamily: "DM Sans",
    fontWeight: 400,
    width: "100%",
    alignItems: "center",
    borderRadius: 42,
    padding: 18,
    boxShadow: "2px 1px 36px 8px rgba(56, 125, 255, 0.11)",
    "&:hover": {
      border: "1px solid #C9C9C9",
      color: "#797979",
    },
    "&:focus-visible": {
      outline: "none",
    },
    [theme.breakpoints.down("xs")]: {
      padding: 9,
      fontSize: 12,
    },
  },
  emailInput: {
    color: "#797979",
    border: "1px solid #C9C9C9",
    fontSize: 24,
    display: "flex",
    fontFamily: "DM Sans",
    fontWeight: 400,
    width: "100%",
    "&:focus-visible": {
      outline: "none",
    },
    alignItems: "center",
    borderRadius: 42,
    boxShadow: "2px 1px 36px 8px rgba(56, 125, 255, 0.11)",
    padding: 18,
    marginTop: 23,
    [theme.breakpoints.down("xs")]: {
      padding: 9,
      fontSize: 12,
    },
  },
  phoneInput: {
    color: "#797979",
    border: "1px solid #C9C9C9",
    fontSize: 24,
    boxShadow: "2px 1px 36px 8px rgba(56, 125, 255, 0.11)",
    display: "flex",
    fontFamily: "DM Sans",
    fontWeight: 400,
    width: "100%",
    alignItems: "center",
    borderRadius: 42,
    "&:focus-visible": {
      outline: "none",
    },
    padding: 18,
    marginTop: 23,
    [theme.breakpoints.down("xs")]: {
      padding: 9,
      fontSize: 12,
    },
  },
  messageInput: {
    color: "#797979",
    border: "1px solid #C9C9C9",
    "&:focus-visible": {
      outline: "none",
    },
    fontSize: 24,
    display: "flex",
    fontFamily: "DM Sans",
    boxShadow: "2px 1px 36px 8px rgba(56, 125, 255, 0.11)",
    fontWeight: 400,
    alignItems: "center",
    borderRadius: 42,
    padding: 18,
    marginTop: 23,
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: 9,
      fontSize: 12,
    },
  },
  dFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 96,
    [theme.breakpoints.down("xs")]: {
      marginTop: 35,
    },
  },
  inqiury: {
    fontWeight: 700,
    fontSize: 64,
    color: "#FFFFFF",
    lineHeight: "24px",
    fontFamily: "DM Sans",
    marginTop: 56,
    [theme.breakpoints.only("xs")]: {
      fontWeight: 700,
      fontSize: 18,
      color: "#FFFFFF",
      lineHeight: "24px",
      fontFamily: "DM Sans",
      marginTop: 23,
    },
  },
  detail: {
    fontWeight: 400,
    fontSize: 24,
    color: "#FFFFFF",
    lineHeight: "32px",
    fontFamily: "DM Sans",
    marginTop: 46,
    [theme.breakpoints.only("xs")]: {
      fontWeight: 400,
      fontSize: 12,
      color: "#FFFFFF",
      lineHeight: "15px",
      fontFamily: "DM Sans",
      marginTop: 12,
      textAlign: "center",
    },
  },
  dflex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
export const LetsTalk = withWidth()(({ width }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  let customerImg = customer;
  if (width === "xs" || width === "md" || width === "sm") {
    customerImg = customerPhone;
  }
  return (
    <Box className={classes.bgImage}>
      <Box className={classes.dflex}>
        <Box className={classes.inqiury}>Send your inquiry</Box>
        <Box className={classes.detail}>
          We provide the best solution for each client to make every business
          decision, and satisfaction is the main thing. It is an approach that
          brings together.
        </Box>
      </Box>
      <Hidden lgDown>
        <Box className={classes.textenter}>
          <Box className={classes.title}>Let’s Talk!</Box>
          <Box className={classes.heading}> Start a conversation.</Box>
        </Box>
      </Hidden>
      <Grid container className={classes.dFlex} justifyContent="center">
        <Grid item xs={11} lg={4} xl={3}>
          <img className={classes.customerImg} src={customerImg} alt="logo" />
        </Grid>
        <Grid item xs={9} lg={5} xl={4} className={classes.boxShadow}>
          <Paper
            component={Box}
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            borderRadius={14}
          >
            <input
              placeholder="Name"
              className={classes.input}
              value={name}
              onChange={(e) => {
                debugger;
                setName(e.target.value);
              }}
            />
            {name.length > 0 && name.length < 3 && (
              <Box color="red" fontSize="9">
                Name must have minimum three characters
              </Box>
            )}
            <input placeholder="Email" className={classes.emailInput} />
            <input placeholder="Phone" className={classes.phoneInput} />
            <input placeholder="Message" className={classes.messageInput} />
            <Button className={classes.btnFonts}>Send</Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
});
