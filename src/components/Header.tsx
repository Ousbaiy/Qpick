import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "@/context/CartContext";
import HeaderLink from "./HeaderLink";

import { Heart, ShoppingCart } from "lucide-react";

const Header = () => {
  const { itemAmount } = useContext(CartContext);
  return (
    <header className="container flex items-center justify-between h-[60px] z-10">
      <Link
        to="/"
        className="font-bold text-[25px]"
      >
        QPICK
      </Link>

      <nav className="flex items-center">
        <HeaderLink
          to="/"
          icon={<Heart className="text-lightgrey" />}
          count={0}
        />
        <HeaderLink
          to="/cart"
          icon={<ShoppingCart className="text-lightgrey" />}
          count={itemAmount}
        />
      </nav>
    </header>
  );
};

export default Header;
