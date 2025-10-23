import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import useProductsContext from "../context/ProductsContext";
import Title from "../components/Title";
import RelatedProducts from "../components/RelatedProducts";
import useCartContext from "../context/Cartcontext";
import { toast } from "react-toastify";

const Product = () => {
  const { productID } = useParams();
  const { getProductById, currency } = useProductsContext();
 const addToCart = useCartContext((state) => state.addToCart);  const product = getProductById(productID);
  const [size, setSize] = useState();
  const [curImg, setcurImg] = useState(0);

  return (
    <div className="border-t-2 border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {product.image.map((i, ind) => {
              return (
                <img
                  key={ind}
                  onClick={() => {
                    setcurImg(ind);
                  }}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  src={i}
                  alt=""
                />
              );
            })}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={product.image[curImg]} alt="" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2"> {product.name}</h1>
          <div className=" flex items-center gap-1 mt-2">
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_icon} alt="" />
            <img className="w-3 5" src={assets.star_dull_icon} alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency + product.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{product.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {product.sizes.map((i, ind) => (
                <button
                  onClick={() => {
                    setSize(i);
                  }}
                  key={ind}
                  className={`border border-gray-300 py-2 px-4 bg-gray-100 cursor-pointer ${
                    size === i ? "border-orange-500" : ""
                  } `}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              if (size) {
                
                addToCart(product._id,size);
              } else {
                toast.error("Plz Select Size")
              }
            }}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer"
          >
            ADD TO CART
          </button>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-200 px-5 py-3 text-sm">
            Description
          </b>
          <p className="border border-gray-200 px-5 py-3 text-sm">
            Reviews(122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 border-gray-200">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <div className="my-24">
        <RelatedProducts
          category={product.category}
          subCategory={product.subCategory}
        />
      </div>
    </div>
  );
};

export default Product;
