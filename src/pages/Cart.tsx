import { useContext } from "react";

import { CartContext } from "@/context/CartContext";
import { Button, buttonVariants } from "@/lib/utils/ui/button";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { formatNumbers } from "@/lib/utils";
import CartProduct from "@/components/CartProduct";

const Cart = () => {
  const { cart, total } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="fixed inset-0 flex justify-center items-center flex-col gap-5 z-[-1]">
        <h1 className="text-[20px] font-semibold text-[#1C1C27]">
          Корзина пуста
        </h1>
        <ShoppingBag className="w-24 h-24  text-[#1C1C27]" />
        <Link
          to="/"
          className={buttonVariants({ variant: "default" })}
        >
          continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="my-2 font-semibold text-[#1C1C27] text-[20px]">Корзина</h1>
      <div className="flex justify-between max-lg:flex-col lg:items-start gap-14">
        <div className="flex-1 space-y-5">
          {cart.map((product) => (
            <CartProduct
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="bg-white rounded-[30px] lg:w-[350px] w-full sticky top-5">
          <div className="flex justify-between p-5">
            <h2 className="text-[15px] font-semibold">ИТОГО</h2>
            <p className="text-[15px] font-semibold">
              ₽ {formatNumbers(total)}
            </p>
          </div>

          <Button className="text-white bg-[#101010] rounded-[20px] py-5 px-10 w-full h-[65px] text-[17px] font-semibold">
            Перейти к оформлению
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
