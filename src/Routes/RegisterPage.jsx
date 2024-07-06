import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Register from '../Components/Register'

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

function RegisterPage() {
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
        <Register />
      </div>
    )
  }
}
export default RegisterPage
