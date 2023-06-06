import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

export default function VisitorLanding() {
  const [underline, setUnderline] = useState(0);
  const [undeline, setUndeline] = useState(0);

  const change = () => {
    setUnderline(1);
    setUndeline(0);
    console.log(underline);
  };
  const change2 = () => {
    setUndeline(1);
    setUnderline(0);
    console.log(underline);
  };
  return (
    <Container>
      <div className="header">
        <h1>GateSecure.io</h1>
      </div>
      <div className="section">
        <div className="links">
          <Link
            to="/visitor/login"
            onClick={() => {
              change();
            }}
            className={`${underline ? "undeline" : "none"}`}
          >
            Login
          </Link>
          <Link
            onClick={() => {
              change2();
            }}
            to="/visitor/register"
            className={` ${undeline ? "undeline" : "none"}`}
          >
            Register
          </Link>
        </div>
        <Outlet />
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .section {
    width: 300px;
    height: 400px;
    background-color: white;
    padding: 0.8rem;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    .links {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      a {
        color: black;
        font-weight: bolder;
        text-decoration: none;
        font-size: 1.2rem;
      }
      .register {
        border-bottom: 4px solid red;
        border-radius: 0.1rem;
      }
    }
    .undeline {
      border-bottom: 4px solid red;
      border-radius: 0.1rem;
    }
  }
`;
