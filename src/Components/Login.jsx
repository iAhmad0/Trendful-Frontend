import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { AiOutlineEye, AiFillEyeInvisible } from 'react-icons/ai'

// Login Component
function Login() {
  const [fields, setFields] = useState({
    logEmail: '',
    logPass: '',
  })

  const [Erros, setErros] = useState({})
  const [visible, setVisible] = useState(false)

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
    if (Erros) {
      if (e.target.name === 'logEmail') {
        setErros({ ...Erros, logEmailError: '' })
      } else if (e.target.name === 'logPass') {
        setErros({ ...Erros, logPassError: '' })
      }
    }
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    const errors = {}
    if (!fields.logEmail) {
      errors.logEmailError = 'Email is required'
    }
    if (!fields.logPass) {
      errors.logPassError = 'Password is required'
    }

    setErros(errors)

    if (Object.keys(errors).length === 0) {
      try {
        const request = await axios.post('http://localhost:3000/login', {
          email: fields.logEmail,
          password: fields.logPass,
        })
        if (request) {
          localStorage.setItem('token', request.data.token)
          localStorage.setItem('cartItems', JSON.stringify([]))
          localStorage.setItem('cartCounter', 0)
          localStorage.setItem('itemsQuantities', JSON.stringify([]))
          localStorage.setItem('toBuyItem', '')
          window.location.href = 'http://localhost:5173/'
        }
      } catch (error) {
        setErros({
          ...Erros,
          logEmailError: '',
          logPassError: 'Invalid email or password.',
        })
      }
    }
  }

  return (
    <div className="container w-[90%] sm:w-96 mr-auto ml-auto">
      <form
        className="sign-form rounded-md border-solid border-[#e1e1e1] border w-full p-6 mb-4"
        onSubmit={handleLoginSubmit}
      >
        <h2 className="text-left mb-2 text-3xl font-normal">Sign in</h2>
        <div className="field-container mb-5">
          <label
            htmlFor="email"
            className="text-left block mb-1 font-bold text-[13px]	"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            name="logEmail"
            value={fields.logEmail}
            id="email"
            type="text"
            className={`outline-none block border-solid ${
              Erros.logEmailError ? `border-red-500` : `border-[#b5b5b5]`
            }	border rounded w-full	h-8 pl-1.5 field-shadow`}
          />
          {Erros.logEmailError ? (
            <div className="mt-1 flex items-center">
              <FontAwesomeIcon
                icon={faExclamation}
                className="mr-3 text-red-500"
              />
              <span className="text-[13px] text-red-500">
                {Erros.logEmailError}
              </span>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="field-container mb-5 relative">
          <div className="flex justify-between mb-1">
            <label htmlFor="password" className="font-bold text-[13px]	">
              Password
            </label>
          </div>
          <input
            onChange={handleChange}
            id="password"
            type="password"
            name="logPass"
            value={fields.logPass}
            className={`outline-none block border-solid ${
              Erros.logPassError ? `border-red-500` : `border-[#b5b5b5]`
            }	border rounded w-full	h-8 pl-1.5 field-shadow`}
          />

          {visible ? (
            <AiOutlineEye
              className="absolute top-[32px] right-[10px] cursor-pointer"
              onClick={() => {
                setVisible(!visible)
                document
                  .getElementById('password')
                  .setAttribute('type', 'password')
              }}
            />
          ) : (
            <AiFillEyeInvisible
              className="absolute top-[32px] right-[10px] cursor-pointer"
              onClick={() => {
                setVisible(!visible)
                document.getElementById('password').setAttribute('type', 'text')
              }}
            />
          )}
          {Erros.logPassError ? (
            <div className="mt-3 flex items-center">
              <FontAwesomeIcon
                icon={faExclamation}
                className="mr-3 text-red-500"
              />
              <span className=" text-red-600 text-[13px]">
                {Erros.logPassError}
              </span>
            </div>
          ) : (
            ''
          )}
        </div>
        <button className="block mt-5 w-full bg-[#3E64DA] text-[white] p-2 rounded-lg text-[13px]">
          Sign in
        </button>
      </form>
    </div>
  )
}
export default Login
