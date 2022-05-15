import joinClasses from "helpers/joinClasses";
import navbarItems from "utils/navbar";

export default function Navbar() {
  return (
    <nav className="flex flex-col">
      <div className="flex justify-between bg-black fixed w-full h-[70px] items-center px-10">
        <button className="flex gap-2 text-white items-center">
          <img src="/assets/icons/burger.svg" alt="" />
          <p>Menu</p>
        </button>
        <a href="/">
          <img src="/assets/logo/logo-white.svg" alt="logo" />
        </a>
        <button className="flex gap-2 text-white items-center border-red border-s p-default rounded-full">
          <img
            src="/assets/icons/shopping-bag.svg"
            alt=""
            className="w-[18px]"
          />
          <p>Boutique</p>
        </button>
      </div>
      <div className="h-[130px] flex flex-col bg-black justify-end px-10">
        <div className="w-full h-[60px] border-t border-white flex justify-center items-center">
          <ul className="flex justify-center text-white items-center gap-10 text-[20px] uppercase font-medium">
            {navbarItems.map((item) => (
              <li key={item.name} className="group flex flex-col items-center">
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
  );
}
