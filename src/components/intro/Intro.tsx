import { motion } from "framer-motion"
import { BsArrowRightShort } from "react-icons/bs";
// import { AiOutlineArrowRight } from "react-icons/ai";
// import Fade from "react-reveal/Fade";
// // const Fade = require("react-reveal/Fade");
import styles from './intro.module.scss';


export const Intro: React.FC<{}> = () => {
  return (
    <motion.section
      className={styles.intro_section}
      id="home"
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <motion.div className={styles.overlay_bg}>
        <motion.div className={styles.container} data-aos="fade-up" data-aos-delay="400">
          {/* <Fade bottom> */}
            <motion.h1 className={styles.intro_title}>
              Etês vous passionné <br />
              de la technologie ?
            </motion.h1>
          {/* </Fade> */}
          {/* <Fade bottom> */}
            <motion.p className={styles.intro_subtitle}>
              La solution c'est nous! SATEC - Congo sarl.
            </motion.p>
          {/* </Fade> */}
          {/* <Fade bottom> */}
          <a href="#services">
            <motion.button className={styles.intro_btn} type="submit">
              Nos Services <BsArrowRightShort/>
            </motion.button>
            </a>
          {/* </Fade> */}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

