'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TypingText, ExploreCard, TitleText } from '../components';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('skillset-1');
  return (
    <section className={`${styles.paddings} `} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Skillsets" textStyles="text-center text-[30px]" />
        <TitleText
          title={(
            <>
              Our developers are of these <br className="md:block hidden" />
              skillsets
            </>
          )}
          textStyles="text-center"
        />
        <div className="mt-[50px] gap-5 flex lg:flex-row flex-col min-h-[120vh]">
          {exploreWorlds.map((skillset, index) => (
            <ExploreCard
              key={skillset.id}
              {...skillset}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
