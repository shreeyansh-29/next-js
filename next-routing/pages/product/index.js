import React from "react";
import Link from "next/link";

const ProductList = ({productId = 100}) => {
  return (
    <div>
      <Link href="/">Home</Link>
      <h2>
        <Link href="/product/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/product/2" replace>Product 2</Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`}>Product {productId}</Link>
      </h2>
    </div>
  );
};

export default ProductList;
