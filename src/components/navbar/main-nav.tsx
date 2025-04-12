import { Link } from "react-router-dom";
import CategoriesToggle from "./categories-toggle";
import AppLogo from "./logo";
import NavCard from "./nav-card";
import SearchInput from "./search-input";
import { PiShoppingBagOpenFill, PiShoppingCart } from "react-icons/pi";

const MainNav = () => {
  return (
    <nav className=" px-2  py-2 border-b flex border-b-zinc-300 fixed max-h-16 bg-white z-50 w-full items-center justify-between">
      <div className=" flex space-x-4 items-center">
        <AppLogo noName />
        <CategoriesToggle />
        <Link to={"/products"} className=" flex space-x-1">
          <PiShoppingBagOpenFill size={24} /> All Products
        </Link>
        <Link to={"/card"} className=" bnt btn-ghost grayscale flex">
          <PiShoppingCart size={24} /> Cart
        </Link>
      </div>
      <div className=" flex space-x-2">
        <SearchInput />
        <NavCard />
      </div>
    </nav>
  );
};

export default MainNav;
