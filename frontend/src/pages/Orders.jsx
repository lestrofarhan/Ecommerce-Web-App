import React from 'react'
import Title from '../components/Title';
import useProductsContext from '../context/ProductsContext';

const rafc = () => {
  const {products , currency} = useProductsContext()
  let geo = products.slice(0,4)
  return (
    <div className="border-t border-gray-200 pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {geo.map((item, ind) => (
          <div
            key={ind}
            className="py-4 border-t border-b border-gray-200 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="sm:text-base font-medium">${item.name}</p>
                <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 2</p>
                  <p>Size: XXL</p>
                </div>
                <p className="mt-1">
                  Date: <span className="text-gray-400">20-OCT-2025</span>
                </p>
                <p className="mt-1">
                  Payment: <span className="text-gray-400">COD</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Order Placed</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm cursor-not-allowed border-gray-200" >
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default rafc
