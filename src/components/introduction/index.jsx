import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import webIntro from "../../assets/webIntro.png";
const useStyles = makeStyles({
  container: {
    background: "linear-gradient(249.78deg, #35D3FF -0.64%, #450B89 103.6%)",
    borderBottomLeftRadius: "25%",
    borderBottomRightRadius: "25%",
  },
  heading: {
    color: "#FFFFFF",
    fontSize: 68,
    fontWeight: 400,
    lineHeight: "81px",
  },
  description: {
    color: "#FFFFFF",
    fontSize: 70,
    fontWeight: 400,
    lineHeight: "90px",
    fontFamily: "Abel",
    width: "97%",
  },
  btn: {
    fontWeight: 700,
    fontSize: 24,
    fontFamily: "DM Sans",
    marginTop: 26,
    backgroundColor: "#0B216E",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#0B216E",
      color: "#FFFFFF",
    },
    borderRadius: 46,
    lineHeight: "35px",
    width: 298,
    height: 103,
  },
});
export const Introduction = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: 115, paddingBottom: 115 }}
      >
        <Grid item lg={5}>
          <Box className={classes.description}>
            Continuous authentication for a surprising and delightful customer
            experience
          </Box>
          <Button className={classes.btn}>Get Started</Button>
        </Grid>
        <Grid item lg={1} />
        <Grid item lg={4}>
          <img src={webIntro} width="100%" />
        </Grid>
      </Grid>
    </Box>
  );
};
