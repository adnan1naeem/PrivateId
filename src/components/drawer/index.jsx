import { Drawer, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React, { useState } from "react";
import DrawerList from "./drawerList";
import webLogo from "../../assets/webLogo.svg";

export const MenuDrawer = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <IconButton onClick={() => setOpen(!open)}>
        <Menu style={{ color: "white" }} />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(!open)}>
        <img
          src={webLogo}
          alt="logo"
          style={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
            marginBottom: 20,
          }}
        />
        <DrawerList />
      </Drawer>
    </React.Fragment>
  );
};
