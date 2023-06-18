import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-800 relative">
      <div className=" w-full fixed top-0 flex justify-center">
        <div className="w-full h-14 bg-slate-300 ">
          <Header />
        </div>
      </div>


      <div className=" w-full fixed bottom-0 flex justify-center">
        <div className="w-11/12 h-16 bg-slate-300 rounded-t-2xl">
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default App;
