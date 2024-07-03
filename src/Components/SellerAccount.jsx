import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs-react";

function SellerAccount() {
  const [seller, setSeller] = useState({});

  function checkLoggedIn() {
    const send = async () => {
      try {
        const request = await axios.post(
          "http://localhost:3000/api/seller/token",
          {
            token: localStorage.getItem("sellerToken"),
          }
        );
      } catch (err) {
        localStorage.removeItem("sellerToken");
        window.location.href = "http://localhost:5173/seller/login";
      }
    };
    send();
  }

  function getInfo() {
    const send = async () => {
      try {
        const request = await axios.post(
          "http://localhost:3000/api/sellerInfo",
          {
            token: localStorage.getItem("sellerToken"),
          }
        );
        setSeller(request.data);
      } catch (err) {
        localStorage.removeItem("sellerToken");
        window.location.href = "http://localhost:5173/seller/login";
      }
    };
    send();
  }

  function updateInfo(
    name = seller.name,
    email = seller.email,
    mobile = seller.mobile
  ) {
    const update = async () => {
      try {
        const request = await axios.patch(
          "http://localhost:3000/api/sellerInfo",
          {
            token: localStorage.getItem("sellerToken"),
            newName: name,
            newEmail: email,
            newMobile: mobile,
          }
        );
      } catch (err) {}
    };
    update();
  }

  function encryptPassword(newPassword) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newPassword, salt);

    return hash;
  }
  function updatePassword(currentPass, newPass) {
    const update = async () => {
      try {
        const encryptedPassword = await encryptPassword(newPass);

        const request = await axios.patch(
          "http://localhost:3000/api/sellerPasswordChange",
          {
            token: localStorage.getItem("sellerToken"),
            currentPassword: currentPass,
            newPassword: encryptedPassword,
          }
        );
      } catch (err) {}
    };
    update();
  }

  const [navigate, setNavigate] = useState({
    toNameChange: false,
    toPhoneChange: false,
    toEmailChange: false,
    toPassChange: false,
    mainBox: true,
  });
  const [errors, setErros] = useState({});
  const [fields, setFields] = useState({
    nameChange: "",
    emailChange: "",
    phoneChange: "",
    currentPassChange: "",
    newPassChange: "",
    rePassChange: "",
  });
  // Handeling Navigation Starts
  const handleNavigation = (e) => {
    setNavigate({ ...navigate, [e.target.name]: true, mainBox: false });
  };
  const handleReverseNavigation = (e) => {
    setFields({
      nameChange: "",
      emailChange: "",
      phoneChange: "",
      currentPassChange: "",
      newPassChange: "",
      rePassChange: "",
    });
    setErros({});
    setNavigate({ ...navigate, [e.target.name]: false, mainBox: true });
  };
  // Handeling Navigation Ends
  //Handeling Fields Change Start
  const handleChange = (e) => {
    if (errors) {
      if (
        e.target.name === "nameChange" ||
        e.target.name === "phoneChange" ||
        e.target.name === "emailChange"
      ) {
        setErros({});
      } else {
        if (e.target.name === "currentPassChange") {
          setErros({ ...errors, currentPassError: "" });
        } else if (e.target.name === "newPassChange") {
          setErros({ ...errors, newPassError: "" });
        } else if (e.target.name === "rePassChange") {
          setErros({ ...errors, rePassError: "" });
        }
      }
    }
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  // Handeling Fields Change Ends
  //setting box info
  // console.log(buyer);
  const settingBoxInfo = [
    {
      title: "Name",
      buttonText: "Edit",
      message: seller.name,
      eName: "toNameChange",
    },
    {
      title: "Email",
      buttonText: "Edit",
      message: seller.email,
      eName: "toEmailChange",
    },
    {
      title: "Primary mobile number",
      buttonText: "Add",
      message: seller.mobile,
      eName: "toPhoneChange",
    },
    { title: "Password", buttonText: "Edit", eName: "toPassChange" },
  ];
  //Handeling Submitting Starts
  const handlePassSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    const passReg =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
    if (fields.currentPassChange === "") {
      errors.currentPassError = "you must provide this field";
    }
    if (fields.newPassChange === "") {
      errors.newPassError = "you must provide this field";
    } else if (!passReg.test(fields.newPassChange)) {
      errors.newPassError = "password is invalid";
    }
    if (fields.rePassChange === "") {
      errors.rePassError = "you must provide this field";
    } else if (fields.rePassChange !== fields.newPassChange) {
      errors.rePassError = "password is not the same as the new one";
    }
    if (Object.keys(errors).length === 0) {
      updatePassword(fields.currentPassChange, fields.newPassChange);
      setNavigate({ ...navigate, toPassChange: false, mainBox: true });
      return;
    }
    setErros(errors);
  };
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    const phoneReg = /\+20\d{11}/;
    if (fields.phoneChange === "") {
      errors.phoneError = "you must provide this field";
    } else if (!phoneReg.test(fields.phoneChange)) {
      errors.phoneError = "invalid phone number";
    }
    if (Object.keys(errors).length === 0) {
      updateInfo(undefined, undefined, fields.phoneChange);
      setNavigate({ ...navigate, toEmailChange: false, mainBox: true });
      return;
    }
    setErros(errors);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    const mailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (fields.emailChange === "") {
      errors.emailError = "you must provide this field";
    } else if (!mailReg.test(fields.emailChange)) {
      errors.emailError = "invalid email";
    }

    updateInfo(undefined, fields.emailChange, undefined);
    setNavigate({ ...navigate, toEmailChange: false, mainBox: true });

    if (Object.keys(errors).length === 0) {
      console.log("the Email successfuly changed!!");
      return;
    }
    setErros(errors);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (fields.nameChange === "") {
      errors.nameError = "you must provide this field";
    }

    updateInfo(fields.nameChange, undefined, undefined);
    setNavigate({ ...navigate, toNameChange: false, mainBox: true });

    if (Object.keys(errors).length === 0) {
      console.log("the Name successfuly changed!!");
      return;
    }
    setErros(errors);
  };
  //Handeling Submitting ends
  return (
    <>
      {checkLoggedIn()}
      {getInfo()}
      {/* Setting Page --------------------------------------------------------------------------- */}
      <div
        className={`ml-auto mr-auto w-[50%] p-[15px] ${
          navigate.mainBox ? "visible" : "hidden"
        }`}
      >
        <h1 className="text-[20px] font-bold mb-[15px]">Login & Security</h1>
        <div className="border-[2px] rounded-[10px] border-solid border-[#ccc]">
          {settingBoxInfo.map((box, index) => {
            return (
              <div
                key={index}
                className="p-[15px] flex items-center justify-between border-[2px] border-solid border-b-[#ccc] border-t-transparent border-l-transparent border-r-transparent"
              >
                <p className="font-bold p-[10px]">
                  {box.title}
                  {box.title !== "Password" ? (
                    <span className="block font-normal text-[13px]">
                      {box.title === "Primary mobile number" &&
                      box.message === "" ? (
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          className="pr-[5px] text-amber-500"
                        />
                      ) : (
                        ""
                      )}
                      {box.title === "Primary mobile number" &&
                      box.message === ""
                        ? "Add your phone number"
                        : box.message}
                    </span>
                  ) : (
                    ""
                  )}
                </p>
                <button
                  onClick={handleNavigation}
                  name={box.eName}
                  className="pt-[5px] pb-[5px] pl-[50px] pr-[50px] rounded-[10px] text-[13px]  bg-[#3e64da] text-[white] "
                >
                  {box.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* Name Change ------------------------------------------------------------------------------ */}
      <div
        className={`ml-auto mr-auto w-[50%] p-[15px] ${
          navigate.toNameChange ? "visible" : "hidden"
        }`}
      >
        <h1 className="text-[20px] font-bold mb-[15px]">Change your name</h1>
        <div className="border-[2px] rounded-[10px] border-solid border-[#ccc]">
          <div className="p-[15px]">
            <p className="text-[14px] mb-[30px]">
              If you want to change the name associated with your Amazon
              customer account, you may do so below Be sure to click the{" "}
              <span className="font-bold">Save Changes</span> button when you
              are done.
            </p>
            <form className="mb-[15px]">
              <label
                htmlFor="Name"
                className="font-bold text-[13px] block mb-[10px]"
              >
                New name
              </label>
              <input
                onChange={handleChange}
                value={fields.nameChange}
                type="text"
                name="nameChange"
                id="Name"
                className={`border-solid ${
                  errors.nameError ? `border-red-500` : `border-[#000]`
                } border-[#000] border-[1px] rounded outline-none text-[13px] p-[5px] `}
              />
              {errors.nameError ? (
                <div className="mt-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faExclamation}
                    className=" text-[14px] mr-3 text-red-500"
                  />
                  <span className=" text-[14px] text-red-500">
                    {errors.nameError}
                  </span>
                </div>
              ) : (
                ""
              )}
            </form>
            <button
              type="submit"
              onClick={handleNameSubmit}
              className="pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-[#3e64da] text-[white] rounded-[8px] text-[13px]  mb-[10px]"
            >
              Save Changes
            </button>
            <button
              onClick={handleReverseNavigation}
              name="toNameChange"
              className="block pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-[#3e64da] text-[white] rounded-[8px] text-[13px]  mb-[10px]"
            >
              Return to settings menu
            </button>
          </div>
        </div>
      </div>
      {/* Email Change------------------------------------------------------------------------------ */}
      <div
        className={`ml-auto mr-auto w-[30%] p-[15px]  ${
          navigate.toEmailChange ? "visible" : "hidden"
        }`}
      >
        <img
          src="/images/logo.svg"
          alt=""
          className="mr-auto ml-auto mb-[15px]"
        />
        <div className="border-[2px] rounded-[10px] border-solid border-[#ccc]">
          <div className="p-[15px]">
            <h1 className="text-[20px] text-center mb-[15px]">
              Add an email address
            </h1>
            <p className="text-[14px] mb-[30px]">
              Enter the new email address you would like to associate with your
              account below.
            </p>
            <form className="mb-[15px]">
              <label
                htmlFor="Name"
                className="font-bold text-[13px] block mb-[5px]"
              >
                New email address
              </label>
              <input
                onChange={handleChange}
                value={fields.emailChange}
                type="email"
                name="emailChange"
                id="Name"
                className={`border-solid ${
                  errors.emailError ? `border-red-500` : `border-[#000]`
                } w-[100%] border-[1px] rounded outline-none text-[13px] p-[5px] `}
              />
              {errors.emailError ? (
                <div className="mt-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faExclamation}
                    className=" text-[14px] mr-3 text-red-500"
                  />
                  <span className=" text-[14px] text-red-500">
                    {errors.emailError}
                  </span>
                </div>
              ) : (
                ""
              )}
            </form>
            <button
              type="submit"
              onClick={handleEmailSubmit}
              className="pt-[5px] pb-[5px] w-[100%] bg-[#3e64da] text-[white] rounded-[8px] text-[13px]  mb-[10px]"
            >
              Continue
            </button>
            <button
              onClick={handleReverseNavigation}
              name="toEmailChange"
              className="pt-[5px] pb-[5px] w-[100%] bg-[#3e64da] text-[white] rounded-[8px] text-[13px]  mb-[10px]"
            >
              Return to settings menu
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Number Change --------------------------------------------------------------------- */}
      <div
        className={`ml-auto mr-auto w-[50%] p-[15px]  ${
          navigate.toPhoneChange ? "visible" : "hidden"
        }`}
      >
        <h1 className="text-[20px] font-bold mb-[15px]">
          Change Mobile Phone Number
        </h1>
        <div className="border-[2px] rounded-[10px] border-solid border-[#ccc]">
          <div className="p-[15px]">
            <form className="mb-[15px]">
              <label
                htmlFor="Name"
                className="font-bold text-[13px] block mb-[5px]"
              >
                Mobile number
              </label>
              <span className="inline-block mr-[20px] font-bold text-[14px]">
                EG +20
              </span>
              <input
                onChange={handleChange}
                value={fields.phoneChange}
                type="text"
                name="phoneChange"
                id="Name"
                className={`border-solid ${
                  errors.phoneError ? `border-red-500` : `border-[#000]`
                } border-[1px] rounded outline-none text-[13px] p-[5px] `}
              />
              {errors.phoneError ? (
                <div className="mt-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faExclamation}
                    className=" text-[14px] mr-3 text-red-500"
                  />
                  <span className=" text-[14px] text-red-500">
                    {errors.phoneError}
                  </span>
                </div>
              ) : (
                ""
              )}
            </form>
            <p></p>
            <button
              type="submit"
              onClick={handlePhoneSubmit}
              className="pt-[5px] pb-[5px] w-[50%] block bg-[#3e64da] text-[white] rounded-[8px] text-[13px]  mb-[10px]"
            >
              Continue
            </button>

            <button
              onClick={handleReverseNavigation}
              name="toPhoneChange"
              className="pt-[5px] pb-[5px] w-[50%] block bg-[#3e64da] text-[white] rounded-[8px] text-[13px]  mb-[5px]"
            >
              Return to setting menu
            </button>
          </div>
        </div>
      </div>
      {/* Password Change--------------------------------------------------------------------------- */}
      <div
        className={`ml-auto mr-auto w-[50%] p-[15px]  ${
          navigate.toPassChange ? "visible" : "hidden"
        }`}
      >
        <h1 className="text-[20px] font-bold mb-[15px]">Change Password</h1>
        <div className="border-[2px] rounded-[10px] border-solid border-[#ccc]">
          <div className="p-[15px]">
            <p className="text-[14px] mb-[30px]">
              Use the form below to change the password for your Amazon account
            </p>
            <form className="mb-[30px]">
              <label
                htmlFor="Name"
                className="font-bold text-[13px] block mb-[5px]"
              >
                Current password:
              </label>
              <input
                onChange={handleChange}
                value={fields.currentPassChange}
                type="password"
                name="currentPassChange"
                id="Name"
                className={`border-solid ${
                  errors.currentPassError ? `border-red-500` : `border-[#000]`
                }  border-[1px] rounded outline-none text-[13px] p-[5px] `}
              />
              {errors.currentPassError ? (
                <div className="mt-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faExclamation}
                    className=" text-[14px] mr-3 text-red-500"
                  />
                  <span className=" text-[14px] text-red-500">
                    {errors.currentPassError}
                  </span>
                </div>
              ) : (
                ""
              )}
            </form>
            <form className="mb-[30px]">
              <label
                htmlFor="Name"
                className="font-bold text-[13px] block mb-[5px]"
              >
                New password:
              </label>
              <input
                onChange={handleChange}
                value={fields.newPassChange}
                type="password"
                name="newPassChange"
                id="Name"
                className={`border-solid ${
                  errors.newPassError ? `border-red-500` : `border-[#000]`
                }   border-[1px] rounded outline-none text-[13px] p-[5px] `}
              />
              {errors.newPassError ? (
                <div className="mt-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faExclamation}
                    className=" text-[14px] mr-3 text-red-500"
                  />
                  <span className=" text-[14px] text-red-500">
                    {errors.newPassError}
                  </span>
                </div>
              ) : (
                ""
              )}
            </form>
            <form className="mb-[15px]">
              <label
                htmlFor="Name"
                className="font-bold text-[13px] block mb-[5px]"
              >
                Reenter new password:
              </label>
              <input
                onChange={handleChange}
                value={fields.rePassChange}
                type="password"
                name="rePassChange"
                id="Name"
                className={`border-solid ${
                  errors.rePassError ? `border-red-500` : `border-[#000]`
                }   border-[1px] rounded outline-none text-[13px] p-[5px] `}
              />
              {errors.rePassError ? (
                <div className="mt-1 flex items-center">
                  <FontAwesomeIcon
                    icon={faExclamation}
                    className=" text-[14px] mr-3 text-red-500"
                  />
                  <span className=" text-[14px] text-red-500">
                    {errors.rePassError}
                  </span>
                </div>
              ) : (
                ""
              )}
            </form>
            <button
              type="submit"
              onClick={handlePassSubmit}
              className="pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-[#3e64da] text-[white] rounded-[8px] text-[13px]  mb-[10px]"
            >
              Save Changes
            </button>
            <button
              onClick={handleReverseNavigation}
              name="toPassChange"
              className="block pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-[#3e64da] text-[white] rounded-[8px] text-[13px]  mb-[10px]"
            >
              Return to setting menu
            </button>

            <p className="font-bold text-[14px] mb-[10px]">
              Lost or stolen device? Unusual activity
              <span className="block font-normal">
                <span className="text-blue-600">Secure your account</span>{" "}
                instead
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default SellerAccount;