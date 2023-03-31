import { Item } from "@/types/Cart";
import Image from "next/image";
import React from "react";
import style from "../styles/Cart.module.css";
import removeIcon from "../../assets/remove.svg";

type Props = {
  pizza: Item;
  onRemoveItem: (id: string) => void;
};

const CartItem = (props: Props) => {
  const { pizza, onRemoveItem } = props;
  const { image, name, id, size, price, total, quantity } = pizza;
  return (
    <div className={style.cartItem}>
      <div className={style.image}>
        <Image src={image} alt={name} height={160} width={160} />
      </div>
      <div className={style.description}>
        <span>{name}</span>
        <div className={style.quantity}>
          <span>{size}</span>
          <span>
            {quantity} x {price}
          </span>
        </div>
      </div>
      <div className={style.priceContainer}>
        <Image
          src={removeIcon}
          alt="remove"
          className={style.removeIcon}
          height={40}
          width={40}
          onClick={() => onRemoveItem(id)}
        />
        <span className={style.price}>₹ {total}</span>
      </div>
    </div>
  );
};

export default CartItem;
