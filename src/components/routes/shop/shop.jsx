import React, {useContext} from 'react'
import { ProductContext } from '../../contexts/products'
import shop_data from '../../../shop-data.json'
import ProductCard from '../../product-card/product-card'
import './shop.scss'

const Shop=()=>{
    const {products}=useContext(ProductContext)
    return (
        <div className='products-container'>
            {products.map((product)=>{
            return (
                <ProductCard key={product.id} product={product}> 
                    <h3>{product.name}</h3>
                </ProductCard>)
            } )}
        </div>
    )
}

export default Shop