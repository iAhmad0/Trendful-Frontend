import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function LogAndReg() {
  const [render, setRender] = useState(false);

  function checkLoggedIn() {
    const send = async () => {
      try {
        const request = await axios.post(
          "http://localhost:3000/api/buyer/token",
          {
            token: localStorage.getItem("token"),
          }
        );
        window.location.href = "http://localhost:5173/";
      } catch (err) {
        setRender(true);
      }
    };
    send();
  }

  checkLoggedIn();

  const [fields, setFields] = useState({
    logEmail: "",
    logPass: "",
    regName: "",
    regEmail: "",
    regPass: "",
    rePass: "",
  });

  const emptyFields = {
    logEmail: "",
    logPass: "",
    regName: "",
    regEmail: "",
    regPass: "",
    rePass: "",
  };

  const [check, setCheck] = useState(false);
  const [Erros, setErros] = useState({});
  const [toReg, setToReg] = useState(false);

  const resetFields = () => {
    setFields({ ...emptyFields });
  };

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    if (Erros) {
      if (e.target.name === "logEmail") {
        setErros({ ...Erros, logEmailError: "" });
      } else if (e.target.name === "logPass") {
        setErros({ ...Erros, logPassError: "" });
      } else if (e.target.name === "regEmail") {
        setErros({ ...Erros, regMailError: "" });
      } else if (e.target.name === "regPass") {
        setErros({ ...Erros, regPassError: "" });
      } else if (e.target.name === "regName") {
        setErros({ ...Erros, regNameError: "" });
      } else if (e.target.name === "rePass") {
        setErros({ ...Erros, regRePassError: "" });
      }
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    const handleLogin = async () => {
      try {
        const request = await axios.post("http://localhost:3000/login", {
          email: fields.logEmail,
          password: fields.logPass,
        });
        if (request) {
          localStorage.setItem("token", request.data.token);
          return true;
        }
      } catch (error) {
        setErros({
          ...Erros,
          logEmailError: "",
          logPassError: "Invalid email or password.",
        });
      }
    };

    if (Object.keys(errors).length === 0) {
      const checkLogin = async () => {
        const response = await handleLogin();
        if (response) {
          window.location.href = "http://localhost:5173/";
        }
      };
      checkLogin();
    }
  };

  const handleRegSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    const passReg =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
    const phoneReg = /\+20\d{11}/;
    const mailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!fields.regName) {
      errors.regNameError = "name must be provided!";
    }

    if (!fields.regEmail) {
      errors.regMailError = "Email or Number must be provided!";
    } else if (
      !mailReg.test(fields.regEmail) &&
      !phoneReg.test(fields.regEmail)
    ) {
      errors.regMailError = "invalid email or phone number";
    }
    if (!fields.regPass) {
      errors.regPassError = "password is required";
    } else if (!passReg.test(fields.regPass)) {
      errors.regPassError = "invalid password";
    }
    if (!fields.rePass) {
      errors.regRePassError = "you must re-enter the password";
    } else if (fields.rePass !== fields.regPass) {
      errors.regRePassError = "the password is different";
    }
    const handleSignup = async () => {
      try {
        const request = await axios.post("http://localhost:3000/signup", {
          name: fields.regName,
          email: fields.regEmail,
          password: fields.regPass,
        });
        if (request) {
          localStorage.setItem("token", request.data.token);
          return true;
        }
      } catch (error) {
        setErros({ ...Erros, regMailError: "Email already exists" });
      }
    };
    if (Object.keys(errors).length === 0) {
      const checkSignup = async () => {
        const response = await handleSignup();
        if (response) {
          window.location.href = "http://localhost:5173/";
        }
      };
      checkSignup();
    }
    setErros(errors);
  };

  if (render) {
    return (
      <>
        {/* Login Component */}
        <div className="my-5 mx-auto w-fit">
          <img src="/images/logo-nobg.png" alt="" className="w-[150px]" />
        </div>
        <div
          className={`container w-[90%] sm:w-96 mr-auto ml-auto ${
            toReg ? `hidden` : ""
          } `}
        >
          <form
            className="sign-form  rounded-md	 border-solid	border-form border w-full  p-6 mb-4"
            onSubmit={handleLoginSubmit}
          >
            <h2 className="text-left mb-2 text-3xl font-normal">Sign in</h2>
            <div className="field-container mb-5">
              <label
                htmlFor="email"
                className="text-left block mb-1 font-bold label-font	"
              >
                Email
              </label>
              <input
                onChange={handleChange}
                name="logEmail"
                value={fields.logEmail}
                id="email"
                type="text"
                className={`block border-solid ${
                  Erros.logEmailError ? `border-red-500` : `border-field`
                }	border rounded w-full	h-8 pl-1.5 field-shadow`}
              />
              {/* {Erros.logEmailError ? (
              <div className="mt-1 flex items-center">
                <FontAwesomeIcon
                  icon={faExclamation}
                  className="mr-3 text-red-500"
                />
                <span className="label-font text-red-500">
                  {Erros.logEmailError}
                </span>
              </div>
            ) : (
              ""
            )} */}
            </div>
            <div className="field-container mb-5">
              <div className="flex justify-between mb-1">
                <label htmlFor="password" className="font-bold label-font	">
                  Password
                </label>
                {/* <p className="label-font forget-color forget cursor-pointer">
                  Forgot Your Password?
                </p> */}
              </div>
              <input
                onChange={handleChange}
                id="password"
                type="password"
                name="logPass"
                value={fields.logPass}
                className={`block border-solid ${
                  Erros.logPassError ? `border-red-500` : `border-field`
                }	border rounded w-full	h-8 pl-1.5 field-shadow`}
              />
              {Erros.logPassError ? (
                <div className="mt-3 flex items-center">
                  <FontAwesomeIcon
                    icon={faExclamation}
                    className="mr-3 text-red-500"
                  />
                  <span className=" text-red-600 label-font">
                    {Erros.logPassError}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* <div className="flex items-center">
              <input
                type="checkbox"
                id="keep-s"
                checked={check}
                onChange={(e) => setCheck(e.target.checked)}
              />
              <label htmlFor="keep-s" className="label-font ml-1">
                Keep me signed in
              </label>
            </div> */}
            <button className="block mt-5 w-full bg-[#3E64DA] text-[white] p-2 rounded-lg label-font">
              Sign in
            </button>
          </form>
          <div className="text-center  create-text gray mb-3 label-font">
            New to Trendful?
          </div>
          <button
            type="submit"
            className=" block mb-5 w-full bg-white p-1 rounded-lg label-font border-solid	border-form border create-btn"
            onClick={() => {
              setToReg(true);
              setErros({});
            }}
          >
            Create your Trendful account
          </button>
        </div>
        {/* Register Component */}
        <div
          className={`container  w-[90%] sm:w-96  mr-auto ml-auto ${
            !toReg ? `hidden` : ""
          } `}
        >
          <form
            className="sign-form  rounded-md	 border-solid	border-form border w-full  p-6 mb-6"
            onSubmit={handleRegSubmit}
          >
            <h2 className="text-left mb-2 text-3xl font-normal">
              Create account
            </h2>
            <div className="field-container mb-5">
              <label
                htmlFor="name"
                className="text-left block mb-1 font-bold label-font	"
              >
                Your name
              </label>
              <input
                onChange={handleChange}
                name="regName"
                value={fields.regName}
                id="name"
                type="text"
                className={`block border-solid	${
                  Erros.regNameError ? `border-red-500` : `border-field`
                } border rounded w-full	h-8 pl-1.5 field-shadow placehol"`}
                placeholder="First and last name "
              />
              {Erros.regNameError ? (
                <div className="mt-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faExclamation}
                    className="mr-3 text-red-500"
                  />
                  <span className=" text-red-600 label-font">
                    {Erros.regNameError}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="field-container mb-5">
              <label
                htmlFor="reg-email"
                className="text-left block mb-1 font-bold label-font	"
              >
                Email
              </label>
              <input
                onChange={handleChange}
                name="regEmail"
                value={fields.regEmail}
                id="reg-email"
                type="text"
                className={`block border-solid	${
                  Erros.regMailError ? `border-red-500` : `border-field`
                }
 border rounded w-full	h-8 pl-1.5 field-shadow`}
              />
              {Erros.regMailError ? (
                <div className="mt-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faExclamation}
                    className="mr-3 text-red-500"
                  />
                  <span className=" text-red-600 label-font">
                    {Erros.regMailError}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="field-container mb-5">
              <label htmlFor="reg-password" className="font-bold label-font	">
                Password
              </label>
              <input
                onChange={handleChange}
                name="regPass"
                value={fields.regPass}
                id="reg-password"
                type="password"
                className={`block border-solid	${
                  Erros.regPassError ? `border-red-500` : `border-field`
                } border rounded w-full	h-8 pl-1.5 field-shadow placehol`}
                placeholder="At least 8 characters"
              />
              {Erros.regPassError ? (
                <div className="mt-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faExclamation}
                    className="mr-3 text-red-500"
                  />
                  <span className=" text-red-600 label-font">
                    {Erros.regPassError}
                  </span>
                </div>
              ) : (
                <div className="mt-1 flex items-center">
                  <FontAwesomeIcon icon={faExclamation} className="mr-3" />
                  <span className="label-font">
                    Password must be at least 8 characters
                  </span>
                </div>
              )}
            </div>
            <div className="field-container mb-5">
              <label htmlFor="re-password" className="font-bold label-font	">
                Re-enter Password
              </label>
              <input
                onChange={handleChange}
                name="rePass"
                value={fields.rePass}
                id="re-password"
                type="password"
                className={`block border-solid	${
                  Erros.regRePassError ? `border-red-500` : `border-field`
                }
 border rounded w-full	h-8 pl-1.5 field-shadow`}
              />
              {Erros.regRePassError ? (
                <div className="mt-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faExclamation}
                    className="mr-3 text-red-500"
                  />
                  <span className=" text-red-600 label-font">
                    {Erros.regRePassError}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <button
              type="submit"
              className="block mb-5 w-full bg-[#3E64DA] text-[white] p-2 rounded-lg label-font"
            >
              Continue
            </button>
            <button
              className="block mb-5 w-full bg-[#3E64DA] text-[white] p-2 rounded-lg label-font"
              onClick={(e) => {
                e.preventDefault();
                resetFields();
                setToReg(!toReg);
              }}
            >
              Return to login
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default LogAndReg;
