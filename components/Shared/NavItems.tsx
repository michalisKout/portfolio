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
    <span className={`${itemClassName}`}>
      <Link href={"/"}>Home</Link>
    </span>
    <span className={`${itemClassName}`}>
      <Link href={"/portfolio"}>Portfolio</Link>
    </span>
    <span className={`${itemClassName}`}>
      <Link href={"/experience"}>Experience</Link>
    </span>
    <span className={`${itemClassName}`}>
      <Link href={"/contact"}>Contact</Link>
    </span>
  </div>
);

export default NavItems;
