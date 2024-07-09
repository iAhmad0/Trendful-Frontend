import Header from "../Components/Header";
import SearchProduct from "../Components/SearchProduct";

function SearchPage() {
  const path = window.location.href;
  return (
    <>
      <Header />

      <main className="bg-[rgb(227,230,230)] p-8 min-h-screen">
        <div className="bg-white p-5">
          <h1 className="font-bold mb-10">Products</h1>

          <div className="grid grid-cols-2 gap-8">
            <SearchProduct link={path} />
          </div>
        </div>
      </main>
    </>
  );
}
export default SearchPage;
