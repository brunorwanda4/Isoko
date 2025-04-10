import CategoriesToggle from "./categories-toggle";
import AppLogo from "./logo";

const MainNav = () => {
  return (
    <nav className=" px-2  py-2 border-b-2 border-b-zinc-300">
      <div className=" flex space-x-4">
        <AppLogo />
        <CategoriesToggle />
      </div>
    </nav>
  );
};

export default MainNav;
