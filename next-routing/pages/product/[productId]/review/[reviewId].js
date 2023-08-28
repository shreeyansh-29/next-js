import React from "react";
import {useRouter} from "next/router";

const ReviewId = () => {
  const router = useRouter();
  const {productId, reviewId} = router.query;

  return <div>
    <h1>Review {reviewId} ProductId {productId}</h1>
  </div>;
};

export default ReviewId;
