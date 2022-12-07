import { motion } from "framer-motion"
// import Fade from "react-reveal/Fade";
// // const Fade = require("react-reveal/Fade");
import styles from './intro.module.scss';
// import './intro.scss';


export const Intro: React.FC<{}> = () => {
  return (
    <motion.section
      className={styles.intro_section}
      id="home-section"
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <motion.div className={styles.overlay_bg}>
        <div className={styles.container} data-aos="fade-up" data-aos-delay="400">
              {/* <Fade bottom> */}
                <h1 className={styles.intro_title}>
                  Etês vous passionné <br />
                  de la technologie ?
                </h1>
              {/* </Fade> */}
              {/* <Fade bottom> */}
                <p className={styles.intro_subtitle}>La solution c'est nous !</p>
              {/* </Fade> */}
              {/* <button className={styles.intro_btn}></button> */}
        </div>
      </motion.div>
    </motion.section>
  );
};

