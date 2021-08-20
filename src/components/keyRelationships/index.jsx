import { Box, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import keyrelationship from "../../assets/keyrelationship.png";
import { KeyCard } from "../keyCard";
const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${keyrelationship})`,
    minHeight: "100vh",
    backgroundColor: "rgb(42 61 128 / 81%)",
    display: "flex",
    alignItems: "center",
  },
  paper: {
    padding: 22,
  },
});
export const KeyRelationships = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container justifyContent="center">
        <Grid item lg={9}>
          <Box>
            <Box>
              <Paper className={classes.paper} elevation={0}>
                <KeyCard />
              </Paper>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
