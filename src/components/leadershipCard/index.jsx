import { Box, makeStyles, Paper } from "@material-ui/core";
import linkdin from "../../assets/linkdin.png";
import React from "react";
const useStyles = makeStyles({
  imgStyling: {
    height: 170,
  },
  designationStyling: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 30,
    color: "#66A5FE",
  },
  detailStyling: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 22,
    color: "#3E3E3E",
  },
  nameStyling: {
    fontFamily: "Dm Sans",
    fontWeight: 500,
    fontSize: 22,
    color: "#000000",
  },
});
export const LeadershipCard = ({ image, name, designation, detail }) => {
  const classes = useStyles();
  return (
    <Box>
      <Paper>
        <Box>
          <Box>
            <img className={classes.imgStyling} src={image} alt="logo" />
          </Box>
        </Box>

        <Box>
          <Box>
            <img src={linkdin} alt="logo" />
          </Box>

          <Box className={classes.nameStyling}>{name}</Box>
          <Box className={classes.designationStyling}>{designation}</Box>
          <Box className={classes.detailStyling}>{detail}</Box>
        </Box>
      </Paper>
    </Box>
  );
};
