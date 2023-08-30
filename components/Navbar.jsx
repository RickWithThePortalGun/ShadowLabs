"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import {menu, close } from "../constants";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return(
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/shadowlabs.png"
        alt="logo"
        className=" rounded-md w-[24px] h-[24px] object-contain"
      />
      <h2 className="text-[20px] gap-[50%] justify-center leading-[30px] text-white">
        shadowlabshq
      </h2>
      {/* <img
        src="./menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      /> */}
      <div className='flex justify-end items-center z-20'>
          <img
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt='menu'
            className='w-[24px] h-[24px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-3xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-[#65c4fa]" : "text-black"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  </motion.nav>
)};

export default Navbar;
