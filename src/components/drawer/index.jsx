import { Drawer, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React, { useState } from "react";
import DrawerList from "./drawerList";

export const MenuDrawer = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <IconButton onClick={() => setOpen(!open)}>
        <Menu style={{ color: "white" }} />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(!open)}>
        <DrawerList onClose={() => setOpen(false)} />
      </Drawer>
    </React.Fragment>
  );
};
