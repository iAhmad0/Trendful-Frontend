import PricingSection from '../Components/PricingSection'
import MiddleSection from '../Components/MiddleSection'
import LeftSection from '../Components/LeftSection'
import Header from '../Components/Header'
import ErrorPage from './ErrorPage'
import { useEffect, useState } from 'react'
import axios from 'axios'

function ProductPage() {
  const id = window.location.pathname

  const [render, setRender] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/' +
            id.substring(id.lastIndexOf('/') + 1)
        )
        setData(response.data)
        setRender(true)
      } catch (err) {
        setRender(false)
      }
    }
    fetchData()
  }, [])

  if (render) {
    return (
      <>
        <Header />
        <div className="flex p-[15px]">
          <LeftSection images={data.images} />
          <MiddleSection
            price={data.price}
            name={data.name}
            description={data.description}
          />
          <PricingSection
            price={data.price}
            stock={data.stock}
            name={data.name}
          />
        </div>
      </>
    )
  } else {
    return <ErrorPage />
  }
}
export default ProductPage
