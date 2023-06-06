import React, { useState } from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { MdFingerprint } from "react-icons/md";
import { BiMaleFemale } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export default function VisitorRegister() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(0);
  const [password, showPassword] = useState("password");
  const [confirmVisible, setconfirmVisible] = useState(0);
  const [confirmPassword, showConfirmPassword] = useState("password");
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    password: "",
    confirmPassword: "",
  });
  const showToastMessage = () => {
    toast.success(`${userDetails.firstName} Registered Successfully`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  const setVisibility = () => {
    visible ? setVisible(0) : setVisible(1);
    visible ? showPassword("password") : showPassword("text");
  };

  const setPasswordVisible = () => {
    confirmVisible ? setconfirmVisible(0) : setconfirmVisible(1);
    confirmVisible
      ? showConfirmPassword("password")
      : showConfirmPassword("text");
  };

  const handleInput = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(e);
  };

  const postData = async (e) => {
    const res = await axios
      .post("http://localhost:8080/visitor/register", {
        userDetails,
      })
      .then((resp) => {
        if (resp.status === 201) {
          console.log("right");
          setTimeout(() => {
            navigate("/visitor/login");
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
      <form
        className="form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="data">
          <div className="name">
            <div className="firstName">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                onChange={(e) => {
                  handleInput(e);
                }}
              />
            </div>
            <div className="lastName">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                onChange={(e) => {
                  handleInput(e);
                }}
              />
            </div>
          </div>
          <div className="email">
            <MdAlternateEmail />
            <input
              type="email"
              id="userEmail"
              placeholder="Enter your email"
              name="userEmail"
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </div>
          <div className="password">
            <MdFingerprint />
            <input
              type={password}
              id="password"
              placeholder="Enter your password"
              name="password"
              onChange={(e) => {
                handleInput(e);
              }}
            />
            {visible ? (
              <AiFillEye onClick={setVisibility} />
            ) : (
              <AiFillEyeInvisible onClick={setVisibility} />
            )}
          </div>
          <div className="confirmPassword">
            <MdFingerprint />

            <input
              type={confirmPassword}
              id="confirmPassword"
              placeholder="Confirm your password"
              name="confirmPassword"
              onChange={(e) => {
                handleInput(e);
              }}
            />
            {confirmVisible ? (
              <AiFillEye onClick={setPasswordVisible} />
            ) : (
              <AiFillEyeInvisible onClick={setPasswordVisible} />
            )}
          </div>
          <div className="sex">
            <BiMaleFemale />
            <input type="radio" id="male" name="sex" value="Male" />
            <label for="male">Male |</label>
            <input type="radio" id="female" name="sex" value="Female" />
            <label for="female">Female |</label>
            <input type="radio" id="others" name="sex" value="Others" />
            <label for="others">Others</label>
          </div>
        </div>
        <div className="button">
          <input type="submit" className="submit" value="Register" />
        </div>
      </form>
      <ToastContainer autoClose={2000} />
    </Container>
  );
}

const Container = styled.div`
  color: black;
  .form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .data {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .name {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 1.2rem;
        .firstName {
          width: 50%;
          border-bottom: 2px solid black;
          border-radius: 0.3rem;
          input {
            width: calc(100% - 0.6rem);
            font-size: 1.2rem;
            padding: 0.3rem;
            outline: none;
            color: red;
            border: none;
          }
        }
        .lastName {
          width: calc(50% + 0.3rem);
          border-bottom: 2px solid black;
          border-radius: 0.3rem;
          input {
            width: calc(100% - 0.6rem);
            font-size: 1.2rem;
            padding: 0.3rem;
            outline: none;
            border: none;
            color: red;
          }
        }
      }
      .email {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.3rem;
        border-bottom: 2px solid black;
        border-radius: 0.3rem;
        input {
          width: 100%;
          font-size: 1.2rem;
          padding: 0.3rem;
          outline: none;
          color: red;

          border: none;
        }
        svg {
          font-size: 1.5rem;
        }
      }

      .password {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 0.3rem;
        align-items: center;
        border-bottom: 2px solid black;
        border-radius: 0.3rem;
        svg {
          font-size: 1.5rem;
        }
        input {
          width: 100%;
          font-size: 1.2rem;
          padding: 0.3rem;
          outline: none;
          color: red;

          border: none;
        }
      }
      .confirmPassword {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 0.3rem;
        align-items: center;
        border-bottom: 2px solid black;
        border-radius: 0.3rem;
        svg {
          font-size: 1.5rem;
        }
        input {
          width: 100%;
          font-size: 1.2rem;
          padding: 0.3rem;
          outline: none;
          color: red;

          border: none;
        }
      }
      .sex {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 0.4rem;
        padding: 0.2rem 0;
        align-items: center;
        border-bottom: 2px solid black;
        border-radius: 0.3rem;

        svg {
          font-size: 1.2rem;
        }
      }
    }
    .submit {
      width: 100%;
      padding: 0.7rem;
      background-color: red;
      color: white;
      border: none;
      font-size: 1.2rem;
      border-radius: 0.3rem;
    }
  }
`;
