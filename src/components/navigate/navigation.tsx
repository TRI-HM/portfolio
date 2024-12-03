import React from "react";
import { NavLinks } from "../navLink";
import styles from "./styles/navigation.module.css";
import Avatart from "./avatart";

const Navigation = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <Avatart />
        <NavLinks />
      </div>
    </>
  );
};

export default Navigation;
