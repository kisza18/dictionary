import logoImg from "../images/logo.svg";
import arrowDown from "../images/arrow-down.svg";
import moonImg from "../images/moon.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [showOption, setShowOption] = useState(false);
  const [font, setFont] = useState("Open Sans");

  const changeFont = (e) => {
    setFont(e.target.innerHTML);
    setShowOption(false);
  };
  const toggleOption = () => {
    setShowOption(!showOption);
  };

  const changeDark = (e) => {
    if (e.target.checked === true) {
      document.body.classList.add("dark");
      document.body.style.background = "black";
    } else {
      document.body.classList.remove("dark");
      document.body.style.background = "";
    }
  };

  useEffect(() => {
    const body = document.getElementById("root");
    body.style.fontFamily = font;
  });

  return (
    <div className="flex items-center justify-between w-full pt-14 px-5">
      <a href="">
        <img src={logoImg} alt="logo" />
      </a>
      <div className="flex items-center">
        <div className="select pr-5 h-14 flex items-center relative">
          <div
            className="select-controll flex items-center cursor-pointer"
            onClick={toggleOption}
          >
            <span className="dark:text-white">{font}</span>
            <img className="ml-4" src={arrowDown} alt="arrow" />
          </div>

          {showOption && (
            <div className="absolute z-50 bg-white dark:bg-black top-16 -left-10 shadow-2xl dark:shadow-fuchsia-500 p-5 rounded-lg w-36 dark:text-white">
              <ul>
                <li
                  className="mb-3 text-sm cursor-pointer"
                  onClick={changeFont}
                >
                  Open Sans
                </li>
                <li
                  className="mb-3 text-sm cursor-pointer"
                  onClick={changeFont}
                >
                  Josefin Sans
                </li>
                <li className="text-sm cursor-pointer" onClick={changeFont}>
                  Roboto Mono
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="toggle flex items-center ml-6">
          <label className="switch">
            <input type="checkbox" onChange={changeDark} />
            <span className="slider round"></span>
          </label>
          <img className="ml-5" src={moonImg} alt="moon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
