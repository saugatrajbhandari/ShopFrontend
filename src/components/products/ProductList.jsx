import { useEffect, useState } from "react";
import productListApi from "../../services/product/productListApi";
import ProductCard from "./ProductCard";
import cn from "classnames";
import { Link } from "react-router-dom";
import ProductCardSkeleton from "../skeleton/ProductCardSkeleton";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await productListApi();
        setProducts(products.results);
      } catch (error) {}
      setIsLoading(false);
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="main-header font-regular">Latest Product</h1>
        <Link to="/products">view all</Link>
      </div>
      <div className="mt-10   md:mt-0 md:grid grid-cols-3 lg:grid-cols-4 gap-5">
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
        {/* {products.map((product, index) => {
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
        })} */}
      </div>
    </>
  );
};

export default ProductList;
