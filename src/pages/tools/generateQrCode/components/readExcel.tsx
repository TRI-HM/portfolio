"use client";

import React, { useState } from "react";
import * as XLSX from "xlsx";

interface ExcelRow {
  [key: string]: string | number;
}

const ExcelReader: React.FC = () => {
  const [data, setData] = useState<ExcelRow[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryStr = e.target?.result;
      if (!binaryStr) return;

      // Parse the file content
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0]; // Read the first sheet
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json<ExcelRow>(sheet); // Convert to JSON

      setData(sheetData); // Store the data
    };

    reader.readAsBinaryString(file); // Read as binary string
  };

  return (
    <div>
      <h1>Excel Reader</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <table>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
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
