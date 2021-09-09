import { Box, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import keyrelationship from "../../assets/keyrelationship.png";
import { KeyCard } from "../keyCard";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${keyrelationship})`,
    minHeight: "1075px",
    backgroundColor: "rgb(42 61 128 / 81%)",
    display: "flex",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      minHeight: "unset",
      padding: 60,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 35,
    },
    [theme.breakpoints.only("lg")]: {
      minHeight: "836px",
    },
    [theme.breakpoints.up("xl")]: {
      justifyContent: "center",
    },
  },
  paper: {
    padding: 22,
    paddingBottom: 60,
    borderRadius: 33,
    [theme.breakpoints.only("md")]: {
      borderRadius: 56,
    },
    [theme.breakpoints.only("sm")]: {
      borderRadius: 30,
    },
  },
  containerChild: {
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1200,
    },
  },
}));
export const KeyRelationships = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item lg={12} xl={12}>
        <Box className={classes.container} id="key-relationship">
          <Grid
            container
            justifyContent="center"
            className={classes.containerChild}
          >
            <Grid item xs={12} md={12} lg={9} xl={11}>
              <Box>
                <Paper className={classes.paper} elevation={0}>
                  <KeyCard />
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
