import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Categories } from "../../../utils/categories";
import { fakeProducts } from "../../../data/products";

const ProductAside = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const handleCategoryClick = (category: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("category", category);
    navigate({ search: newParams.toString() });
  };

  return (
    <aside className="w-80 border-r border-r-zinc-300 px-4">
      <div>
        <Link to={"/products"} className=" font-medium text-lg">All Categories</Link>
        <ul className="flex flex-col space-y-2 mt-2">
          {Categories.map((item, index) => {
            const isSelected = selectedCategory === item.name;
            const total = fakeProducts.filter((i) => i.category === item.name).length;
            return (
              <li
                key={index}
                className={`btn btn-ghost btn-sm justify-start cursor-pointer ${
                  isSelected ? "bg-zinc-200" : ""
                }`}
                onClick={() => handleCategoryClick(item.name)}
              >
                <div className="flex w-full justify-between items-center">
                  <div className="flex space-x-1 items-center">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-md"
                      checked={isSelected}
                      readOnly
                    />
                    <span className=" text-lg">{item.name}</span>
                  </div>
                  <span className="badge bg-amber-500">{total}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default ProductAside;
