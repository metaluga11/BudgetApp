import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div>
      <div className={styles.items}>
        <h3>
          <Link to="/ourgarden">Our Garden</Link>
        </h3>
        <div className={styles.content}>
          <div className={styles.item}>
            <Link to="/ourteam">Our Team </Link>
          </div>
          <div className={styles.item}>
          <Link to="/learningprocess">Learning Process </Link>
          </div>
          <div className={styles.item}>
            <Link to="/methodologicalwork">Methodical Work </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
