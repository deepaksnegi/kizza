import { menuItems } from "@/assets/data/pizzas";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import style from "../../styles/Cart.module.css";
import removeIcon from "../../assets/remove.svg";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { emptyCart, removeFromCart } from "@/store/cartSlice";
import cartIcon from "../../assets/cartIcon.svg";
import { useRouter } from "next/router";

type Props = {};

const Cart = (props: Props) => {
  const dispatch = useAppDispatch();
  const { items, total, totalItems } = useAppSelector((state) => state.cart);

  const router = useRouter();
  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleOrder = () => {
    dispatch(emptyCart());
    router.push("/orders");
  };

  return (
    <Layout>
      {items.length > 0 ? (
        <div className={style.container}>
          <div className={style.cartItems}>
            {items.map(({ image, name, id, size, price, total, quantity }) => (
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
                    onClick={() => handleRemoveItem(id)}
                  />
                  <span className={style.price}>₹ {total}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={style.checkout}>
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
              <button onClick={handleOrder}>Pay on Delivery</button>
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
