import { create } from "zustand"
import { products } from "../assets/assets"
import { useState } from "react";



const useProductsContext = create((set) => ({
    products,
    currency: "$",
    search: "",
    shippingFee: 10,
    showSearch: false,
    
    getProductById: (id) => 
        products.find(i=>i._id === id)
    ,
    setSearch: (term)=>set({search: term}),
    setShowSearch: (term) => set({ showSearch: term }),
    setCartItem : (term)=>set({cartItems: term}),
    
}));

export default useProductsContext
