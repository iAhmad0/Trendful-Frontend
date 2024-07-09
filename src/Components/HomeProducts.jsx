import Product from "./Product.jsx";

const HomeProducts = ({ products }) => {
  return (
    <>
      <main className="p-8">
        <div className="bg-white p-5">
          <h1 className="font-bold mb-10">Products</h1>

          <div className="grid grid-cols-6 gap-8">
            {products.map((object, index) => {
              return (
                <Product
                  key={index}
                  img={object.images[0]}
                  name={object.name}
                  price={object.price}
                  link={object._id}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeProducts;
