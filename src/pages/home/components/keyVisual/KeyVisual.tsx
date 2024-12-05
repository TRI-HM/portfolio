import React from "react";
import styles from "./keyVisual.module.css";
import Image from "next/image";

const KeyVisual = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/kv/kv.jpg"
        alt="Key Visual"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default KeyVisual;
