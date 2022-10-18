import React from "react";
import cn from "classnames";
import Skeleton from "react-loading-skeleton";

const ProductCardSkeleton = ({ className = "" }) => {
  return (
    <div className={cn("", className)}>
      <Skeleton className="aspect-[1/1.40]" />
      <h1 className="sub-header w-[200px] mt-1">
        <Skeleton />
      </h1>
      <h5 className="w-[100px]">
        <Skeleton />
      </h5>
    </div>
  );
};

export default ProductCardSkeleton;
