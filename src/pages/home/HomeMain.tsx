import React from "react";
import styles from "./home.module.css";
import KeyVisual from "./components/KeyVisual";

const HomeMain = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* KV start*/}
        <KeyVisual />
        {/* KV end */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quaerat
          omnis dignissimos sed dolorem odio perferendis rem est, veniam
          architecto?
        </p>
      </div>
    </div>
  );
};

export default HomeMain;
