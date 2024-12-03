import React from "react";
import styles from "./styles/avatar.module.css";

const Avatart = () => {
  return (
    <>
      <div className={styles.avatarContainer}>
        <div className={styles.icon}>
          <img src="/images/avatar/avatar.jpg" alt="avatar" />
        </div>
      </div>
    </>
  );
};

export default Avatart;
