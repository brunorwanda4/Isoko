import { useNavigate, useSearchParams } from "react-router-dom";
import { Categories } from "../../../utils/categories";

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
        <h3 className="basic-title">All Categories</h3>
        <ul className="flex flex-col space-y-2 mt-2">
          {Categories.map((item, index) => {
            const isSelected = selectedCategory === item.name;

            return (
              <li
                key={index}
                className={`btn btn-ghost justify-start cursor-pointer ${
                  isSelected ? "bg-zinc-200" : ""
                }`}
                onClick={() => handleCategoryClick(item.name)}
              >
                <div className="flex w-full justify-between items-center">
                  <div className="flex space-x-1 items-center">
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                    </div>
                    <span className="font-medium text-lg">{item.name}</span>
                  </div>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-md"
                    checked={isSelected}
                    readOnly
                  />
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
