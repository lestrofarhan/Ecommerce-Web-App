import React from "react";
import Title from "./Title";
import useProductsContext from "../context/ProductsContext";
import DynamicProducts from "./DynamicProducts";

const Bestseller = () => {
  const { products } = useProductsContext();
  const bestSeller = products.filter(i=> i.bestseller === true);

  return (
    <div className="my-10">
      <div className="py-8">
        <div className="text-center text-3xl ">
          <Title text1={"BEST"} text2={"SELLERS"} />
        </div>
        <p className=" text-center text-gray-700">
          Our best sellers combine timeless style with premium comfort — the
          perfect choice for every occasion.
        </p>
      </div>

      <DynamicProducts
        productArr={bestSeller}
        classes={
          "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6"
        }
      />
     
    </div>
  );
};

export default Bestseller;
