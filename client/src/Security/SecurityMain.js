import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiBars2 } from "react-icons/hi2";
export default function SecurityMain() {
  const [dropDown, setDropDown] = useState(0);
  const show = () => {
    dropDown ? setDropDown(0) : setDropDown(1);
    console.log(dropDown);
  };
  const logout = () => {
    localStorage.removeItem("userEmail");
  };
  return (
    <Conatiner>
      <div className="header">
        <div className="logo">LOGO</div>
        <div className="links">
          <Link to="/security/userDetails" className="history">
            Visitors
          </Link>
          <Link to="/security/QrReader" className="qrcode">
            Scan
          </Link>
        </div>
        <div className="dropDown">
          <HiBars2
            className="bars"
            onClick={(e) => {
              show(e);
            }}
          />
          <div className={`dropDownMenu ${dropDown ? "" : "hide"}`}>
            <ul>
              <li>
                <Link>Profile</Link>
              </li>
              <li>
                <Link>Setting</Link>
              </li>
              <li onClick={logout}>
                <Link to="#">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section">
        <Outlet />
      </div>
      <div className="footer">
        <h1>GateSecure.io</h1>
      </div>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  .header {
    height: 10%;
    width: 100vw;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: red;
    .links {
      display: flex;
      flex-direction: row;
      gap: 10rem;
      width: fit-content;
      a {
        height: fit-content;
        text-decoration: none;
        color: white;
        padding: 0.2rem;
        font-size: 1.2rem;
        font-weight: bolder;
      }
      .history {
        transition: 0.1s ease-in-out;
        &:hover {
          border-bottom: 4px solid white;
        }
      }
      .qrcode {
        transition: 0.1s ease-in-out;
        &:hover {
          border-bottom: 4px solid white;
        }
      }
    }
    svg {
      font-size: 1.5rem;
    }
    .dropDown {
      height: fit-content;
      width: 90px;
      .bars {
        cursor: pointer;
      }
      .dropDownMenu {
        text-align: center;
        width: 100%;
        padding: 0.6rem;
        border-radius: 0.2rem;
        background-color: white;
        li {
          list-style-type: none;
          padding: 0.3rem;
          font-weight: bolder;
          a {
            color: black;
            text-decoration: none;
          }
        }
      }
      .hide {
        display: none;
      }
    }
  }
  .section {
    height: 80%;
    width: 100vw;
  }
  .footer {
    height: 10%;
    width: 100vw;
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
