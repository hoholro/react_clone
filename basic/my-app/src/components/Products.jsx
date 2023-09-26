import React, { useEffect, useState } from "react";

export default function Products() {
  const [count, setCount] = useState(0);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    //네트워크 통신이 발생된다
    fetch("data/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("와우 데이터를 네트워크에서 받아옴");
        setProducts(data);
      });
    return () => {
      console.log("청소");
    };
  }, []);

  return (
    <div>
      <ul>
        {Products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </div>
  );
}
