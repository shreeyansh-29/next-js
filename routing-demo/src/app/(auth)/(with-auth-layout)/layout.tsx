import React from "react";

const ProductDetialsLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <h2>Inner Layout</h2>
      {children}
    </>
  );
};

export default ProductDetialsLayout;
