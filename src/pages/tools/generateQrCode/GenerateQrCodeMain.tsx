"use client";
import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import styles from "./generateQrCode.module.css";
import ExcelReader, { IExcelRow } from "./components/readExcel";

const GenerateQrCodeMain = () => {
  const [data, setData] = useState<IExcelRow[]>([]);
  // const [id, setId] = useState<string>("");

  // const qrValue = `${window.location.origin}/${id}`;

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1>Generate QrCode</h1>
        <p>Generate QrCode from excel file to list image.</p>
      </div>
      {/* Input excel file */}

      {/* Generate QR */}
      {/* <div>
        <input
          type="text"
          placeholder="Nhập ID ảnh"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <div>{<QRCodeSVG value={qrValue} />}</div>
      </div> */}

      {/* read file  */}
      <ExcelReader setData={setData} />

      <div>
        <h1>QR Code List</h1>
        <div className={styles.qrList}>
          {data.map((item, index) => (
            <div key={index} className={styles.qrItem}>
              <QRCodeSVG value={item.id.toString()} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenerateQrCodeMain;
