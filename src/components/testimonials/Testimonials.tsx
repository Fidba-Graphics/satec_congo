import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaQuoteRight
} from "react-icons/fa";
import {
  RiDoubleQuotesL,
  RiDoubleQuotesR
} from "react-icons/ri";
import Ben from '../../assets/images/ben.png';

// const Fade = require("react-reveal/Fade");

import styles from './testimonial.module.scss';

export const Testimonials: React.FC<{}> = () => {
  return (
    <motion.section className={styles.testimonials_section} id="team">
      <div className={styles.estimonials_wrapper}>
        {/* <Fade bottom> */}
          <div className={styles.testimonials_header}>
            <h3 className={styles.testimonials_sub_title}>Lire les Témoignages</h3>
            <h2 className={styles.testimonials_title}>
              C'est toujours une joie d'entendre que le travail
              que nousfaisons a des critiques positives
            </h2>
          </div>
        {/* </Fade> */}

    
        {/* <Fade bottom> */}
          <motion.div className={styles.testimonials_wrapper}>
            <motion.article className={styles.testimony} >
              <motion.div className={styles.testimony_text}>
                <FaQuoteRight/>
                <motion.p className={styles.text}>
                  CICO Sarl est la meilleure entreprise avec laquelle
                  nous avons travaillé. Toute l'équipe a livré avec tact un
                  projet d'une qualité exceptionnelle tout en respectant
                  l'échéancier et le budget. Nous espérons retravailler
                  avec CICO Sarl dans un futur proche !.
                </motion.p>
              </motion.div>
            </motion.article>

            <motion.div className={styles.testimony_author}>
               <motion.div className={styles.author_img}>
                <img src={Ben} alt="ben_dev"/>
              </motion.div>
              <p className={styles.testimony_name}>Ben Mukebo Full-stack developer</p>
              {/* <p className={styles.testimony_position}>DEVELOPER</p> */}
            </motion.div>

          </motion.div>
        {/* </Fade> */}
      </div>
    </motion.section>
  );
}