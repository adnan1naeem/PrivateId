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
  },
  paper: {
    padding: 22,
    paddingBottom: 60,
    [theme.breakpoints.down("md")]: {
      borderRadius: 56,
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: 30,
    },
  },
}));
export const KeyRelationships = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={12} lg={9}>
          <Box>
            <Paper className={classes.paper} elevation={0}>
              <KeyCard />
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
