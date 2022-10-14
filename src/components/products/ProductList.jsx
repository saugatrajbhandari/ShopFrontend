import { useEffect, useState } from 'react'
import productListApi from '../../services/product/productListApi';
import ProductCard from './ProductCard';
import cn from "classnames";
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProducts = async() => {
            try {
                const products = await productListApi();
                setProducts(products)

            } catch (error) {
            }
            setIsLoading(false);
        }
        getProducts();

    }, [])

    if(isLoading) return <h1>Loading...</h1>
  return (   
    <div className='md:grid grid-cols-3 lg:grid-cols-4 gap-5'>
        {products.map((product, index) => {
            return (
                <Link to={`/${product._id}/reviews`}  key={product._id}>
                <ProductCard
                className={cn("", {"mt-5 md:mt-0": index !== 0})}
                name={product.name} price={product.price} description={product.description} rating={product.rating} image={product.image}/>
                </Link>
            )
        })}

    </div>
  )
}

export default ProductList