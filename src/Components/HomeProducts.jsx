import Product from './Product.jsx'

const HomeProducts = ({ products }) => {
  return (
    <>
      <main className="p-5">
        <div className="m-[10px] mb-[20px] bg-white p-[20px]">
          <h1 className="font-bold text-left mb-[10px]">Products</h1>
          <div className="grid grid-cols-6 gap-5">
            {products.map((object, index) => {
              return (
                <Product
                  key={index}
                  img={object.images[0]}
                  name={object.name}
                  price={object.price}
                  link={object._id}
                />
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}

export default HomeProducts
