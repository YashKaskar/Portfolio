import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
    <div
      className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Don't forget to give your</p>
          <h2 className={styles.sectionHeadText}>FeedBacks</h2>
          <p></p>
      </motion.div>
    </div>
  </div>
  );
};

export default SectionWrapper (Feedbacks, '');
