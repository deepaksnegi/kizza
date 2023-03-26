import Image from "next/image";
import React from "react";
import style from "../styles/Header.module.css";
import cartIcon from "../assets/cartIcon.svg";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={style.header}>
      <Link href="/" className="logo">
        <span>Kizza</span>
      </Link>

      <ul className={style.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      <div className={style.rightSide}>
        <div className={style.cart}>
          <Image src={cartIcon} alt="cart" height={35} width={35} />
          <div className={style.cartBadge}>10</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
