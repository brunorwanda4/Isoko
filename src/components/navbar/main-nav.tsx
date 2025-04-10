// import CategoriesToggle from "./categories-toggle";
import AppLogo from "./logo";
import NavCard from "./nav-card";
import SearchInput from "./search-input";

const MainNav = () => {
  return (
    <nav className=" px-2  py-2 border-b flex border-b-zinc-300 items-center justify-between">
      <div className=" flex space-x-4">
        <AppLogo />
        {/* <CategoriesToggle /> */}
      </div>
      <SearchInput />
      <NavCard />
    </nav>
  );
};

export default MainNav;
