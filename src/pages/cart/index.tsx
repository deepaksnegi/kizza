import Layout from "@/components/Layout";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import style from "../../styles/Cart.module.css";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { emptyCart, removeFromCart } from "@/store/cartSlice";
import cartIcon from "../../assets/cartIcon.svg";
import { useRouter } from "next/router";
import CartItem from "@/components/CartItem";
import { Order } from "@/types/Order";

type Props = {};

const Cart = (props: Props) => {
  const dispatch = useAppDispatch();
  const { items, total, totalItems } = useAppSelector((state) => state.cart);

  const [order, setOrder] = useState<Order>({
    name: "",
    phone: "",
    address: "",
    paymentOption: "payOnDelivery",
    total,
  });

  const router = useRouter();

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleFormChange = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLFormElement;

    if (target.name === "phone" && !RegExp("[0-9]").test(target.value)) {
      return;
    }

    setOrder({ ...order, [target.name]: target.value });
  };

  const handleOrder = (event: React.FormEvent) => {
    event.preventDefault();
    window !== undefined &&
      localStorage.setItem("order", JSON.stringify(order));
    router.push("/orders");
    dispatch(emptyCart());
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
              <CartItem
                pizza={item}
                onRemoveItem={handleRemoveItem}
                key={item.id}
              />
            ))}
          </div>
          <form
            className={style.checkout}
            onChange={handleFormChange}
            onSubmit={handleOrder}
          >
            <span>Checkout</span>
            <div className={style.checkoutForm}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={order.name}
                max={50}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={order.phone}
                required
                maxLength={10}
              />
              <textarea
                name="address"
                cols={8}
                rows={3}
                placeholder="Address*"
                value={order.address}
                maxLength={300}
                required
              ></textarea>
              <div className={style.paymentOptions}>
                <label>Pay on Delivery</label>
                <input
                  type="radio"
                  name="paymentOption"
                  value="payOnDelivery"
                  checked={order.paymentOption === "payOnDelivery"}
                />
                <label>Pay Now</label>
                <input
                  type="radio"
                  name="paymentOption"
                  value="payNow"
                  checked={order.paymentOption === "payNow"}
                />
              </div>
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

            <button type="submit" className={style.order}>
              Order
            </button>
          </form>
        </div>
      ) : (
        emptyCartMessage
      )}
    </Layout>
  );
};

export default Cart;
