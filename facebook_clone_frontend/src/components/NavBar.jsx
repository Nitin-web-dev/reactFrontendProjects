import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-full flex justify-around items-center">
      <div className="w-14 h-14 rounded-full hover:bg-white  bg-slate-400 flex justify-center items-center hover:bg-slate-600">
        <i className="fa-solid fa-house  "></i>
      </div>
      <div className="w-14 h-14 rounded-full hover:bg-white  bg-slate-400 flex justify-center items-center hover:bg-slate-600">
        <i className="fa-solid fa-heart  "></i>
      </div>
      <div className="w-14 h-14 rounded-full hover:bg-white mb-16 bg-slate-400 flex justify-center items-center hover:bg-slate-600">
      <i className="fa-solid fa-plus  "></i>
      </div>
      <div className="w-14 h-14 rounded-full hover:bg-white  bg-slate-400 flex justify-center items-center hover:bg-slate-600">
        <i className="fa-solid fa-bell  "></i>
      </div>
      <div className="w-14 h-14 rounded-full hover:bg-white  bg-slate-400 flex justify-center items-center hover:bg-slate-600">
        <i className="fa-solid fa-user  "></i>
      </div>
    </div>
  );
};

export default NavBar;
