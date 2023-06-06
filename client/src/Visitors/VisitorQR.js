import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QRCode from "react-qr-code";
import axios from "axios";

export default function VisitorQR() {
  let [data, setData] = useState({});
  let email = localStorage.getItem("UserEmail");
  var storedObject = JSON.parse(email);

  let lt = async () => {
    const dta = await axios.get(
      `http://localhost:8080/user/${storedObject.userEmail}`
    );
    console.log("hello");
    let d = JSON.stringify(dta.data);
    setData(d);
  };
  useEffect(() => {
    lt();
  });

  return (
    <Container>
      <div className="qrCode">
        <QRCode className="code" value={`${data}`} bgColor="red" />
        <h3>Note: No details are being shared with others.</h3>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  color: white;
  background-color: black;
  justify-content: center;
  align-items: center;
  .qrCode {
    width: 300px;
    height: 300px;
    color: white;
    text-align: center;
    border-radius: 0.4rem;
    background-color: white;
    .code {
      width: 100%;
      height: 100%;
      border: 7px solid white;
      border-radius: 0.4rem;
    }
  }
`;
