"use client";

import React, { SetStateAction, useState } from "react";
import { readExcelToJSON } from "../functions/readExcelToJSON";

export interface IExcelRow {
  [key: string]: string | number;
}

const ExcelReader: React.FC<{
  setData: React.Dispatch<SetStateAction<IExcelRow[]>>;
}> = ({ setData }) => {
  const [data2, setData2] = useState<IExcelRow[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    readExcelToJSON(file)
      .then((sheetData) => {
        setData2(sheetData);
        setData(sheetData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Excel Reader</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <table>
        <thead>
          <tr>
            {data2.length > 0 &&
              Object.keys(data2[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {data2.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExcelReader;
