import logoImg from "../images/logo.svg";
import arrowDown from "../images/arrow-down.svg";
import moonImg from "../images/moon.svg";
import { useState } from "react";

const Header = () => {
  const [showOption, setShowOption] = useState(false);

  const toggleOption = () => {
    setShowOption(!showOption);
  };

  return (
    <div className="flex items-center justify-between w-full mt-10 px-5">
      <img src={logoImg} alt="logo" />
      <div className="flex items-center">
        <div className="select pr-5 h-14 flex items-center relative">
          <div
            className="select-controll flex items-center cursor-pointer"
            onClick={toggleOption}
          >
            <span>Open Sans</span>
            <img className="ml-4" src={arrowDown} alt="arrow" />
          </div>

          {showOption && (
            <div className="absolute top-16 -left-10 shadow-2xl p-5 rounded-lg w-36">
              <ul>
                <li className="mb-2">Open Sans</li>
                <li className="mb-2">Josefin Sans</li>
                <li>Roboto Mono</li>
              </ul>
            </div>
          )}
        </div>
        <div className="toggle flex items-center ml-6">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <img className="ml-5" src={moonImg} alt="moon" />
        </div>
      </div>
    </div>
  );
};

export default Header;