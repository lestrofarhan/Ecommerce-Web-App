import React from 'react'

const Title = ({text1 , text2 , font}) => {
  return (
    <div className={`inline-flex items-center gap-2 mb-3 `}>
      <p className=" text-gray-500 ">{text1}</p>
      <span className={`text-gray-700 font-medium ${font ? font : ""}`}>
        {text2}
      </span>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  );
}

export default Title
