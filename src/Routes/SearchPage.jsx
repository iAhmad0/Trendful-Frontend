import Header from "../Components/Header";
import SearchProduct from "../Components/SearchProduct";

function SearchPage() {
  const path = window.location.href;
  return (
    <>
      <Header />
      <main className="bg-[rgb(227,230,230)] p-[20px] h-screen">
        <div className="m-[10px] mb-[20px] bg-white p-[20px]">
          <h1 className="font-bold text-left mb-[10px]">Products</h1>
          <div className="">
            <div className="flex justify-between flex-wrap">
              <SearchProduct link={path} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default SearchPage;
