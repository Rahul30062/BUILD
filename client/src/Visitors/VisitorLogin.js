import React, { useState } from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { MdFingerprint } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function VisitorLogin() {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    userEmail: "",
    password: "",
  });
  const showToastMessage = () => {
    toast.success(`Welcome Back`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  var jsonString = JSON.stringify(loginDetails);

  localStorage.setItem("UserEmail", jsonString);

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData(e);
  };
  const postData = async (e) => {
    const res = await axios
      .post("http://localhost:8080/visitor/login", {
        loginDetails,
      })
      .then((resp) => {
        if (resp.status === 200) {
          console.log("right");
          setTimeout(() => {
            navigate("/main/myQR");
          }, 2000);
          showToastMessage();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="data">
          <div className="email">
            <MdAlternateEmail />
            <input
              type="email"
              id=""
              name="userEmail"
              placeholder="Enter your email"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="password">
            <MdFingerprint />
            <input
              type="password"
              id=""
              name="password"
              placeholder="Enter your Password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <input type="submit" value="Login" className="submit" />
        </div>
        <div className="notRegistered">
          <h3>
            Not Registered?
            <span> </span>
            <Link to="/visitor/register">Signup</Link>
          </h3>
        </div>
      </form>
      <ToastContainer autoClose={2000} />
    </Container>
  );
}

const Container = styled.div`
  width: calc(300px - 1.6rem);
  height: calc(400px - 20px);
  color: black;
  .form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    input {
      color: red;
    }
    .data {
      display: flex;
      flex-direction: column;
      gap: 1.3rem;
      .email {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.3rem;
        border-bottom: 2px solid black;
        input {
          width: 100%;
          font-size: 1.2rem;
          padding: 0.3rem;
          outline: none;
          border: none;
        }
        svg {
          font-size: 1.2rem;
        }
      }
      .password {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 0.3rem;
        align-items: center;
        border-bottom: 2px solid black;
        svg {
          font-size: 1.2rem;
        }
        input {
          width: 100%;
          font-size: 1.2rem;
          padding: 0.3rem;
          outline: none;
          border: none;
        }
      }
      .submit {
        padding: 0.7rem;
        background-color: red;
        color: white;
        border: none;
        font-size: 1.2rem;
        border-radius: 0.3rem;
      }
    }
    .notRegistered {
      display: flex;
      flex-direction: row;
      justify-content: center;
      a {
        color: red;
      }
    }
  }
`;
