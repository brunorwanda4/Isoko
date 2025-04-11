import { Link } from "react-router-dom";
import { Categories } from "../../../utils/categories";

const ProductAside = () => {
  return (
    <aside className=" w-80 h-screen border-r border-r-zinc-300 px-4">
      <div>
        <h3 className=" basic-title">All Categories</h3>
        <ul className=" flex flex-col space-y-2 mt-2">
          {Categories.map((item, index) => {
            return (
              <li key={index} className=" btn btn-ghost justify-start">
                <Link
                  to={`/products?category=${item.name}`}
                  className=" flex w-full justify-between items-center"
                >
                  <div className="flex space-x-1 items-center">
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img
                          src={item.image}
                          alt="Tailwind-CSS-Avatar-component"
                        />
                      </div>
                    </div>
                    <span className=" font-medium text-lg">{item.name}</span>
                  </div>
                  <input type="checkbox" className="checkbox checkbox-md" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default ProductAside;
