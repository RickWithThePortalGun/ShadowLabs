"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`} id="connect">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText
        title="| Connect with developers around the World"
        textStyles="text-center text-[15px] sm:text-[30px]"
      />{" "}
      <TitleText
        title={
          <>
            Get to work with other developers from around the world and gain
            real-world experience
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.jpg" alt="people" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.jpg" alt="people" className="w-full h-full rounded-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute blur hover:blur-none top-1/4 left-[10%] sm:w-[220px] w-[110px] h-[100px] sm:h-[200px] p-[6px] rounded-[20px] bg-[#5d6680]">
          <div className="justify-center items-center flex flex-col p-1 bg-[rgba(0,0,0,0.5)] rounded-[20px]">
            <p className="font-bold text-white text-[12.5px] sm:text-[18px] p-1">
              Frontend
            </p>
            <img
              src="Frontend.png"
              alt="people"
              className="w-full h-full object-cover rounded-[20px] p-1"
            />
          </div>
        </div>
        <div className="absolute blur hover:blur-none top-[10%] left-[60%] sm:w-[220px] w-[110px] h-[100px] sm:h-[200px] p-[6px] rounded-[20px] bg-[#5d6680]">
          <div className="justify-center items-center flex flex-col p-1 bg-[rgba(0,0,0,0.5)] rounded-[20px]">
            <p className="font-bold text-white text-[12.5px] sm:text-[18px] p-1">
              Backend
            </p>
            <img
              src="Backend.png"
              alt="people"
              className="w-full h-full object-cover rounded-[20px] p-1"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);
export default World;
