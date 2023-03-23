import Image from "next/image";
import React from "react";
import style from "../styles/Services.module.css";
import order from "../assets/s1.png";
import delivery from "../assets/s2.png";
import quality from "../assets/s3.png";

type Props = {};

const services = [
  {
    title: "Easy To Order",
    description: "You only need a few steps in food ordering",
    image: order,
  },
  {
    title: "Fast Delivery",
    description: "Delivery that is always on time even faster",
    image: delivery,
  },
  {
    title: "Number One Quality",
    description: "Not only fast for us, quality is also number one",
    image: quality,
  },
];

const Services = (props: Props) => {
  return (
    <>
      <div className={style.heading}>
        <span>What We Serve</span>
        <span>Your Favorite Food</span>
        <span>Delivery Partner</span>
      </div>
      <div className={style.services}>
        {services.map(({ title, image, description }) => (
          <div className={style.service} key={title}>
            <Image src={image} alt={title} />
            <span className={style.serviceTitle}>{title}</span>
            <span className={style.serviceInfo}>{description}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
