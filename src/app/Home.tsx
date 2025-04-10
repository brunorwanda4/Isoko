import Hero from "../components/pages/home/hero";
import HeroCard from "../components/pages/home/Hero-card";
import PopularCategories from "../components/pages/home/popular-categories";

const HomePage = () => {
  return (
    <div className=" px-4 pt-4 space-y-2 ">
      <div className=" flex space-x-4">
        <Hero />
        <HeroCard />
      </div>
      <PopularCategories />
      <div className=" h-screen"></div>
    </div>
  );
};

export default HomePage;
