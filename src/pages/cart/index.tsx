import { menuItems } from "@/assets/data/pizzas";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import style from "../../styles/Cart.module.css";
import removeIcon from "../../assets/remove.svg";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { removeFromCart } from "@/store/cartSlice";
import cartIcon from "../../assets/cartIcon.svg";
type Props = {};

const Cart = (props: Props) => {
  const dispatch = useAppDispatch();
  const { items, total, totalItems } = useAppSelector((state) => state.cart);

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Layout>
      {items.length > 0 ? (
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
                {items.map(({ image, name, id, price, total, quantity }) => (
                  <tr key={id}>
                    <td className={style.tdImage}>
                      <Image src={image} alt={name} height={160} width={160} />
                    </td>
                    <td>{name}</td>
                    <td>Small</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                    <td>{total}</td>
                    <td onClick={() => handleRemoveItem(id)}>
                      <Image
                        src={removeIcon}
                        alt="remove"
                        className={style.removeIcon}
                        height={40}
                        width={40}
                      />
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
                <span>{totalItems}</span>
              </div>
              <div>
                <span>Total</span>
                <span>{total}</span>
              </div>
            </div>

            <div className={style.paymentOptions}>
              <button>Pay on Delivery</button>
              <button>Pay Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.emptyCart}>
          <div className={style.emptyCartCard}>
            <Image src={cartIcon} alt="cart" height={40} width={40} />
            <span>Your cart is empty </span>
            <span>Look like you have not added anything to your cart.</span>
            <span>Go ahead and explore trending.</span>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
