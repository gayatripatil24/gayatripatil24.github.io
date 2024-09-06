import { useState } from "react";
import { Outlet } from "react-router";
const image = require("../assets/sbis1.jpg");
const firmName = require("../assets/sbis_logo_4.png"); //1a77b0

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navArray = ["Home", "About", "Services", "Contact"];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const [selectedItem, setSelectedItem] = useState(navArray[0]);

  const handleClick = (name) => {
    setSelectedItem(name);
    document
      .getElementById(name.toLowerCase())
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full">
        <div className="flex bg-bluish h-16">
          <div className="flex items-center w-3/4 h-16">
            <img src={firmName} class="pl-5 h-16" />
          </div>
          <div
            className={`max-sm:hidden max-md:hidden w-1/4 p-2.5 gap-4 flex justify-evenly items-center relative`}
          >
            {navArray.map((name, index) => (
              <div
                key={index}
                className="grid grid-row-2 cursor-pointer"
                onClick={() => handleClick(name)}
              >
                {selectedItem === name ? (
                  <label className="text-black font-bold underline cursor-pointer">
                    {name}
                  </label>
                ) : (
                  <label className="text-white cursor-pointer">{name}</label>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex">
          <div className=" w-full  ">
            <Outlet />
          </div>
        </div>

        {/* {sidebarOpen && (
          <div className="fixed inset-y-0 right-0 z-50 no-scrollbar overflow-auto flex ">
            <div
              className="fixed inset-0  bg-black opacity-50"
              onClick={toggleSidebar}
            />
            <div className=" relative  min-h-full bg-white shadow-lg left-0">
              <div>
                <div className="flex gap-4 p-2 h-auto justify-evenly items-center shadow-md ">
                  Username
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
};
