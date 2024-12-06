"use client";
import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import styles from "./generateQrCode.module.css";
import ExcelReader, { IExcelRow } from "./components/readExcel";

const GenerateQrCodeMain = () => {
  const [data, setData] = useState<IExcelRow[]>([]);

  const handleButtonDownload = () => {
    console.log("Download button clicked");
  };

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1>Generate QrCode</h1>
        <p>Generate QrCode from excel file to list image.</p>
      </div>

      {/* Download button */}
      <div className={styles.download}>
        <button onClick={handleButtonDownload}>Download</button>
      </div>

      {/* read file  */}
      <ExcelReader setData={setData} />

      {/* Show data */}
      <div className={styles.showQrCode}>
        <h1>QR Code List</h1>
        <div className={styles.qrList}>
          {data.map((item, index) => (
            <div
              id={item.name.toString()}
              key={index}
              className={styles.qrItem}>
              <QRCodeSVG value={item.name.toString()} size={200} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenerateQrCodeMain;
