import { TProduct } from "@/constants";
import { CartContext } from "@/context/CartContext";
import { formatNumbers } from "@/lib/utils";
import { Button } from "@/lib/utils/ui/button";
import { Star } from "lucide-react";
import { useContext } from "react";

const Product = ({ product }: { product: TProduct }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className=" h-[407px] bg-white rounded-[30px] p-[10px] shadow-md flex flex-col justify-between">
      <div className="flex-1 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-52 h-w-52 object-contain"
        />
      </div>
      <div className="mt-5 px-[10px] space-y-3">
        <div className="flex justify-between relative">
          <h2 className="text-[17px] font-semibold">{product.name}</h2>
          <p className="text-[17px] font-semibold text-orange mr-4">
            {product.price} ₽
          </p>
          {product.originalPrice && (
            <p className="absolute -bottom-3 right-6 text-[13px] font-semibold text-lightorange line-through">
              {product?.originalPrice} ₽
            </p>
          )}
        </div>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2 opacity-70">
            <Star
              fill="orange"
              strokeWidth={0}
            />
            <span className="text-[17px] font-semibold text-lightgrey">
              {product.rating}
            </span>
          </p>
          <Button
            variant="ghost"
            className="text-[17px] font-semibold"
            onClick={() => addToCart(product.id, product)}
          >
            Купить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
