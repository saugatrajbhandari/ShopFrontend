import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetailApi from '../../services/product/productDetailApi'
import AboutProduct from './aboutProduct/AboutProduct';
import ProductDetail from './ProductDetail/ProductDetail';


const SingleProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProducts = async() => {
            try {
                const product = await ProductDetailApi({id});
                setProduct(product);
                
            } catch (error) {
            }
            setIsLoading(false);
        }

        getProducts();
    }, [id])
  return (
    <div className='mt-10'>
        <div>
            <AboutProduct product={product} isLoading={isLoading}/>
        </div>

        <div className='mt-5'>
            <ProductDetail product={product} />
        </div>
        
    </div>
  )
}

export default SingleProductDetail