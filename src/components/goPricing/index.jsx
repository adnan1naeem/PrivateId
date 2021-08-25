import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Grid, Hidden } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#2A3D80",
    color: theme.palette.common.white,
    fontWeight: 400,
    fontSize: 30,
    fontFamily: "DM Sans",
    [theme.breakpoints.down("lg")]: {
      fontSize: 20,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 8,
    },
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "#EBF3FF",
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("0-1M Requests/Month  ", "$0.0010"),
  createData("1M-10M Requests/Month", "$0.0008"),
  createData("10M-100M Requests/Month", ".$0.0006"),
  createData("Over 100M Requests/Month", "$0.004"),
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      minWidth: 280,
    },
  },
  header: {
    marginTop: 46,
    fontWeight: 500,
    fontSize: 48,
    color: "#0B216E",
    lineHeight: "58px",
    fontFamily: "DM Sans",
    [theme.breakpoints.down("lg")]: {
      marginTop: 1,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      marginTop: "0px",
      lineHeight: "15px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 70,
    },
  },
  detail: {
    fontWeight: 400,
    fontSize: 20,
    width: " 50%",
    textAlign: "center",
    marginBottom: 54,
    color: "#000000",
    fontFamily: "DM Sans",
    marginTop: 14,
    lineHeight: "29px",
    [theme.breakpoints.down("lg")]: {
      width: "78%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      lineHeight: "15px",
    },
  },
  dFlex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  countStyles: {
    fontWeight: 700,
    fontSize: 36,
    backgroundColor: "#66A5FE",
    color: "#FFFFFF",
    fontFamily: "Inter",
    marginTop: 14,
    height: 64,
    width: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 31,
    [theme.breakpoints.down("lg")]: {
      fontSize: 24,
      height: 64,
      width: 64,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 8,
      height: 20,
      width: 20,
    },
  },
  requestItem: {
    fontWeight: 700,
    fontSize: 30,
    color: "#000000",
    fontFamily: "DM Sans",
    lineHeight: "40px",
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: 8,
      lineHeight: "13px",
    },
  },
  headerRadiusLastColumn: {
    borderTopRightRadius: 20,
  },
  headerRadiusFirstColumn: {
    borderTopLeftRadius: 20,
  },
  message: {
    fontWeight: 400,
    fontSize: 18,
    color: "#000000",
    fontFamily: "DM Sans",
    marginLeft: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: 8,
    },
  },
  dot: {
    width: 17,
    height: 17,
    backgroundColor: "#66A5FE",
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      width: 8,
      height: 8,
    },
  },
  dflex: {
    display: "flex",
    alignItems: "center",
    marginTop: 49,
    marginBottom: 49,
    [theme.breakpoints.down("lg")]: {
      marginLeft: 33,
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 14,
      marginTop: 10,
    },
  },
  containerPosition: {
    position: "relative",
    top: -415,
    [theme.breakpoints.only("xs")]: {
      top: -605,
      marginBottom: -305,
    },
    [theme.breakpoints.up("xl")]: {
      top: -210,
    },
  },
}));

export default function GoPricing() {
  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      className={classes.containerPosition}
      elevation={0}
    >
      <Grid container justifyContent="center" id="pricing">
        <Grid xs={10} item lg={9}>
          <Box className={classes.dFlex}>
            <Box className={classes.header}>PAY-AS-YOU-GO PRICING</Box>
          </Box>

          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell className={classes.headerRadiusFirstColumn}>
                  Tier
                </StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>

                <StyledTableCell className={classes.headerRadiusLastColumn}>
                  Each Request
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    <Box className={classes.countStyles}>{i + 1}</Box>
                  </StyledTableCell>
                  <StyledTableCell className={classes.requestItem}>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell className={classes.requestItem} align="left">
                    {row.calories}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <Box className={classes.dflex}>
            <Box className={classes.dot}></Box>
            <Hidden mdDown>
              <Box className={classes.message}>
                There are no upfront costs and no hardware to buy. Click here
                for details.
              </Box>
            </Hidden>
            <Hidden lgUp>
              <Box className={classes.message}>
                There are no upfront costs and no hardware to buy.
              </Box>
            </Hidden>
          </Box>
        </Grid>
      </Grid>
    </TableContainer>
  );
}
