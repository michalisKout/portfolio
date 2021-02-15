import { FC } from "react";
import Link from "next/link";

interface Props {
  wrapperClassName?: string;
  itemClassName?: string;
}
const NavItems: FC<Props> = ({
  wrapperClassName = "nav-items--wrapper",
  itemClassName = "nav-item",
}) => (
  <div className={`${wrapperClassName}`}>
    <div className={`${itemClassName}`}>
      <Link href={"/"}>Home</Link>
    </div>
    <div className={`${itemClassName}`}>
      <Link href={"/portfolio"}>Portfolio</Link>
    </div>
    <div className={`${itemClassName}`}>
      <Link href={"/experience"}>Experience</Link>
    </div>
    <div className={`${itemClassName}`}>
      <Link href={"/contact"}>Contact</Link>
    </div>
  </div>
);

export default NavItems;
