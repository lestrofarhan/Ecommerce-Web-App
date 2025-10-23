import React, { useEffect, useState } from 'react'
import useProductsContext from '../context/ProductsContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const { search, showSearch, setSearch, setShowSearch } = useProductsContext()
    const [visible, setVisible] = useState(false)
    const location = useLocation()

    useEffect(() => {
        
        if (location.pathname.includes("collection") && showSearch) {
            
            setVisible(true)
        } else {
            setVisible(false)
        }
    },[location , showSearch])

   return visible && showSearch ? (
     <div className="border-t  border-gray-300 bg-gray-50 text-center">
       <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
         <input
           className="flex-1 outline-none bg-inherit text-sm"
           value={search}
           onChange={(e) => {
             setSearch(e.target.value);
           }}
           type="text"
           name=""
           id=""
         />
         <img className="w-4" src={assets.search_icon} alt="" />
       </div>
           <img
               onClick={() => { setShowSearch(false); setSearch("") }}
         className="inline w-3 cursor-pointer"
         src={assets.cross_icon}
         alt=""
       />
     </div>
   ) : null;
}

export default Search
