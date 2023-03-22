import React from "react";
import style from "../styles/Footer.module.css";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={style.footer}>
      <span>All Right Reserved</span>
      <div className={style.social}>
        <Image src={facebook} alt="facebook" height={40} width={40} />
        <Image src={twitter} alt="twitter" height={40} width={40} />
        <Image src={instagram} alt="instagram" height={40} width={40} />
      </div>
      <div className="logo">
        <span>Kizza</span>
      </div>
    </div>
  );
};

export default Footer;
