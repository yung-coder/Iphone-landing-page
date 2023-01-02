"use client";

import { motion, Variants } from "framer-motion";

import styles from "../styles";

import { staggerContainer } from "../utils/motion";

import { useState } from "react";

import { ExploreCard, TitleText, TypingText } from "../components";

import { exploreWorlds } from "../constants";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the World you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => {
            return (
              <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handelClick={setActive}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
