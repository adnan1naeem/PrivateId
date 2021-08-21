import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import letstalk from "../../assets/letstalk.png";
import customer from "../../assets/customer.png";
const useStyles = makeStyles((theme) => ({
  bgImage: {
    backgroundImage: `url(${letstalk})`,
    backgroundColor: "#2A3D80",
    minHeight: "100vh",
    position: "relative",
    top: -303,
    padding: "5%",
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
    },
  },
  textenter: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  boxShadow: {
    boxShadow: "-8px 19px 13px -6px rgba(102, 165, 254, 0.3)",
    backgroundColor: "#ffffff",
    borderRadius: 72,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    position: "relative",
    left: 60,
    padding: "5%",
    [theme.breakpoints.down("md")]: {
      left: "unset",
      top: -400,
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
    "&:hover": {
      border: "1px solid #C9C9C9",
      color: "#797979",
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
    alignItems: "center",
    borderRadius: 42,
    padding: 18,
    marginTop: 23,
  },
  phoneInput: {
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
    marginTop: 23,
  },
  messageInput: {
    color: "#797979",
    border: "1px solid #C9C9C9",
    fontSize: 24,
    display: "flex",
    fontFamily: "DM Sans",
    fontWeight: 400,
    alignItems: "center",
    borderRadius: 42,
    padding: 18,
    marginTop: 23,
    width: "100%",
  },
  dFlex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 96,
    [theme.breakpoints.down("md")]: {},
  },
}));
export const LetsTalk = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bgImage}>
      <Box className={classes.textenter}>
        <Box className={classes.title}>Let’s Talk!</Box>
        <Box className={classes.heading}> Start a conversation.</Box>
      </Box>
      <Grid container className={classes.dFlex} justifyContent="center">
        <Grid item xs={11} lg={4} xl={3}>
          <img className={classes.customerImg} src={customer} alt="logo" />
        </Grid>
        <Grid item xs={9} lg={5} xl={4} className={classes.boxShadow}>
          <input placeholder="Name" className={classes.input} />
          <input placeholder="Email" className={classes.emailInput} />
          <input placeholder="Phone" className={classes.phoneInput} />
          <input placeholder="Message" className={classes.messageInput} />
          <Button className={classes.btnFonts}>Send</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
