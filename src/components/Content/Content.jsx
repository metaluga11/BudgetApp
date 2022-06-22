import React from "react";
import { Route, Routes } from "react-router";
import styles from "./Content.module.css";
import Learningprocess from "./Ourgarden/Learningprocess/Learningprocess";
import Methodologicalwork from "./Ourgarden/Methologicalwork/Methodologicalwork";
import Ourgarden from "./Ourgarden/Ourgarden";
import Ourteam from "./Ourgarden/Ourteam/Ourteam";

function Content(props) {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/ourgarden" element={<Ourgarden />} />
        <Route path="/ourteam" element={<Ourteam data={props.data} />} />
        <Route path="/learningprocess" element={<Learningprocess />} />
        <Route path="/methodologicalwork" element={<Methodologicalwork />} />
      </Routes>
    </div>
  );
}

export default Content;
