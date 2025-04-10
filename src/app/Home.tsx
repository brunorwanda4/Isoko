import Hero from "../components/pages/home/hero";
import HeroCard from "../components/pages/home/Hero-card";

const HomePage = () => {
  return (
    <div className=" px-4 pt-4">
      <div className=" flex space-x-4">
        <Hero />
        <HeroCard />
      </div>
    </div>
  );
};

export default HomePage;
