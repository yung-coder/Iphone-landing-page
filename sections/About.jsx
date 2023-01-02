"use client";

import { motion, Variants } from "framer-motion";

import styles from "../styles";

import { TypingText } from "../components";

import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="About Apple" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Every <span className="font-extrabold text-white">Apple</span> product
        is built from the ground up to protect your{" "}
        <span className="font-extrabold text-white">privacy</span>. We don't
        create user profiles, sell personal information or share data with third
        parties to use for marketing or advertising. And apps share only the
        information that you authorise.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[148px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
