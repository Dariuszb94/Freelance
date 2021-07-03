import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./Menu.scss";
import Overlay from "./MenuComponents/Overlay";
const Menu = () => {
  const [menuShow, menuShowSet] = useState(false);
  const [menuShowDebounce, menuShowDebounceSet] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      menuShowDebounceSet(menuShow);
    }, 300);
    return () => clearTimeout(timer);
  }, [menuShow]);
  return (
    <section>
      <MenuIcon
        className="menu-icon"
        onClick={() => menuShowSet((prev) => !prev)}
      />
      {menuShowDebounce ? (
        <Overlay menuShow={menuShow} menuShowSet={menuShowSet} />
      ) : null}
    </section>
  );
};
export default Menu;
