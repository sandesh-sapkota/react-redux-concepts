import Cart from "./Components/Cart";
import Product from "./Components/Product";
import products from "./products.json";

function App() {
  return (
    <div className="App">
      <Cart />
     <div className="products-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center">
      {products.map((product)=>(
        <Product {...product} />
      ))}
     </div>
    </div>
  );
}

export default App;
