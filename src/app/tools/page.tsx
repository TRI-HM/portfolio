import Link from "next/link";
import React from "react";

const Tools = () => {
  return (
    <div>
      <h1>Tools</h1>
      <h2>
        <Link href="/tools/generateQrCode">Generate QR Code</Link>
      </h2>
    </div>
  );
};

export default Tools;
