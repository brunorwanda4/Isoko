import Hero from "../components/pages/home/hero";
import HeroCard from "../components/pages/home/Hero-card";
import PopularCategories from "../components/pages/home/popular-categories";
import PopularProducts from "../components/pages/home/popular-products";

const HomePage = () => {
  return (
    <div className=" px-4 pt-4 space-y-2 ">
      <div className=" flex space-x-4">
        <Hero />
        <HeroCard />
      </div>
      <PopularCategories />
      <PopularProducts />
    </div>
  );
};

export default HomePage;
