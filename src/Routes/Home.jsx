import Header from '../Components/Header.jsx'
import HomeProducts from '../Components/HomeProducts.jsx'

import { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'http://localhost:3000/api/v1/all-products'
      )
      setData(response.data)
    }
    fetchData()
  }, [])

  return (
    <div className="bg-[rgb(227,230,230)] min-h-screen">
      <Header />
      <HomeProducts products={data} />
    </div>
  )
}

export default Home
