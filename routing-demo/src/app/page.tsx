import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/products"}>Products</Link>
    </div>
  );
};

export default Home;
