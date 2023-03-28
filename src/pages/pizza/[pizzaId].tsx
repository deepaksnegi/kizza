import Layout from "@/components/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import foodImage from "../../assets/p1.jpg";
import style from "../../styles/Pizza.module.css";
import leftArrow from "../../assets/arrowLeft.png";
import rightArrow from "../../assets/arrowRight.png";
import { menuItems } from "@/assets/data/pizzas";

const variants = ["Small", "Regular", "Large"];

interface FoodItem {
  name: string;
  price: number[];
  image: StaticImageData;
}

type Props = {
  pizza: FoodItem;
};

const Pizza = (props: Props) => {
  const { pizza } = props;
  const { name, image, price } = pizza;

  const [size, setSize] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const handQuantityChange = (hasIncreased: boolean) => {
    if (hasIncreased) {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => (prev - 1 > 0 ? prev - 1 : prev));
    }
  };

  return (
    <Layout>
      <div className={style.pizza}>
        <div className={style.pizzaImage}>
          <Image
            src={image}
            alt={name}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>

        <div className={style.pizzaDetail}>
          <span>{name}</span>
          <span>Some description</span>
          <span>
            <span className="themeTextColor">₹</span>
            {price[size]}
          </span>
          <div className={style.sizes}>
            <span>Size</span>
            <div className={style.variants}>
              {variants.map((variant, index) => (
                <div
                  className={`${style.size} ${
                    size === index ? style.selectedSize : ""
                  }`}
                  key={variant}
                  onClick={() => setSize(index)}
                >
                  {variant}
                </div>
              ))}
            </div>
          </div>

          <div className={style.quantity}>
            <span>Quantity</span>

            <div className={style.counter}>
              <Image
                src={leftArrow}
                alt="left"
                height={20}
                width={20}
                onClick={() => handQuantityChange(false)}
              />
              <span>{quantity}</span>
              <Image
                src={rightArrow}
                alt="left"
                height={20}
                width={20}
                onClick={() => handQuantityChange(true)}
              />
            </div>
          </div>

          <button className={style.add}>Add to Cart</button>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{ pizza: FoodItem }> = (
  context
) => {
  const params = context.params;
  const pizza = menuItems.find((item) => item.id === params?.pizzaId);

  if (!pizza) {
    return {
      notFound: true,
    };
  }

  return {
    props: { pizza },
  };
};

export default Pizza;
