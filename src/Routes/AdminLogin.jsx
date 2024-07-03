import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { AiOutlineEye, AiFillEyeInvisible } from "react-icons/ai";

// async function checkLoggedIn() {
//   if (localStorage.getItem("token")) {
//     try {
//       const request = await axios.post(
//         "http://localhost:3000/api/admin-logged/token",
//         {
//           token: localStorage.getItem("token"),
//         }
//       );
//       window.location.href = "http://localhost:5173/";
//     } catch (err) {
//       localStorage.removeItem("token");
//     }
//   } else {
//     localStorage.removeItem("token");
//   }
// }

function AdminLogin() {
  const [render, setRender] = useState(true);
  const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   setRender(checkLoggedIn());
  // }, []);

  const [fields, setFields] = useState({
    logEmail: "",
    logPass: "",
  });

  const [Erros, setErros] = useState({});

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    if (Erros) {
      if (e.target.name === "logEmail") {
        setErros({ ...Erros, logEmailError: "" });
      } else if (e.target.name === "logPass") {
        setErros({ ...Erros, logPassError: "" });
      }
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    const handleLogin = async () => {
      try {
        const request = await axios.post("http://localhost:3000/admin-login", {
          email: fields.logEmail,
          password: fields.logPass,
        });
        if (request) {
          console.log(request);
          localStorage.setItem("token", request.token);
        }
        return true;
      } catch (error) {
        console.log(error);
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
          // window.location.href = "http://localhost:5173/admin/products";
        }
      };
      checkLogin();
    }
  };

  if (render) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        {/* Login Component */}
        <div className="my-5">
          <img src="/images/logo-nobg.png" alt="" className="w-[150px]" />
        </div>
        <div className={`w-96 `}>
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
            </div>
            <div className="field-container mb-5 relative">
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

              {visible ? (
                <AiOutlineEye
                  className="absolute top-[32px] right-[10px] cursor-pointer"
                  onClick={() => {
                    setVisible(!visible);
                    document
                      .getElementById("password")
                      .setAttribute("type", "password");
                  }}
                />
              ) : (
                <AiFillEyeInvisible
                  className="absolute top-[32px] right-[10px] cursor-pointer"
                  onClick={() => {
                    setVisible(!visible);
                    document
                      .getElementById("password")
                      .setAttribute("type", "text");
                  }}
                />
              )}
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
            <button className="block mt-5 w-full bg-[#3E64DA] text-[white] p-2 rounded-lg label-font">
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
