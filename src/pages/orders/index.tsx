import Layout from "@/components/Layout";
import React, { useEffect, useRef, useState } from "react";
import style from "../../styles/Order.module.css";
import Image from "next/image";
import cooking from "../../assets/cooking.png";
import onway from "../../assets/onway.png";
import billIcon from "../../assets/dollar.svg";
import packageIcon from "../../assets/package.svg";
import { Order } from "@/types/Order";

type Props = {};

const Orders = (props: Props) => {
  const [steps, setSteps] = useState([
    {
      id: "cooking",
      name: "Cooking",
      image: cooking,
      status: "active",
    },
    {
      id: "onway",
      name: "OnWay",
      image: onway,
      status: "pending",
    },
    {
      id: "delivered",
      name: "Delivered",
      image: packageIcon,
      status: "pending",
    },
  ]);

  let activeStepIndex = 0;

  const [order, setOrder] = useState<Order>();

  const id = useRef(Math.floor(Math.random() * 100) + 1);

  useEffect(() => {
    const storedOrder = localStorage.getItem("order");
    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
    }
  }, []);

  useEffect(() => {
    let timeId: NodeJS.Timer;

    timeId = setInterval(() => {
      if (activeStepIndex >= steps.length) {
        return clearInterval(timeId);
      }

      const updatedSteps = steps.map((step, index) => {
        if (index === activeStepIndex) {
          step.status = "completed";
        }

        if (index === activeStepIndex + 1) {
          step.status = "active";
        }
        return step;
      });
      setSteps(updatedSteps);
      activeStepIndex++;
    }, 5 * 1000);

    return () => {
      clearInterval(timeId);
    };
  }, []);

  return (
    <Layout>
      {order ? (
        <div className={style.container}>
          <span className={style.heading}>Order In Progress</span>

          <div className={style.details}>
            <div>
              <span>Order Id</span>
              <span>{id.current.toString().padStart(2, "0")}</span>
            </div>
            <div>
              <span>Customer Name</span>
              <span>{order?.name}</span>
            </div>
            <div>
              <span>Phone</span>
              <span>{order?.phone}</span>
            </div>
            <div>
              <span>Method</span>
              <span>
                {order?.paymentOption === "payNow" ? "Online" : "On Delivery"}
              </span>
            </div>
            <div>
              <span>Total</span>
              <span>{order?.total}</span>
            </div>
          </div>

          <div className={style.statusContainer}>
            <div className={style.status}>
              <Image src={billIcon} alt="bill" width={50} height={50} />
              <span>Payment</span>
              {order?.paymentOption === "payNow" ? (
                <span className={style.completed}>Completed</span>
              ) : (
                <span className={style.pending}>On Delivery</span>
              )}
            </div>
            {steps.map(({ name, image, id, status }) => (
              <div className={style.status} key={id}>
                {status === "active" ? <div className={style.active} /> : null}
                <Image src={image} alt={name} width={50} height={50} />
                <span>{name}</span>
                {status === "completed" ? (
                  <span className={style.completed}>Completed</span>
                ) : (
                  <span className={style.pending}>Pending</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </Layout>
  );
};

export default Orders;
