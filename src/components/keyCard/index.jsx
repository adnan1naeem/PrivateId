import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
  members: {
    fontFamily: "Dm Sans",
    fontWeight: 700,
    fontSize: 30,
    color: "#2A3D80",
  },
  names: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 22,
    color: "#000000",
  },
  detail: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 22,
    color: "#898989",
  },
  bgColor: {
    backgroundColor: "#F4F4F4",
    display: "flex",
    justifyContent: "space-evenly",
    minHeight: 111,
    padding: 30,
  },
  divider: {
    backgroundColor: "#C4C4C4",
    width: 2,
    height: 45,
  },
  mt: {
    backgroundColor: "#F4F4F4",
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});
export const KeyCard = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item lg={6}>
        <Box className={classes.members}>Key Relationships</Box>
        <Box>
          “If I have seen further it is only by standing on the shoulders of
          Giants.” - Sir Isaac Newton, 1676
        </Box>
      </Grid>
      <Grid item lg={6}>
        <Box className={classes.bgColor}>
          <Box style={{ flex: 1 }}>
            <Box className={classes.members}>Edge Computing</Box>
          </Box>
          <Box>
            <Box style={{ flex: 1 }}>
              <Box className={classes.divider}></Box>
            </Box>
          </Box>
          <Box style={{ flex: 1 }}>
            <Box className={classes.names}>TensorFlow Team</Box>
            <Box className={classes.detail}>tensorflow.org</Box>
          </Box>
        </Box>
        <Box className={classes.mt}>
          <Box className={classes.members}>Business Advisory</Box>
          <Box className={classes.divider}></Box>
          <Box>
            <Box className={classes.names}>Richard Fields</Box>
            <Box className={classes.detail}>Allen & Co</Box>
          </Box>
        </Box>
        <Box className={classes.mt}>
          <Box className={classes.members}>Corporate Law</Box>
          <Box className={classes.divider}></Box>
          <Box>
            <Box className={classes.names}> Stephen Huttler</Box>
            <Box className={classes.detail}>Pillsbury Winthrop Shaw</Box>
            <Box className={classes.detail}>Pittman LLP</Box>
          </Box>
        </Box>
        <Box className={classes.mt}>
          <Box className={classes.members}>Intellectual Property</Box>
          <Box className={classes.divider}></Box>
          <Box>
            <Box className={classes.names}>Matthew Grady</Box>
            <Box className={classes.detail}>Wolf, Greenfield & Sacks, P.C.</Box>
          </Box>
        </Box>
        <Box className={classes.mt}>
          <Box className={classes.members}>Audit</Box>
          <Box className={classes.divider}></Box>
          <Box>
            <Box className={classes.names}>William Leffler</Box>
            <Box className={classes.detail}>RSM US LLP</Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
