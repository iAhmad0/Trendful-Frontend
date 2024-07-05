import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { setGlobalState } from '../globalStates'

function Register() {
  const [fields, setFields] = useState({
    regName: '',
    regEmail: '',
    regPass: '',
    rePass: '',
  })

  const [Erros, setErros] = useState({})

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
    if (Erros) {
      if (e.target.name === 'regEmail') {
        setErros({ ...Erros, regMailError: '' })
      } else if (e.target.name === 'regPass') {
        setErros({ ...Erros, regPassError: '' })
      } else if (e.target.name === 'regName') {
        setErros({ ...Erros, regNameError: '' })
      } else if (e.target.name === 'rePass') {
        setErros({ ...Erros, regRePassError: '' })
      }
    }
  }

  const handleRegSubmit = async (e) => {
    e.preventDefault()
    const errors = {}
    const passReg =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/
    const phoneReg = /\+20\d{11}/
    const mailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!fields.regName) {
      errors.regNameError = 'name must be provided!'
    }

    if (!fields.regEmail) {
      errors.regMailError = 'Email or Number must be provided!'
    } else if (
      !mailReg.test(fields.regEmail) &&
      !phoneReg.test(fields.regEmail)
    ) {
      errors.regMailError = 'invalid email or phone number'
    }
    if (!fields.regPass) {
      errors.regPassError = 'password is required'
    } else if (!passReg.test(fields.regPass)) {
      errors.regPassError = 'invalid password'
    }
    if (!fields.rePass) {
      errors.regRePassError = 'you must re-enter the password'
    } else if (fields.rePass !== fields.regPass) {
      errors.regRePassError = 'the password is different'
    }

    setErros(errors)

    if (Object.keys(errors).length === 0) {
      try {
        const request = await axios.post('http://localhost:3000/signup', {
          name: fields.regName,
          email: fields.regEmail,
          password: fields.regPass,
        })
        if (request) {
          localStorage.setItem('token', request.data.token)
          localStorage.setItem('cartItems', JSON.stringify([]))
          localStorage.setItem('cartCounter', 0)
          localStorage.setItem('itemsQuantities', JSON.stringify([]))
          window.location.href = 'http://localhost:5173/'
        }
      } catch (error) {
        setErros({ ...Erros, regMailError: 'response error' })
      }
    }
  }

  return (
    <div className="container w-[90%] sm:w-96 mr-auto ml-auto">
      <form
        className="sign-form rounded-md border-solid border-[#e1e1e1] border w-full p-6 mb-6"
        onSubmit={handleRegSubmit}
      >
        <h2 className="text-left mb-2 text-3xl font-normal">Create account</h2>
        <div className="field-container mb-5">
          <label
            htmlFor="name"
            className="text-left block mb-1 font-bold text-[13px]	"
          >
            Your name
          </label>
          <input
            onChange={handleChange}
            name="regName"
            value={fields.regName}
            id="name"
            type="text"
            className={`outline-none block border-solid	${
              Erros.regNameError ? `border-red-500` : `border-[#b5b5b5]`
            } border rounded w-full	h-8 pl-1.5 field-shadow text-[gray] text-[13px]"`}
            placeholder="First and last name "
          />
          {Erros.regNameError ? (
            <div className="mt-1 flex items-center">
              <FontAwesomeIcon
                icon={faExclamation}
                className="mr-3 text-red-500"
              />
              <span className=" text-red-600 text-[13px]">
                {Erros.regNameError}
              </span>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="field-container mb-5">
          <label
            htmlFor="reg-email"
            className="text-left block mb-1 font-bold text-[13px]	"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            name="regEmail"
            value={fields.regEmail}
            id="reg-email"
            type="text"
            className={`outline-none block border-solid	${
              Erros.regMailError ? `border-red-500` : `border-[#b5b5b5]`
            }
 border rounded w-full	h-8 pl-1.5 field-shadow`}
          />
          {Erros.regMailError ? (
            <div className="mt-1 flex items-center">
              <FontAwesomeIcon
                icon={faExclamation}
                className="mr-3 text-red-500"
              />
              <span className=" text-red-600 text-[13px]">
                {Erros.regMailError}
              </span>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="field-container mb-5">
          <label htmlFor="reg-password" className="font-bold text-[13px]	">
            Password
          </label>
          <input
            onChange={handleChange}
            name="regPass"
            value={fields.regPass}
            id="reg-password"
            type="password"
            className={`outline-none block border-solid	${
              Erros.regPassError ? `border-red-500` : `border-[#b5b5b5]`
            } border rounded w-full	h-8 pl-1.5 field-shadow text-[gray]  text-[13px]`}
            placeholder="At least 8 characters"
          />
          {Erros.regPassError ? (
            <div className="mt-1 flex items-center">
              <FontAwesomeIcon
                icon={faExclamation}
                className="mr-3 text-red-500"
              />
              <span className=" text-red-600 text-[13px]">
                {Erros.regPassError}
              </span>
            </div>
          ) : (
            <div className="mt-1 flex items-center">
              <FontAwesomeIcon icon={faExclamation} className="mr-3" />
              <span className="text-[13px]">
                Password must be at least 8 characters
              </span>
            </div>
          )}
        </div>
        <div className="field-container mb-5">
          <label htmlFor="re-password" className="font-bold text-[13px]	">
            Re-enter Password
          </label>
          <input
            onChange={handleChange}
            name="rePass"
            value={fields.rePass}
            id="re-password"
            type="password"
            className={`outline-none block border-solid	${
              Erros.regRePassError ? `border-red-500` : `border-[#b5b5b5]`
            }
 border rounded w-full	h-8 pl-1.5 field-shadow`}
          />
          {Erros.regRePassError ? (
            <div className="mt-1 flex items-center">
              <FontAwesomeIcon
                icon={faExclamation}
                className="mr-3 text-red-500"
              />
              <span className=" text-red-600 text-[13px]">
                {Erros.regRePassError}
              </span>
            </div>
          ) : (
            ''
          )}
        </div>
        <button
          type="submit"
          className="block mb-5 w-full bg-[#3E64DA] text-[white] p-2 rounded-lg text-[13px]"
        >
          Continue
        </button>
        <button
          className="block mb-5 w-full bg-[#3E64DA] text-[white] p-2 rounded-lg text-[13px]"
          onClick={(e) => {
            e.preventDefault()
            setGlobalState('toReg', false)
          }}
        >
          Return to login
        </button>
      </form>
    </div>
  )
}
export default Register
