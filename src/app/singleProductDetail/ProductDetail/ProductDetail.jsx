import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BuyNowOption from "./buyNowOption/BuyNowOption";
import ReviewOption from "./ReviewOption/ReviewOption";
import cn from "classnames";
import MoreInfoOption from "./MoreInfoOption/MoreInfoOption";

const ProductDetail = (props) => {
  const { product, className } = props;
  const { id, section } = useParams();

  const routeOptions = [
    {
      name: "Reviews",
      value: "reviews",
      link: `/${id}/reviews`,
    },
    {
      name: "BuyNow",
      value: "buy-now",
      link: `/${id}/buy-now`,
    },
    {
      name: "MoreInfo",
      value: "more-info",
      link: `/${id}/more-info`,
    },
  ];

  const renderContent = () => {
    switch (section) {
      case "reviews":
        return <ReviewOption />;

      case "buy-now":
        return <BuyNowOption />;

      case "more-info":
        return <MoreInfoOption />;

      default:
        return;
    }
  };

  useEffect(() => {
    renderContent();
  }, [section]);

  return (
    <>
      <div
        className={cn(
          "flex space-x-5 sm:space-x-10 pb-2 border-b-2",
          className
        )}
      >
        {routeOptions.map((option, index) => {
          return (
            <Link to={option.link} key={index}>
              <div
                className={cn("", {
                  "border-primary border-b-2 pb-2 -mb-2.5":
                    section === option.value,
                })}
              >
                <h6 className="normal-text font-regular">{option.name}</h6>
              </div>
            </Link>
          );
        })}
      </div>
      <div>{renderContent()}</div>
    </>
  );
};

export default ProductDetail;
