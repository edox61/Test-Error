import React, { useState } from "react";

const initialProduct = {
  title: "Titulo",
  description: "Descripcion"
};

function ProductApp() {
  const [product, setProduct] = useState(initialProduct);

  const updateProduct = (properties, value) => {
    //  console.log(e);
    setProduct({
      ...product,
      [properties]: value
    });
  };
  return (
    <div>
      <button onClick={() => updateProduct("title", "Nuevo Titulo")}>
        update
      </button>
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
      <pre>{JSON.stringify({ product }, null, 2)}</pre>
    </div>
  );
}
export default ProductApp;
