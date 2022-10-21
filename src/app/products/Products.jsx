import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/products/ProductCard";
import cn from "classnames";
import productListApi from "../../services/product/productListApi";
import ProductCardSkeleton from "../../components/skeleton/ProductCardSkeleton";
import AboutProductSkeleton from "../../components/skeleton/AboutProductSkeleton";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    try {
      const products = await productListApi();
      setProducts(products.results);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1 className="main-header font-regular mb-4 border-b-2">
        Latest Product
      </h1>
      <div className="mt-10 md:mt-0 md:grid grid-cols-3 lg:grid-cols-4 gap-5">
        {isLoading ? (
          <>
            {Array.from(Array(4).keys()).map((item, index) => (
              <ProductCardSkeleton
                key={item}
                className={cn("", { "mt-5 md:mt-0": index !== 0 })}
              />
            ))}
          </>
        ) : (
          products.map((product, index) => {
            return (
              <Link to={`/${product._id}/reviews`} key={product._id}>
                <ProductCard
                  className={cn("", { "mt-5 md:mt-0": index !== 0 })}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Products;
