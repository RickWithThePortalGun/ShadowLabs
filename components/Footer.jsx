"use client";

import { footerVariants } from "../utils/motion";
import styles from "../styles";
import { motion } from "framer-motion";
import {socials } from '../constants';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative `}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
    <div className="flex items-center justify-between flex-wrap gap-5">
    <h4 className="font-bold md:text-[64px] text-[44px] text-white">
      Join the community
    </h4>
    <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
    <img src="/app.png" alt="" className="w-[40px] object-contain" />
    <span className="font-bold text-[20px] text-white">
    Shadow Labs
    </span>
    </button>
    </div>

    <div className="flex flex-col">
      <div className="mb-[50px] h-[2px] bg-white opacity-10"/>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <a href="https://discord.gg/WTKKZypq">
      <h4 className="font-bold text-[24px] text-white">
        Shadow Labs
      </h4>
      </a>
      <p className="font-normal text-[14px] text-white opacity-50 ">
      Copyright ©️ 2023 Shadow Labs. All rights reserved.
      </p>
      <div className="flex gap-4">
      {socials.map((social) => (
        <img src={social.url} key={social.name} alt={social.name} className="w-[24px] h-[24px] object-contain cursor-pointer" />
      ))}
      </div>
      </div>
    </div>
    </div>
  </motion.footer>
);

export default Footer;
