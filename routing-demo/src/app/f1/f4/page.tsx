import Link from "next/link";
import React from "react";

const F4 = () => {
  return (
    <>
      <h1>F1 page</h1>
      <div>
        <Link href={"/f1/f3"}>F3</Link>
        <Link href={"/about"}>About</Link>
      </div>
    </>
  );
};

export default F4;
