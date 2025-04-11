import { Link } from "react-router-dom";
import { Image3 } from "../../../assets/images";
import { PiShoppingBagOpenFill } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="  bg-indigo-200 flex flex-row p-4 card hover hover:shadow-lg hover:border hover:border-indigo-4 duration-150">
      <div className=" w-96 grid place-content-center">
        <h2 className=" font-light text-center text-4xl">
          Make Shopping Easy 👜 Done Ever
        </h2>
        <p className=" text-lg font-medium mt-2">
          Every Thing you need in market you have it here{" "}
        </p>
        <div className=" w-full justify-center  flex mt-6 group">
          <Link to={"/products"} className="">
            <button className=" btn btn-lg rounded-full w-fit bg-indigo-500 text-white border-indigo-600 group">
              View all products
              <div className=" animate-spin group-hover:animate-none duration-200 ">
                <PiShoppingBagOpenFill size={24} />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className="avatar">
        <div className="mask mask-squircle w-80">
          <img src={Image3} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
