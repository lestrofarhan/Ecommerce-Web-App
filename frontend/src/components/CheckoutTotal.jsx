import React from 'react'
import useCartContext from '../context/Cartcontext'
import useProductsContext from '../context/ProductsContext'
import Title from './Title'

const CheckoutTotal = () => {
    const { totalPrice } = useCartContext()
    const {currency,shippingFee } = useProductsContext()
  return (
    <div className="w-full">
                    <div className="text-2xl">
                      <Title text1={"CART"} text2={"TOTALS"} />
                    </div>
                    <div className="flex flex-col gap-2 mt-2 text-sm">
                      <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>{currency+totalPrice}.00</p>
                      </div>
                      <hr className="text-gray-300" />
                      <div className="flex justify-between">
                        <p>Shipping Fee</p>
                        <p>{currency+shippingFee}.00</p>
                      </div>
                      <hr className="text-gray-300" />
                      <div className="flex justify-between">
                        <b>Total</b>
                        <b>{currency+(shippingFee+totalPrice)}.00</b>
                      </div>
                      <hr className="text-gray-300" />
                    </div>
                  </div>
  )
}

export default CheckoutTotal
