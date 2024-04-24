import { useState } from 'react'
import ProductPop from './ProductPop'
import { FaCircleXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const products = [
  {
    price: '100L.E',
    type: 'Headphones',
    img: '../../public/images/headphones.jpg',
    capacity: 5,
  },
  {
    price: 'EGP 249.5',
    type: 'Smart Watch',
    img: '../../public/images/product-2.jpg',
    capacity: 2,
  },
  {
    price: '15000L.E',
    type: 'iPhone 11',
    img: '../../public/images/mobile.jpg',
    capacity: 10,
  },
]

function SellerProductPage() {
  const [show, setShow] = useState(false)
  const [showPromote, setShowPromote] = useState(false)
  const [proName, setProName] = useState('')
  const [AdPrice, setAdPrice] = useState(0)
  function showPop() {
    if (show === true) {
      return <ProductPop />
    }
  }

  return (
    <main className="flex-1 p-[20px] relative">
      {showPop()}
      <div className="flex justify-between align-center">
        <h3 className="text-[#3E64DA]">PRODUCTS</h3>
        <button
          className="block border-solid border-[#3E64DA] border-[1px] hover:border-[#F39E31] hover:text-[#F39E31] text-center w-[70px]  rounded-[5px] mb-[5px] text-[#3E64DA]"
          onClick={() => setShow(!show)}
        >
          Add
        </button>
      </div>
      <div className=" flex my-[15px] justify-between flex-wrap">
        {products.map((object, index) => {
          return (
            <div key={index} className="w-[32%] bg-[#eee] mb-[10px] p-[5px]">
              <img
                src={object.img}
                alt=""
                className="w-[100%] h-[200px] object-contain mb-[10px]"
              />
              <div className="flex items-center justify-between px-[6px]">
                <div className="left self-start">
                  <h6 className="font-bold text-left text-[13px] mb-[10px] text-black">
                    {object.type}
                  </h6>
                  <h6 className="font-bold text-left text-[13px] mb-[10px] text-black">
                    {object.price}
                  </h6>
                  <a
                    href=""
                    className=" text-blue-700 text-[13px] hover:text-blue-400 block  "
                  >
                    SeeMore
                  </a>
                </div>
                <div className="right text-right">
                  <button
                    onClick={() => {
                      setShowPromote(true)
                      setProName(object.type)
                    }}
                    className=" text-[#3E64DA] text-center border-solid border-[#3E64DA] border-[1px] hover:border-[#F39E31] hover:text-[#F39E31] text-[15px] w-[70px] rounded-[5px] mb-[10px]"
                  >
                    Promote
                  </button>
                  <button className="block text-[#3E64DA] text-center border-solid border-[#3E64DA] border-[1px] hover:border-[#F39E31] hover:text-[#F39E31] text-[15px] w-[70px]  rounded-[5px] mb-[10px] ">
                    Delete
                  </button>
                  <button className=" text-[#3E64DA] text-center border-solid border-[#3E64DA] border-[1px] hover:border-[#F39E31] hover:text-[#F39E31] text-[15px] w-[70px] rounded-[5px] ">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          )
        })}
        <div
          className={`${
            showPromote ? '' : 'hidden'
          } p-[15px] absolute rounded-lg w-[50%] h-fit bg-[white] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
        >
          <FaCircleXmark
            onClick={() => {
              setShowPromote(false)
            }}
            className="absolute right-[15px] top-[15px] cursor-pointer"
          />
          <form action="">
            <h1 className="font-bold mb-5">
              Select your promote for {proName}
            </h1>
            <div className="p-[5px] mb-5">
              <input
                type="radio"
                name="Promote"
                id="Sta"
                className="mr-2"
                onClick={() => {
                  setAdPrice(500)
                }}
              />
              <label htmlFor="Sta">Standard Ad 500EGP</label>
            </div>
            <div className="p-[5px] mb-5">
              <input
                type="radio"
                name="Promote"
                id="Pro"
                className="mr-2"
                onClick={() => {
                  setAdPrice(750)
                }}
              />
              <label htmlFor="Pro">Pro Ad 750EGP</label>
            </div>
            <div className="p-[5px]">
              <input
                type="radio"
                name="Promote"
                id="Pre"
                className="mr-2"
                onClick={() => {
                  setAdPrice(1000)
                }}
              />
              <label htmlFor="Pre">Premium Ad 1000EGP</label>
            </div>
            {AdPrice ? (
              ''
            ) : (
              <div className="text-[red] mb-2 p-[5px]">
                You must choose your promote
              </div>
            )}
            <Link to={`${AdPrice ? '' : ''}`}>
              <button className="block bg-[#3E64DA] text-center text-[white] w-[100%] rounded-lg">
                Confirm
              </button>
            </Link>
          </form>
        </div>
      </div>
    </main>
  )
}
export default SellerProductPage
