import React from "react";
import {Metadata} from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetaData = async ({params}: Props): Promise<Metadata> => {
  const title = await new Promise((res) => {
    setTimeout(() => {
      res(`Iphone ${params.productId}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};

const ProductDetails = ({params}: Props) => {
  return <div>Details about product {params.productId}</div>;
};

export default ProductDetails;
