import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  font: {
    fontFamily: "Dm Sans",
    fontSize: 18,
    color: "#000000",
    fontWeight: 700,
  },
}));

export default function DrawerList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState([false, false, false]);

  const handleClick = (id) => {
    let newVal = [...open];
    newVal[id] = !newVal[id];
    setOpen([...newVal]);
  };

  return (
    <ul>
      <li>
        <Link href to="/about" style={{ textDecoration: "none" }}>
          <ListItem button onClick={() => handleClick(0)}>
            <ListItemText
              style={{
                fontFamily: "Dm Sans",
                fontSize: 18,
                color: "#000000",
                fontWeight: 700,
              }}
              primary="About Us"
            />
          </ListItem>
        </Link>
      </li>
      <li>
        <ListItem button onClick={() => handleClick(1)}>
          <ListItemText className={classes.font} primary="Github" />
        </ListItem>
      </li>
    </ul>
  );
}
