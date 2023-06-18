import React from "react";

const Header = () => {
  return (
    <>
      <div className=" w-full h-full flex justify-between items-center px-6">
        <h1 className="uppercase font-bold">Social_App</h1>

        <form id="form">
          <input type="text" name="search" id="search" className="w-0 " />
          <i className="fa-solid fa-magnifying-glass p-3 bg-white rounded-full"></i>
        </form>
      </div>
    </>
  );
};

export default Header;
