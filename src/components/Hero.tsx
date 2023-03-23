import Image from "next/image";
import React from "react";
import style from "../styles/Hero.module.css";
import cherry from "../assets/Cherry.png";
import heroImage from "../assets/HeroImage.png";
import phone from "../assets/phone.svg";
import pizza from "../assets/p1.jpg";

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.left}>
        <div className={style.cherry}>
          <span>More than Faster</span>
          <Image src={cherry} alt="cherry" width={40} height={25} />
        </div>

        <div className={style.heroText}>
          <span>Be The Fastest </span>
          <span>In Delivering </span>
          <span>
            Your
            <span className="themeTextColor"> Pizza</span>
          </span>
        </div>

        <div className={style.info}>
          Our Mission is to filling your tummy with delicious food and fast with
          and free delivery
        </div>

        <button className={style.button}>Get Started</button>
      </div>

      <div className={style.right}>
        <div className={style.heroImage}>
          <Image
            src={heroImage}
            alt="pizza image"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            priority
          />
        </div>

        <div className={style.contact}>
          <span>Give a call</span>
          <div>
            <Image src={phone} alt="contact image" />
          </div>
        </div>

        <div className={style.pizza}>
          <div>
            <Image src={pizza} alt="pizza image" />
          </div>
          <div className={style.pizzaDetails}>
            <span>Veggie Paradise </span>

            <span>
              <span className="themeTextColor">₹</span>459
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
