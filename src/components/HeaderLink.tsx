import { buttonVariants } from "@/lib/utils/ui/button";
import { Link } from "react-router-dom";

type HeaderLinkProps = {
  to: string;
  icon: JSX.Element;
  count: number;
};

const HeaderLink = ({ to, icon, count }: HeaderLinkProps) => (
  <Link
    to={to}
    className={`${buttonVariants({ variant: "ghost" })} relative`}
  >
    {icon}
    <span className="absolute top-1 right-1 text-[15px] w-[17.4px] h-[17.4px] rounded-full bg-orange text-white flex items-center justify-center">
      {count}
    </span>
  </Link>
);

export default HeaderLink;
