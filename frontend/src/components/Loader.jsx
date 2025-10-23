import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh] space-y-4">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      <p className="text-gray-700 font-medium tracking-wide">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
