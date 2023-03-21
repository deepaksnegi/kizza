import Image from "next/image";
import React from "react";
import style from "../styles/Header.module.css";
import logo from "../assets/Logo.png";
import cartIcon from "../assets/cartIcon.svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <span>Kizza</span>
      </div>

      <ul className={style.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      <div className={style.rightSide}>
        <div className={style.cart}>
          <Image src={cartIcon} alt="cart" />
          <div className={style.cartBadge}>10</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
