import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

import { Button } from "@/lib/utils/ui/button";
import { Trash } from "lucide-react";

import { TProduct } from "@/constants";
import { formatNumbers } from "@/lib/utils";

const CartProduct = ({ product }: { product: TProduct }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div className="bg-white rounded-[30px] p-5 relative space-y-5">
      <div className="flex items-center gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-32 object-contain rounded-lg"
        />
        <div className="flex flex-col gap-4 mt-5">
          <h2 className="text-[17px] font-medium">{product.name}</h2>
          <p className="text-[15px] font-semibold text-lightgrey">
            {formatNumbers(product.price)} ₽
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between px-5">
        <div className="flex items-center gap-3">
          <Button
            variant="default"
            onClick={() => decreaseAmount(product.id)}
            className="btn"
            disabled={product.amount === 1}
          >
            -
          </Button>
          {product.amount}
          <Button
            variant="default"
            onClick={() => increaseAmount(product.id)}
            className="btn"
          >
            +
          </Button>
        </div>
        <span className="text-[15px] font-semibold">
          {formatNumbers(product.price * product.amount)} ₽
        </span>
      </div>

      <Button
        variant="ghost"
        className="absolute top-0 right-6"
        onClick={() => removeFromCart(product.id)}
      >
        <Trash className="text-[#DF6464]" />
      </Button>
    </div>
  );
};

export default CartProduct;
