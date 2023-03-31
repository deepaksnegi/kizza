import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import style from "../../styles/Cart.module.css";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { emptyCart, removeFromCart } from "@/store/cartSlice";
import cartIcon from "../../assets/cartIcon.svg";
import { useRouter } from "next/router";
import CartItem from "@/components/CartItem";

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

  const emptyCartMessage = (
    <div className={style.emptyCart}>
      <div className={style.emptyCartCard}>
        <Image src={cartIcon} alt="cart" height={40} width={40} />
        <span>Your cart is empty </span>
        <span>Look like you have not added anything to your cart.</span>
        <span>Go ahead and explore trending.</span>
      </div>
    </div>
  );

  return (
    <Layout>
      {items.length > 0 ? (
        <div className={style.container}>
          <div className={style.cartItems}>
            {items.map((item) => (
              <CartItem pizza={item} onRemoveItem={handleRemoveItem} />
            ))}
          </div>
          <form className={style.checkout}>
            <span>Checkout</span>
            <div className={style.checkoutForm}>
              <input type="text" name="name" placeholder="Name*" required />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                required
              />
              <textarea
                name="address"
                cols={8}
                rows={3}
                placeholder="Address*"
                required
              ></textarea>
            </div>
            <div className={style.cartDetails}>
              <div>
                <span>Items</span>
                <span>{totalItems}</span>
              </div>
              <div>
                <span>Total</span>
                <span>₹ {total}</span>
              </div>
            </div>

            <div className={style.paymentOptions}>
              <button onClick={handleOrder}>Pay on Delivery</button>
              <button>Pay Now</button>
            </div>
          </form>
        </div>
      ) : (
        emptyCartMessage
      )}
    </Layout>
  );
};

export default Cart;
