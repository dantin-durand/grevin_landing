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
        <button className="flex gap-2 text-white items-center">
          <img src="/assets/icons/shopping-bag.svg" />
          <p>Boutique</p>
        </button>
      </div>
    </nav>
  );
}
