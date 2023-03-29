import Image from "next/image";
import React from "react";
import style from "../styles/Header.module.css";
import cartIcon from "../assets/cartIcon.svg";
import Link from "next/link";
import { useAppSelector } from "@/store/reduxHooks";

type Props = {};

const Header = (props: Props) => {
  const { totalItems } = useAppSelector((state) => state.cart);
  return (
    <div className={style.header}>
      <Link href="/" className="logo">
        <span>Kizza</span>
      </Link>

      <ul className={style.menu}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/#menu">
          <li>Menu</li>
        </Link>
        <Link href="">
          <li>Contact</li>
        </Link>
      </ul>

      <div className={style.rightSide}>
        <Link href="/cart">
          <div className={style.cart}>
            <Image src={cartIcon} alt="cart" height={35} width={35} />
            <div className={style.cartBadge}>{totalItems}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
