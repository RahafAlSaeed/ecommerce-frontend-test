import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://express-ecommerce-api-test.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.payload));
  }, []);

  return (
    <div>
      <h1>Products list</h1>
      {products.length > 0 &&
        products.map((product) => (
          <div key={product.id}>
            <h3>Product Name: {product.name}</h3>
            <p style={{color:'red'}}>Price: {product.price} SAR</p>
          </div>
        ))}
    </div>
  );
};

export default App;
