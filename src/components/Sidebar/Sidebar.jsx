import React from "react";
import Menu from "./Menu/Menu";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.container}>
      <Menu />
    </div>
  );
}

export default Sidebar;
