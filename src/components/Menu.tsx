import React from "react";
import style from "../styles/Menu.module.css";
import deluxePizza from "../assets/p1.jpg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const menuItems = [
  {
    name: "Deluxe Pizza",
    price: [170, 250, 300],
    image: deluxePizza,
  },
  {
    name: "Italian Pizza",
    price: [160, 230, 290],
    image: deluxePizza,
  },
  {
    name: "Deluxe Pizza",
    price: [170, 250, 300],
    image: deluxePizza,
  },
  {
    name: "Deluxe Pizza",
    price: [170, 250, 300],
    image: deluxePizza,
  },
  {
    name: "Deluxe Pizza",
    price: [170, 250, 300],
    image: deluxePizza,
  },
  {
    name: "Deluxe Pizza",
    price: [170, 250, 300],
    image: deluxePizza,
  },
  {
    name: "Deluxe Pizza",
    price: [170, 250, 300],
    image: deluxePizza,
  },
];

const Menu = (props: Props) => {
  return (
    <div className={style.menu}>
      <div className={style.heading}>
        <span>Our Menu</span>
        <span>Menu That Always</span>
        <span>Make you Fall In Love</span>
      </div>

      <div className={style.items}>
        {menuItems.map(({ name, image, price }) => (
          <Link href={`/item/${name}`} className={style.item}>
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
