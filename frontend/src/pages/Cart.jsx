import React, { useEffect, useState } from 'react'
import useProductsContext from '../context/ProductsContext'
import useCartContext from '../context/Cartcontext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import CheckoutTotal from '../components/CheckoutTotal'

const Cart = () => {
    const { currency, getProductById , shippingFee } = useProductsContext();
    const { cartItems, removeFromCart, updateQuantity, updateTotalPrice } =
    useCartContext();
  const navigate = useNavigate()
  const [cartData, setCartData] = useState([])
  
  
  useEffect(() => {
    const tempData = []
    let subtatal = 0
    if (cartItems) {
      for (const items in cartItems) {
       for (const item in cartItems[items]) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
          }
      }
    }

    setCartData(tempData);
    
    tempData.forEach((item) => {
      let productdata = getProductById(item._id)
      let price = +(productdata.price) * (item.quantity)
      subtatal +=price
    })
    
    updateTotalPrice(subtatal);
    
  },[cartItems])
  
  
  
  return (
    <div className="border-t border-gray-300 pt-14">
      <div className=" text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      {Object.keys(cartData).length > 0 ? (
        <>
          <div>
            {cartData.map((item, index) => {
              const productData = getProductById(item._id);

              return (
                <div
                  key={index}
                  className="py-4 border-t border-b border-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
                >
                  <div className=" flex items-start gap-6">
                    <img
                      className="w-16 sm:w-20"
                      src={productData.image[0]}
                      alt=""
                    />
                    <div>
                      <p className="text-xs sm:text-lg font-medium">
                        {productData.name}
                      </p>
                      <div className="flex items-center gap-5 mt-2">
                        <p>{currency + productData.price}</p>
                        <p className="px-2 sm:px-3 sm:py-1 border border-gray-300 bg-slate-50">
                          {item.size}
                        </p>
                      </div>
                    </div>
                  </div>
                  <input
                    className="border border-gray-300 max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                    type="number"
                    name=""
                    min={"1"}
                    onChange={(e) =>
                      updateQuantity(item._id, item.size, e.target.value)
                    }
                    defaultValue={item.quantity}
                    id=""
                  />
                  <img
                    onClick={() => {
                      removeFromCart(item._id, item.size);
                    }}
                    src={assets.bin_icon}
                    className="w-4 mr-4 sm:w-5 cursor-pointer"
                    alt=""
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-end my-20">
            <div className="w-full sm:w-[450px]">
              <CheckoutTotal />
              <div className=" w-full text-end">
                <button onClick={()=>{navigate("/place-order")}} className="bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer" >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <img
            src={assets.empty_cart_icon} // 👈 use any icon or placeholder image you like
            alt="Empty cart"
            className="w-32 sm:w-48 mb-6 opacity-80"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Your Cart is Empty
          </h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven’t added anything to your cart yet.
          </p>
          <Link
              to={"/collection"} // 👈 or navigate programmatically
            className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart
