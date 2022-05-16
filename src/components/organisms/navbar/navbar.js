import { ButtonWavesRed, ButtonWavesYellow } from "components/atoms";
import joinClasses from "helpers/joinClasses";
import React from "react";
import navbarItems from "utils/navbar";

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="flex flex-col z-30">
        <div className="flex justify-between bg-black fixed w-full h-[70px] items-center px-10 z-30">
          <button className="flex gap-2 text-white items-center">
            <img src="/assets/icons/burger.svg" alt="" />
            <p>Menu</p>
          </button>
          <a href="/">
            <img src="/assets/logo/logo-white.svg" alt="logo" />
          </a>
          <ButtonWavesRed className="flex gap-2 text-white items-center border-red border-s">
            <img
              src="/assets/icons/shopping-bag.svg"
              alt=""
              className="w-[18px]"
            />
            <p>Boutique</p>
          </ButtonWavesRed>
        </div>
        <div className="h-[130px] flex flex-col bg-black justify-end px-10">
          <div className="w-full h-[60px] border-t border-white flex justify-center items-center">
            <ul className="flex justify-center text-white items-center gap-10 text-[20px] uppercase font-medium">
              {navbarItems.map((item) => (
                <li
                  key={item.name}
                  className="group flex flex-col items-center"
                >
                  <a href={item.path}>{item.name}</a>
                  <div
                    className={joinClasses(
                      "h-[2px] w-0 bg-white transition-all group-hover:w-full",
                      item.active && "w-[32px]"
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <ul className="fixed right-0 top-1/3 flex flex-col gap-5 z-30">
        <li>
          <button className="w-[320px] bg-red rounded-l-full py-3 px-8 translate-x-[65%] hover:translate-x-0 transition-all flex items-center gap-10 hover:bg-yellow text-white hover:text-red">
            <svg
              width="44"
              height="42"
              viewBox="0 0 44 42"
              className="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 38.5C34.1495 38.5 44 29.8815 44 19.25C44 8.6185 34.1495 0 22 0C9.8505 0 0 8.6185 0 19.25C0 24.09 2.04325 28.5175 5.4175 31.9C5.15075 34.694 4.27075 37.7575 3.29725 40.0565C3.08 40.568 3.50075 41.14 4.048 41.052C10.252 40.0345 13.9397 38.4725 15.543 37.6585C17.6493 38.2203 19.8201 38.5032 22 38.5V38.5Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-md font-medium">Livechat</p>
          </button>
        </li>
        <li>
          <button className="w-[320px] bg-red rounded-l-full py-3 px-8 translate-x-[65%] hover:translate-x-0 transition-all flex items-center gap-10 hover:bg-yellow  text-white hover:text-red">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33 11H29.3333C29.3333 6.94829 26.0516 3.66663 22 3.66663C17.9483 3.66663 14.6666 6.94829 14.6666 11H11C8.98331 11 7.33331 12.65 7.33331 14.6666V36.6666C7.33331 38.6833 8.98331 40.3333 11 40.3333H33C35.0166 40.3333 36.6666 38.6833 36.6666 36.6666V14.6666C36.6666 12.65 35.0166 11 33 11ZM18.3333 18.3333C18.3333 19.3416 17.5083 20.1666 16.5 20.1666C15.4916 20.1666 14.6666 19.3416 14.6666 18.3333V14.6666H18.3333V18.3333ZM22 7.33329C24.0166 7.33329 25.6666 8.98329 25.6666 11H18.3333C18.3333 8.98329 19.9833 7.33329 22 7.33329ZM29.3333 18.3333C29.3333 19.3416 28.5083 20.1666 27.5 20.1666C26.4916 20.1666 25.6666 19.3416 25.6666 18.3333V14.6666H29.3333V18.3333Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-md font-medium">Souvenirs</p>
          </button>
        </li>
        <li>
          <button className="w-[320px] bg-red rounded-l-full py-3 px-3 translate-x-[65%] transition-all flex gap-10 hover:bg-yellow">
            <div className="flex">
              <img
                src="/assets/icons/arrow-switch.svg"
                alt=""
                className="rotate-180 translate-x-[3px]"
              />
              <img src="/assets/icons/french-flag.svg" alt="france" />
              <img
                src="/assets/icons/arrow-switch.svg"
                alt=""
                className="translate-x-[-3px]"
              />
            </div>
          </button>
        </li>
      </ul>
    </React.Fragment>
  );
}
