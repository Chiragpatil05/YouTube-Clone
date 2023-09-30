import React from "react";
import { useNavigate } from "react-router-dom";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";
import { useContext } from "react";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div className= {`h-full md:block w-[240px] overflow-y-auto py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0" : "" }`}>
      <div className=" flex px-5 flex-col">
        {categories.map((item) => {
          return (
            // react fragment simply means empty div or tag it act as parent div
            <React.Fragment key={item.name}>

                <LeftNavMenuItem
                  text={item.type === "Home" ? "Home" : item.name}
                  icon={item.icon}
                  action={() => {
                    clickHandler(item.name, item.type);
                    navigate("/");
                  }} // click handler
                  className={`${
                    selectedCategory === item.name ? "bg-white/[0.15]" : ""
                  }`}
                />

              {item.divider && <hr className=" my-5 border-white/[0.2]" />}

            </React.Fragment>
          );
        })}
        <hr className=" my-5 border-white/[0.2]" />

        <div className="text-white/[0.5] text-[15px]">
          Clone by : Chirag Patil
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
