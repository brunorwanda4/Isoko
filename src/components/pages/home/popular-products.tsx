import ProductCard from "../../cards/product-card"

const PopularProducts = () => {
  return (
    <div className=" space-y-2">
      <h2 className="basic-title">Today's big deals</h2>
      <div>
        <ProductCard />
      </div>
    </div>
  )
}

export default PopularProducts