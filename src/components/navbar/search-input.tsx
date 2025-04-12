import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <div className="  relative  w-96 h-12">
      <input
        type="text"
        className=" border-2 border-indigo-950 h-full rounded-full w-full px-4"
        placeholder=" Search Every thing ..."
      />
      <div className=" absolute top-1 right-2 cursor-pointer hover:bg-indigo-600 duration-200 bg-red-500 size-10 rounded-full items-center flex justify-center text-white">
        <IoIosSearch size={24} />
      </div>
    </div>
  );
};

export default SearchInput;
