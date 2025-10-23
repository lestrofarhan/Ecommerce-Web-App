import React from 'react'
import ProductItem from "./ProductItem";

const DynamicProducts = ({productArr,classes}) => {

  return (
    <div className={classes}>
      {productArr.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              img={item.image}
              title={item.name}
              price={item.price}
            />
          ))}
    </div>
  )
}

export default DynamicProducts
