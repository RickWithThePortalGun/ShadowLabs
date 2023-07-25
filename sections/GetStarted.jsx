'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex-col gap-8 `}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex justify-center items-center flex-col"
      >
        <TypingText
          title="| How to join our community"
          textStyles="text-center font-bold text-[15px] sm:text-[30px]"
        />
        <TitleText title={<>Follow these steps</>} textStyles="text-center" />
        <div className="mt-[30px] flex flex-col max-w-[370px] w-full gap-[24px]">
          {startingFeatures.map((features, index) => (
            <StartSteps keys={features} number={index + 1} text={features} />
          ))}
        </div>
      </motion.div>
    </motion.div>{' '}
  </section>
);

export default GetStarted;
