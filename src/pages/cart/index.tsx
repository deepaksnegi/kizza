import { menuItems } from "@/assets/data/pizzas";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import style from "../../styles/Cart.module.css";
import removeIcon from "../../assets/remove.svg";
type Props = {};

const Cart = (props: Props) => {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.details}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Pizza</th>
                <th>Name</th>
                <th>Size</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={style.tbody}>
              {menuItems.map(({ image, name, id, price }) => (
                <tr key={id}>
                  <td className={style.tdImage}>
                    <Image src={image} alt={name} />
                  </td>
                  <td>{name}</td>
                  <td>Small</td>
                  <td>{price[0]}</td>
                  <td>120</td>
                  <td>500</td>
                  <td>
                    <Image src={removeIcon} alt="remove" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={style.cart}>
          <span>Cart</span>
          <div className={style.cartDetails}>
            <div>
              <span>Items</span>
              <span>5</span>
            </div>
            <div>
              <span>Total</span>
              <span>500</span>
            </div>
          </div>

          <div className={style.paymentOptions}>
            <button>Pay on Delivery</button>
            <button>Pay Now</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
