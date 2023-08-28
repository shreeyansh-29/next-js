import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">
      Blog
        {/* <a>Blog</a> */}
      </Link>
      <Link href="/product">
        Product
      </Link>
    </div>
  );
};

export default index;
