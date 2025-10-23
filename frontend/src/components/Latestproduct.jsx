import React from 'react'
import Title from './Title'
import useProductsContext from '../context/ProductsContext';
import DynamicProducts from './DynamicProducts';


const Latestproduct = () => {

  const { products } = useProductsContext()
  const latestProducts = products.slice(0,10)
  
  
  return (
    <div className="my-10">
      <div className="py-8">
        <div className="text-center text-3xl ">
          <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        </div>
        <p className=" text-center text-gray-700">
          Discover our latest collection featuring modern fits, bold designs,
          and timeless comfort — crafted to elevate your everyday fashion
          effortlessly.
        </p>
      </div>

      <DynamicProducts
        productArr={latestProducts}
        classes={
          "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6"
        }
      />
      
    </div>
  );
}

export default Latestproduct
