import React, { useCallback, useState } from 'react'
import Title from '../components/Title';
import useProductsContext from '../context/ProductsContext';
import DynamicProducts from '../components/DynamicProducts';
import { useMemo } from 'react';

const Collection = () => {
  const { products , search } = useProductsContext()
  const [category, setCateogry] = useState([])
  const [subcategory, setSubCateogry] = useState([])
  const [sortOrder, setSortOrder] = useState("relevant")
  
  
  const handleCategory = useCallback((cate) => {
    setCateogry((prev) =>
      prev.includes(cate)
        ? prev.filter((c) => c !== cate)
        : [...prev, cate]
    );
    
  }, []);
  const handleSubCategory = useCallback((cate) => {
    setSubCateogry((prev) =>
      prev.includes(cate)
        ? prev.filter((c) => c !== cate)
        : [...prev, cate]
    );
  }, []);

  const handleSort = useCallback((e) => {
    setSortOrder(e.target.value);
  }, []);

  
  let filteredProducts = useMemo(() => {
    let filtered = [...products]
    
    if (search) {
      filtered = filtered.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      filtered = filtered.filter((e) => category.includes(e.category))
    }

    if (subcategory.length > 0) {
      filtered = filtered.filter((e) => subcategory.includes(e.subCategory))
    }

    if (sortOrder === "low-high") {
      filtered = filtered.sort((a, b) => a.price - b.price)
    }
    if (sortOrder === "high-low") {
      filtered = filtered.sort((a, b) => b.price - a.price)
    }
    return filtered
  })
  
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-t-gray-300">
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
        </p>
        <div className="border border-gray-300 pl-5 py-3 mt-6 hidden sm:block">
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="Men"
                onChange={() => {
                  handleCategory("Men");
                }}
                checked={category.includes("Men")}
                id=""
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="Women"
                onChange={() => {
                  handleCategory("Women");
                }}
                checked={category.includes("Women")}
                id=""
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name="Kids"
                onChange={() => {
                  handleCategory("Kids");
                }}
                checked={category.includes("Kids")}
                id=""
              />
              Kids
            </p>
          </div>
        </div>
        <div className="border border-gray-300 pl-5 py-3 mt-6 hidden sm:block">
          <p className="mb-3 text-sm font-medium">TYPE</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                name=""
                onChange={() => {
                  handleSubCategory("Topwear");
                }}
                checked={subcategory.includes("Topwear")}
                id=""
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name=""
                onChange={() => {
                  handleSubCategory("Bottomwear");
                }}
                checked={subcategory.includes("Bottomwear")}
                id=""
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                name=""
                onChange={() => {
                  handleSubCategory("winterwear");
                }}
                checked={subcategory.includes("winterwear")}
                id=""
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"All"} text2={"COLLECTIONS"} />
          <select
            className="border-2 border-gray-300 text-sm px-2"
            name="Sort"
            id="sort"
            onChange={handleSort}
            value={sortOrder}
          >
            <option value="relavent">Sort by:Relavent</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>
        <DynamicProducts
          productArr={filteredProducts}
          classes={
            "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6"
          }
        />
      </div>
    </div>
  );
}

export default Collection
