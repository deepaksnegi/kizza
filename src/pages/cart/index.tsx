import Layout from "@/components/Layout";
import React from "react";
import style from "../../styles/Cart.module.css";
type Props = {};

const Cart = (props: Props) => {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.details}>
          <table className={style.table}>
            <thead>
              <th>Pizza</th>
              <th>Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </thead>
            <tbody className={style.tbody}></tbody>
          </table>
        </div>
        <div className={style.cart}></div>
      </div>
    </Layout>
  );
};

export default Cart;
