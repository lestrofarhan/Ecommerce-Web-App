import React from 'react'
import {Link} from "react-router-dom"
import useProductsContext from '../context/ProductsContext'
import { toast } from "react-toastify";

const ProductItem = ({ id, img, title, price }) => {
    const {currency} = useProductsContext()
  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={img[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{title}</p>
      <p className=" text-sm font-medium">{`${currency}${price}`}</p>
    </Link>
  );
}

export default ProductItem
