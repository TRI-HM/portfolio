"use client";
import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import styles from "./generateQrCode.module.css";

const GenerateQrCodeMain = () => {
  const [id, setId] = useState<string>("");

  const qrValue = `${window.location.origin}/${id}`;

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1>Generate QrCode</h1>
        <p>Generate QrCode from excel file to list image.</p>
      </div>
      {/* Input excel file */}

      {/* Generate QR */}
      <div>
        <input
          type="text"
          placeholder="Nhập ID ảnh"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <div>{<QRCodeSVG value={qrValue} />}</div>
      </div>
    </div>
  );
};

export default GenerateQrCodeMain;
