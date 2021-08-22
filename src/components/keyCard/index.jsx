import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import aboutus2 from "../../assets/aboutus2.jpg";
const useStyles = makeStyles((theme) => ({
  heading: {
    fontFamily: "Dm Sans",
    fontWeight: 700,
    fontSize: 48,
    color: "#0B216F",
    marginTop: 38,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    [theme.breakpoints.down("lg")]: {
      fontSize: 32,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  details: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 24,
    color: "#000000",
    marginTop: 17,
    width: "85%",
    [theme.breakpoints.down("lg")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      marginTop: 10,
      width: "none",
    },
  },
  members: {
    fontFamily: "Dm Sans",
    fontWeight: 700,
    fontSize: 30,
    color: "#2A3D80",
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: 20,
    },
  },
  names: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 22,
    color: "#000000",
    lineHeight: "37px",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: 16,
    },
  },
  detail: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 22,
    color: "#898989",
    [theme.breakpoints.down("lg")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
  },
  bgColor: {
    backgroundColor: "#F4F4F4",
    display: "flex",
    justifyContent: "space-evenly",
    padding: 30,
    alignItems: "center",
    boxShadow: "0px 4px 4px rgba(42, 61, 128, 0.22)",
    borderRadius: 10,
    [theme.breakpoints.down("lg")]: {
      padding: 16,
    },
  },
  divider: {
    backgroundColor: "#C4C4C4",
    width: 2,
    height: 70,
    marginRight: 21,
    marginLeft: 21,
  },
  mt: {
    backgroundColor: "#F4F4F4",
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 20,
    padding: 30,
    alignItems: "center",
    boxShadow: "0px 4px 4px rgba(42, 61, 128, 0.22)",
    borderRadius: 10,
    [theme.breakpoints.down("lg")]: {
      padding: 16,
    },
  },
  imgStyling: {
    display: "flex",
    justifyContent: "center",
    height: 330,
    marginTop: 168,
    [theme.breakpoints.down("lg")]: {
      height: 270,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 60,
    },
    [theme.breakpoints.down("xs")]: {
      height: 150,
      marginTop: 70,
    },
  },
}));
export const KeyCard = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} lg={6}>
        <Box>
          <Box className={classes.heading}>
            Key Relationships
            <Box className={classes.details}>
              “If I have seen further it is only by standing on the shoulders of
              Giants.” - Sir Isaac Newton, 1676
            </Box>
          </Box>
        </Box>
        <Box className={classes.imgStyling}>
          <img src={aboutus2} alt="" />
        </Box>
      </Grid>
      <Grid item lg={6}>
        <Box className={classes.bgColor}>
          <Box style={{ flex: 1 }}>
            <Box className={classes.members}>Edge Computing</Box>
          </Box>
          <Box>
            <Box className={classes.divider}></Box>
          </Box>
          <Box style={{ flex: 1 }}>
            <Box className={classes.names}>TensorFlow Team</Box>
            <Box className={classes.detail}>tensorflow.org</Box>
          </Box>
        </Box>
        <Box className={classes.mt}>
          <Box className={classes.members}>Business Advisory</Box>
          <Box className={classes.divider}></Box>
          <Box style={{ flex: 1 }}>
            <Box className={classes.names}>Richard Fields</Box>
            <Box className={classes.detail}>Allen & Co</Box>
          </Box>
        </Box>
        <Box className={classes.mt}>
          <Box className={classes.members}>Corporate Law</Box>
          <Box className={classes.divider}></Box>
          <Box style={{ flex: 1 }}>
            <Box className={classes.names}> Stephen Huttler</Box>
            <Box className={classes.detail}>Pillsbury Winthrop Shaw</Box>
            <Box className={classes.detail}>Pittman LLP</Box>
          </Box>
        </Box>
        <Box className={classes.mt}>
          <Box className={classes.members}>Intellectual Property</Box>
          <Box className={classes.divider}></Box>
          <Box style={{ flex: 1 }}>
            <Box className={classes.names}>Matthew Grady</Box>
            <Box className={classes.detail}>Wolf, Greenfield & Sacks, P.C.</Box>
          </Box>
        </Box>
        <Box className={classes.mt}>
          <Box className={classes.members}>Audit</Box>
          <Box className={classes.divider}></Box>
          <Box style={{ flex: 1 }}>
            <Box className={classes.names}>William Leffler</Box>
            <Box className={classes.detail}>RSM US LLP</Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
