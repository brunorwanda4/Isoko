import { Image6 } from "../../../assets/images";

const HeroCard = () => {
  return (
    <div className="card w-full ">
      <figure>
        <img src={Image6} alt="Shoes" />
      </figure>
      <div className="card-body absolute bg-gradient-to-b bottom-0  from-transparent to-black text-white rounded-b-2xl">
        <h2 className="card-title">
          Hurry! Some of product are taken add some things in your card!
        </h2>
        <button className=" card-title text-indigo-500 btn btn-ghost w-fit ">Shop Now</button>
      </div>
    </div>
  );
};

export default HeroCard;
