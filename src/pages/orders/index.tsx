import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import style from "../../styles/Order.module.css";
import Image from "next/image";
import cooking from "../../assets/cooking.png";
import onway from "../../assets/onway.png";
import billIcon from "../../assets/dollar.svg";
import packageIcon from "../../assets/package.svg";

type Props = {};

const Orders = (props: Props) => {
  const [steps, setSteps] = useState([
    {
      id: "cooking",
      name: "Cooking",
      image: cooking,
    },
    {
      id: "onway",
      name: "OnWay",
      image: onway,
    },
    { id: "delivered", name: "Delivered", image: packageIcon },
  ]);

  const [activeStep, setActiveStep] = useState("cooking");

  useEffect(() => {
    let onwayTimerId = setTimeout(() => setActiveStep("onway"), 5 * 1000);
    let deliveredTimerId = setTimeout(
      () => setActiveStep("delivered"),
      10 * 1000
    );

    return () => {
      clearTimeout(onwayTimerId);
      clearTimeout(deliveredTimerId);
    };
  }, []);

  return (
    <Layout>
      <div className={style.container}>
        <span className={style.heading}>Order In Progress</span>

        <div className={style.details}>
          <div>
            <span>Order Id</span>
            <span>223234</span>
          </div>
          <div>
            <span>Customer Name</span>
            <span>John Doe</span>
          </div>
          <div>
            <span>Phone</span>
            <span>9876543120</span>
          </div>
          <div>
            <span>Method</span>
            <span>Online</span>
          </div>
          <div>
            <span>Total</span>
            <span>1342</span>
          </div>
        </div>

        <div className={style.statusContainer}>
          <div className={style.status}>
            <Image src={billIcon} alt="bill" width={50} height={50} />
            <span>Payment</span>
            {/* <span className={style.pending}>On Delivery</span> */}
            <span className={style.completed}>Completed</span>
          </div>
          {steps.map(({ name, image, id }) => (
            <div className={style.status} key={id}>
              {activeStep === id ? <div className={style.active}></div> : null}
              <Image src={image} alt={name} width={50} height={50} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
