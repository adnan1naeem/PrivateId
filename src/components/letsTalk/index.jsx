import {
  Box,
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  Paper,
  withWidth,
} from "@material-ui/core";
import React, { useState } from "react";
import talk from "../../assets/talk.png";
import customerPhone from "../../assets/callweb.png";
import customer from "../../assets/customer.png";
import Axios from "axios";
const useStyles = makeStyles((theme) => ({
  bgImage: {
    backgroundImage: `url(${talk})`,
    backgroundColor: "#2A3D80",
    position: "relative",
    top: -303,
    padding: "5%",
    [theme.breakpoints.down("xs")]: {
      minHeight: "54vh",
      top: -230,
    },
    [theme.breakpoints.up("xl")]: {
      minHeight: "24vh",
      top: -150,
    },
    [theme.breakpoints.only("lg")]: {
      top: -563,
    },
    [theme.breakpoints.only("md")]: {
      top: -545,
    },
    [theme.breakpoints.only("sm")]: {
      top: -563,
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
    [theme.breakpoints.up("xs")]: {
      padding: 9,
      fontSize: 12,
      width: 135,
      marginTop: 22,
    },
    [theme.breakpoints.up("sm")]: {
      padding: 20,
      fontSize: 20,
      width: 170,
      marginTop: 22,
      height: 60,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 14,
      width: 168,
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
    width: "100%",
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

    [theme.breakpoints.up("xs")]: {
      top: -25,
      borderRadius: 14,
    },
    [theme.breakpoints.up("sm")]: {
      left: "unset",
      top: "-24px",
    },
    [theme.breakpoints.up("md")]: {
      left: "unset",
      top: -30,
    },
    [theme.breakpoints.up("lg")]: {
      left: -52,
    },
    [theme.breakpoints.up("xl")]: {
      left: -52,
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
    [theme.breakpoints.only("lg")]: {
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
    [theme.breakpoints.only("lg")]: {
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
    [theme.breakpoints.only("lg")]: {
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
    [theme.breakpoints.only("lg")]: {
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
      display: "block",
    },
  },
  inqiury: {
    fontWeight: 700,
    fontSize: 64,
    color: "#FFFFFF",
    lineHeight: "24px",
    fontFamily: "DM Sans",
    marginTop: 56,
    [theme.breakpoints.up("xs")]: {
      fontSize: 18,
      lineHeight: "24px",
      marginTop: 23,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 22,
      lineHeight: "24px",
      marginTop: 23,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 22,
      lineHeight: "24px",
      marginTop: 23,
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: 32,
    },
  },
  detail: {
    fontWeight: 400,
    fontSize: 24,
    color: "#FFFFFF",
    lineHeight: "32px",
    fontFamily: "DM Sans",
    marginTop: 46,
    [theme.breakpoints.up("xs")]: {
      fontWeight: 400,
      fontSize: 12,
      marginTop: 12,
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      fontWeight: 400,
      fontSize: 22,
      marginTop: 12,
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      fontWeight: 400,
      fontSize: 22,
      marginTop: 12,
      textAlign: "center",
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: 20,
      marginTop: 9,
    },
  },
  dflex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  message: {
    fontSize: 10,
    marginTop: 10,
    fontFamily: "Dm Sans",
    color: "red",
  },
  manageUI: {
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1120,
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: 1120,
    },
  },
  borderRadius: {
    [theme.breakpoints.up("xs")]: {
      borderRadius: 33,
    },
    [theme.breakpoints.up("sm")]: {
      borderRadius: 50,
    },
    [theme.breakpoints.up("md")]: {
      borderRadius: 50,
      padding: 60,
    },
    [theme.breakpoints.up("lg")]: {
      borderRadius: 40,
    },
    [theme.breakpoints.up("xl")]: {
      borderRadius: 50,
    },
  },
}));
export const LetsTalk = withWidth()(({ width }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  const handleSendMessage = () => {
    let data = {
      name,
      email_address: email,
      phone_number: phone,
      message: msg,
    };

    let isDataValid =
      name.length > 2 &&
      email.length > 0 &&
      email.includes("@") &&
      phone.length > 10 &&
      msg.length > 0;

    if (isDataValid) {
      setSendingMessage(true);
      Axios.post("https://apidevel.private.id/trueid/v1.1/contact_us", data)
        .then((res) => {
          setSendingMessage(false);
          debugger;
        })
        .catch((err) => {
          setSendingMessage(false);
          debugger;
        });
    }
  };
  let customerImg = customer;
  if (width === "xs" || width === "md" || width === "sm") {
    customerImg = customerPhone;
  }
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} lg={9} className={classes.manageUI}>
        <Box className={classes.bgImage} id="letstalk">
          <Box className={classes.dflex}>
            <Box className={classes.inqiury}>Let’s Talk!</Box>
            <Box className={classes.detail}>Start a conversation.</Box>
          </Box>

          <Grid container className={classes.dFlex} justifyContent="center">
            <Grid item xs={11} sm={12} lg={5} xl={6}>
              <img
                className={classes.customerImg}
                src={customerImg}
                alt="logo"
              />
            </Grid>
            <Grid
              item
              xs={8}
              sm={11}
              lg={5}
              xl={6}
              className={classes.boxShadow}
            >
              <Paper
                component={Box}
                p={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
                className={classes.borderRadius}
              >
                <input
                  placeholder="Name"
                  className={classes.input}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                {name.length > 0 && name.length < 3 && (
                  <Box className={classes.message}>
                    Name must have minimum three characters
                  </Box>
                )}
                <input
                  placeholder="Email"
                  className={classes.emailInput}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {email.length > 0 && !email.includes("@") && (
                  <Box className={classes.message}>
                    Please enter valid email
                  </Box>
                )}
                <input
                  placeholder="Phone"
                  className={classes.phoneInput}
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                {phone.length > 0 && phone.length < 12 && (
                  <Box className={classes.message}>
                    Please enter valid number
                  </Box>
                )}
                <input
                  placeholder="Message"
                  value={msg}
                  className={classes.messageInput}
                  onChange={(e) => {
                    setMsg(e.target.value);
                  }}
                />
                <Button
                  className={classes.btnFonts}
                  onClick={handleSendMessage}
                  disabled={sendingMessage}
                >
                  Send{" "}
                  {sendingMessage && (
                    <CircularProgress
                      style={{ color: "white", marginLeft: 16 }}
                    />
                  )}
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
});
