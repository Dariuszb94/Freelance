import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./Menu.scss";
const Menu = () => {
  const [menuShow, menuShowSet] = useState(false);

  return (
    <section>
      <MenuIcon className="menu-icon" onClick={menuShowSet()} />
    </section>
  );
};
export default Menu;
