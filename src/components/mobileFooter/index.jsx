import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Grid, Hidden } from "@material-ui/core";
import stack from "../../assets/stack.png";
import tracker from "../../assets/tracker.png";
import api from "../../assets/api.png";
import patent from "../../assets/patent.png";
import phn from "../../assets/phn.png";
import en from "../../assets/envelop.png";
import yt from "../../assets/youtube.png";

const styles = (theme) => ({
  root: {
    width: "100%",
    paddingTop: 48,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  drawerFonts: {
    fontFamily: "Dm Sans",
    fontSize: 16,
    color: "#0B216E",
    fontWeight: 500,
  },
  bullots: {
    fontFamily: "Dm Sans",
    fontSize: 16,
    color: "#0B216E",
    fontWeight: 500,
    marginTop: 5,
  },
  position: {
    position: "relative",
    top: -30,
  },
  dflex: {
    display: "flex",
    marginTop: 10,
  },
  stay: {
    fontFamily: "Dm Sans",
    fontSize: 16,
    color: "#0B216E",
    fontWeight: 500,

    marginLeft: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
  suppport: {
    fontFamily: "Dm Sans",
    fontSize: 16,
    color: "#0B216E",
    fontWeight: 500,
    marginLeft: 10,
  },
  footerfonts: {
    fontFamily: "Dm Sans",
    fontSize: 17,
    color: "#000000",
    fontWeight: 400,
    lineHeight: "17px",
    [theme.breakpoints.down("xs")]: {
      fontSize: 8,
    },
  },
  flexCenter: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
});

function MobileFooter(props) {
  const { classes, styling } = props;
  return (
    <Hidden lgUp>
      <div className={classes.root}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={10} md={5}>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Stay Connected
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://www.youtube.com/embed/G33UR87I81E"
                    target="_blank"
                  >
                    <Box className={classes.dflex}>
                      <img src={yt} className={classes.image} alt="logo" />
                      <Box className={classes.stay}>Private Identity</Box>
                    </Box>
                  </a>
                  <a
                    style={{ textDecoration: "none" }}
                    href="tel:+1 (800) 123-4567"
                  >
                    <Box className={classes.dflex}>
                      <img src={phn} className={classes.image} alt="logo" />
                      <Box className={classes.stay}> +1-301-938-6300</Box>
                    </Box>
                  </a>
                  <a
                    style={{ textDecoration: "none" }}
                    href="mailto:support@private.id"
                  >
                    <Box className={classes.dflex}>
                      <img src={en} className={classes.image} alt="logo" />
                      <Box className={classes.stay}>Email Us</Box>
                    </Box>
                  </a>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xs={10} md={5}>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Support</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <a
                    href="https://stackoverflow.com/questions/tagged/privateid?tab=Newest"
                    target="_blank "
                    style={{ textDecoration: "none" }}
                  >
                    <Box className={classes.dflex}>
                      <img src={stack} className={classes.image} alt="logo" />
                      <Box className={classes.suppport}>Stack Overflow</Box>
                    </Box>
                  </a>
                  <a
                    href="https://github.com/openinfer/PrivateIdentity/issues"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Box className={classes.dflex}>
                      <img src={tracker} className={classes.image} alt="logo" />
                      <Box className={classes.suppport}>Issue Tracker</Box>
                    </Box>
                  </a>
                  <Box className={classes.dflex}>
                    <img src={api} className={classes.image} alt="logo" />
                    <Box className={classes.suppport}>API Documentation</Box>
                  </Box>
                  <Box className={classes.dflex}>
                    <img src={patent} className={classes.image} alt="logo" />
                    <Box className={classes.suppport}>
                      {" "}
                      Intellectual Property/Patents
                    </Box>
                  </Box>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
      </div>
      <Box className={styling.line}></Box>
      <Box className={classes.flexCenter}>
        <Box className={classes.footerfonts}>
          © 2021 Private Identity LLC All Rights Reserved.
        </Box>
        <Box className={classes.footerfonts}>
          Private ID and Private Identity are registered trademarks of Private
          Identity LLC.
        </Box>
        <Box className={classes.footerfonts}>
          All other trademarks, service marks, trade names, trade dress, product
          names and logos are the property of their respective owners.
        </Box>
      </Box>
    </Hidden>
  );
}

MobileFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MobileFooter);
