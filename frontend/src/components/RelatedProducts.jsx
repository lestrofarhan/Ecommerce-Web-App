import React, { useEffect, useState } from 'react'
import useProductsContext from '../context/ProductsContext'
import Title from './Title'
import DynamicProducts from './DynamicProducts'

const RelatedProducts = ({category,subCategory}) => {
    const { products } = useProductsContext()
    const [related, setRelated] = useState([])
    
    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            
            
            productsCopy = productsCopy.filter((item) =>
                category === item.category
            );

            productsCopy = productsCopy.filter((item) =>
                subCategory === item.subCategory
        );
        setRelated(productsCopy.slice(0, 5));
            
        
    }
        
    },[products])
    return (
      <div className="my-24">
        <div className=" text-center text-3xl py-2">
          <Title text1={"RELATED"} text2={"PRODUCTS"} />
        </div>
          <DynamicProducts
            productArr={related}
            classes={
              "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6"
            }
          />
      </div>
    );
}

export default RelatedProducts
