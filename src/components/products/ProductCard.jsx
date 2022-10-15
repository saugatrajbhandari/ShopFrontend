import React from 'react'
import cn from "classnames"

const ProductCard = (props) => {
    const {name, price, image, className} = props;
  return (
    <div className={cn('border p-5', className)}>
        <img src={image} alt={name} className='aspect-[1/1.40] object-fit' />
        <div className='mt-2 ml-2'>
        <h1 className='normal-header font-regular'>{name}</h1>
        <h5 className='font-medium'>Rs {price}</h5>
        </div>
    </div>
  )
}

export default ProductCard