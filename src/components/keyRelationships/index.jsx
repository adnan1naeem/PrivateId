import { Box, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import keyrelationship from "../../assets/keyrelationship.png";
import { KeyCard } from "../keyCard";
const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${keyrelationship})`,
    minHeight: "100vh",
    backgroundColor: "rgb(42 61 128 / 81%)",
  },
  paper: {
    padding: 22,
  },
});
export const KeyRelationships = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.container}>
        <Paper className={classes.paper}>
          <KeyCard />
        </Paper>
      </Box>
    </Box>
  );
};
