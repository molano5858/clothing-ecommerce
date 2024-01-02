import React, {Fragment, useContext} from 'react'
import { CategoriesContext } from '../../contexts/categories.context.jsx'
import ProductCard from '../../product-card/product-card'
import './shop.scss'
import SHOP_DATA from '../../../shop-data.js'



const Shop=()=>{
    const {categoriesMap}=useContext(CategoriesContext)

    
    return (
        <Fragment>
            {Object.keys(categoriesMap).map(
                (title)=>{
                    return <Fragment key={title}>
                        <h3>{title}</h3>
                        <div className='products-container'>
                            {categoriesMap[title].map((product) => (
                                <ProductCard key={product.id} product={product} />
                                ))}
                        </div>
                    </Fragment>
                }
            )}
        </Fragment>
    )
}

export default Shop