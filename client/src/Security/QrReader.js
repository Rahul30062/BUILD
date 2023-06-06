import React, { useState } from "react";
// import styled from "styled-components";

export default function QrReader() {
  const [scannedData, setScannedData] = useState("No Result");
  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };
  return (
    <div>
      <QrReader
        onScan={(data) => {
          handleScan(data);
        }}
      />
      {scannedData}
    </div>
  );
}
