import React, { useState } from 'react'
import Title from '../components/Title';
import CheckoutTotal from '../components/CheckoutTotal';
import { assets } from '../assets/assets';

const Placeorder = () => {
  const [paymentMethod , setPaymentMethod] = useState("COD")
  return (
    <form
      action=""
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-300"
    >
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIEVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="firstName"
            id=""
            placeholder="First Name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="lastName"
            id=""
            placeholder="Last Name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          name="street"
          id=""
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="city"
            id=""
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="state"
            id=""
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            group="number"
            name="zipcode"
            id=""
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="country"
            id=""
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          group="number"
          name="phone"
          id=""
          placeholder="Phone"
        />
      </div>
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CheckoutTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => {
                setPaymentMethod("stripe");
              }}
              className={`flex items-center gap-3 border border-gray-300 p-2 px-3  cursor-pointer`}
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
                  paymentMethod === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => {
                setPaymentMethod("razorpay");
              }}
              className={`flex items-center gap-3 border border-gray-300 p-2 px-3  cursor-pointer`}
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
                  paymentMethod === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => {
                setPaymentMethod("COD");
              }}
              className={`flex items-center gap-3 border border-gray-300 p-2 px-3  cursor-pointer`}
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
                  paymentMethod === "COD" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIEVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={() => {
                navigate("/orders");
              }}
              className="bg-black text-white px-16 py-3 text-sm cursor-pointer"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Placeorder
