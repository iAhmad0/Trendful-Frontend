import { useEffect, useState } from 'react'
import axios from 'axios'
import Login from '../Component/Login'
import Register from '../Component/Register'

async function checkLoggedIn() {
  if (localStorage.getItem('token')) {
    try {
      const request = await axios.post(
        'http://localhost:3000/api/buyer/token',
        {
          token: localStorage.getItem('token'),
        }
      )
      window.location.href = 'http://localhost:5173/'
    } catch (err) {
      localStorage.removeItem('token')
    }
  } else {
    localStorage.removeItem('token')
  }
}

function LogAndReg() {
  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(checkLoggedIn())
  }, [])

  if (render) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="my-5 mx-auto w-fit">
          <img src="/images/logo-nobg.png" alt="" className="w-[150px]" />
        </div>
        {toReg ? <Register /> : <Login />}
        <div
          className={`text-center  before:mr-[5px] after:ml-[5px] text-[gray] mb-3 text-[13px] ${
            toReg ? `hidden` : ''
          }`}
        >
          New to Trendful?
        </div>
        <button
          type="submit"
          className=" block mb-5 w-[391px] mx-auto bg-white p-1 rounded-lg text-[13px] border-solid	border-[#e1e1e1] border hover:bg-[#edfdff]"
          onClick={() => {
            setGlobalState('toReg', true)
          }}
        >
          Create your Trendful account
        </button>
      </div>
    )
  }
}

export default LogAndReg
