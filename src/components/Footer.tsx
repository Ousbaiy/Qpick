import { socials } from "@/constants";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container ">
      <div className="grid grid-cols-2 md:grid-cols-4 p-5 gap-5 bg-white rounded-tl-[30px] rounded-tr-[30px] mt-5 shadow-md">
        <Link
          to="/"
          className="font-bold text-[25px]"
        >
          QPICK
        </Link>

        <div className="flex flex-col items-center">
          <p>Избранное</p>
          <p>Корзина</p>
          <p>Контакты</p>
        </div>

        <div className="flex flex-col justify-between items-center">
          <span>Условия сервиса</span>
          <div className="flex items-center gap-3">
            <Globe className="size-[20px]" />
            <p className="text-orange">Рус</p>
            <p>Eng</p>
          </div>
        </div>

        <div className="flex md:justify-end gap-5">
          {socials.map(({ id, icon, link }) => (
            <Link
              key={id}
              to={link}
              target="_blank"
              title={link}
            >
              <img
                src={icon}
                alt={icon}
                className="object-contain w-7 h-7"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
