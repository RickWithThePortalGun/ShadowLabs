'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import {
  textVariant,
  staggerContainer,
  slideIn,
  textVariant2,
} from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      inital="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ type: 'tween', duration: 1, delay: 1, ease: 'easeOut' }}
          whileInView="show"
          className={`${styles.heroHeading}`}
        >
          <div className={styles.heroDText} />
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          initial="hidden"
          whileInView="show"
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.heroHeading}`}>SHADOW LABS</h1>
        </motion.div>
        <motion.h4
          variants={textVariant(1.2)}
          initial="hidden"
          whileInView="show"
          className="font-semibold lg:text-[50px] md:text-[30px] sm:text-[22px] text-[20px] lg:leading-[120px] md:leading-[114.4px] sm:leading-[50.4px] leading-[55.4px] text-white"
        >
          a developer-focused community
        </motion.h4>
        <motion.h1
          variants={textVariant(1.1)}
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ type: 'tween', delay: 1, duration: 1, ease: 'easeOut' }}
          whileInView="show"
          className="z-20"
        >
          <div className={`${styles.heroDText} transform -rotate-180`} />
        </motion.h1>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.5, 1)}
        initial="hidden"
        whileInView="show"
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient blur rounded-tl-[140px] rounded-bl-[140px] -top-[30px] " />
        <img
          src="./cover.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] rounded-bl-[140px] relative"
        />

        <a
          href="https://discord.gg/WTKKZypq"
          className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 "
        >
          <motion.div className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] bg-white rounded-full flex flex-col items-center justify-center shadow-lg ">
            <motion.img
              initial="hidden"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              src="/app.png"
              alt=""
              className="sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] "
            />
          </motion.div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
