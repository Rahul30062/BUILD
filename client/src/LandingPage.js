import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Building from "./Visitors/images/building.jpg";
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1 className="header">GateSecure.io</h1>
      <div className="section">
        <div className="content">
          <h1>
            Secure your Resident by <span className="fraud">Frauds</span>.
          </h1>
          <div className="buttons">
            <div className="bt">
              <button className="visitor" onClick={() => navigate("/visitor")}>
                Visitor
              </button>
            </div>
            <div className="bt">
              <button
                className="security"
                onClick={() => navigate("/security")}
              >
                Security
              </button>
            </div>
          </div>
        </div>
        <img src={Building} alt="" className="building" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  .header {
    color: white;
  }
  .section {
    width: 333px;
    height: 500px;
    padding: 1.2rem;
    border-radius: 0.8rem;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    align-items: center;
    background-color: white;
    .content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .fraud {
        color: red;
        text-decoration: underline;
      }
      .buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;

        button {
          padding: 0.8rem;
          font-size: 1.2rem;
          color: red;
          font-weight: bolder;
          border: none;
          /* border-radius: 0.3rem; */
          background-color: white;
          &:hover {
            transition: 0.1s ease-in-out;
            border-bottom: 3px solid black;
          }
        }
      }
    }
    .eye {
      font-size: 5.5rem;
    }
    .building {
      width: 100%;
      height: 250px;
    }
  }
`;
