import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import ProductDetailApi from "../../services/product/productDetailApi";
import AboutProduct from "./aboutProduct/AboutProduct";
import ProductDetail from "./ProductDetail/ProductDetail";

const SingleProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const product = await ProductDetailApi({ id });
        setProduct(product);
      } catch (error) {
        toast.error(error?.response?.data?.error || "Something went wrong");
      }
      setIsLoading(false);
    };

    getProducts();
  }, [id]);
  return (
    <div>
      <AboutProduct product={product} isLoading={isLoading} />

      <div>
        <ProductDetail product={product} className="mt-10" />
      </div>
    </div>
  );
};

export default SingleProductDetail;
