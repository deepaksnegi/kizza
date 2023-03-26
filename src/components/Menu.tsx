import React from "react";
import style from "../styles/Menu.module.css";
import { menuItems } from "../assets/data/pizzas";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className={style.menu}>
      <div className={style.heading}>
        <span>Our Menu</span>
        <span>Menu That Always</span>
        <span>Make you Fall In Love</span>
      </div>

      <div className={style.items}>
        {menuItems.map(({ id, name, image, price }) => (
          <Link href={`/pizza/${id}`} className={style.item} key={id}>
            <div className={style.itemImage}>
              <Image src={image} alt={name} />
            </div>
            <span>{name}</span>
            <span>
              <span className="themeTextColor">₹</span>
              {price[2]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
