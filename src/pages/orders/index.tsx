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
    </Layout>
  );
};

export default Orders;
