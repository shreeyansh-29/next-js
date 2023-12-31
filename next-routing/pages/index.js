import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";

const index = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default index;
