"use client";
import * as XLSX from "xlsx";

interface ExcelRow {
  [key: string]: string | number;
}

export function readExcelToJSON(file: File) {
  return new Promise<ExcelRow[]>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const arrayBuffer = e.target?.result;
      if (!arrayBuffer) return;

      // Parse the file content
      const data = new Uint8Array(arrayBuffer as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0]; // Read the first sheet
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json<ExcelRow>(sheet); // Convert to JSON

      resolve(sheetData);
    };

    reader.onerror = (e) => {
      reject(e);
    };

    reader.readAsArrayBuffer(file); // Read as ArrayBuffer
  });
}