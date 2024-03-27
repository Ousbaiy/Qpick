import { products } from "@/constants";
import Product from "@/components/Product";

const Home = () => {
  return (
    <div>
      <h1 className="text-lg text-lightgrey my-2">Наушники</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
