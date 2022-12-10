import React from "react";
import { motion } from "framer-motion"

import styles from './contacts.module.scss';
// const Fade = require("react-reveal/Fade");

export const Contacts: React.FC<{}> = () => {
  return (
    <motion.section className={styles.contacts_section} id="contacts">
        {/* <Fade bottom> */}
        <motion.div className={styles.contacts_header}>
          <motion.h2 className={styles.contacts_title}>CONTACT </motion.h2>
        </motion.div>
        {/* </Fade> */}
      <motion.div className={styles.contacts_wrapper}>
        <motion.article className={styles.contact_content}>
            {/* <Fade bottom> */}
              <p>
                Pour tous vos besoins d'innovation technique, Veuillez nous
                contacter par
              </p>
            {/* </Fade> */}
            {/* <Fade bottom> */}
              <p>
                <span className="glyphicon glyphicon-map-marker"></span>{" "}
                Goma-ville / N-K <br /> Q.KATINDO / AV La Frontiere No 136
              </p>
            {/* </Fade> */}
            {/* <Fade bottom> */}
              <p>
                <span className="glyphicon glyphicon-phone"></span> +243 994 764
                613
              </p>
            {/* </Fade> */}
            {/* <Fade bottom> */}
              <p>
                <span className="glyphicon glyphicon-envelope"></span> Service
                Clientel: info@sateccongo.com
              </p>
            {/* </Fade> */}
            {/* <Fade bottom> */}
              <p>
                <span className="glyphicon glyphicon-envelope"></span> Direction
                génerale: eunoshersheria@gmail.com
              </p>
            {/* </Fade> */}
            {/* <Fade bottom> */}
              <p>Direction Technique : +243 971 838 655</p>
            {/* </Fade> */}
        </motion.article>

        <form action="https://formspree.io/f/xnqlovnj" method="post" id="form">
          <motion.div className={styles.input_wrapper}>
            {/* <Fade bottom> */}
              <motion.div className={styles.input_div}>
                <input id="name" name="name" placeholder="Name" type="text" required />
              </motion.div>
            {/* </Fade> */}
            {/* <Fade bottom> */}
              <motion.div className={styles.input_div}>
                <input id="email" name="email" placeholder="Email" type="email" required/>
              </motion.div>
            {/* </Fade> */}
          </motion.div>
          {/* <Fade bottom> */}
            <motion.div className={styles.input_div}>
              <textarea id="comments" name="comments" placeholder="Comment"
              // rows="5"
              ></textarea>
            </motion.div>
          {/* </Fade> */}
          {/* <Fade bottom> */}
            <motion.div className={styles.btn_div}>
              <button type="submit">
                Send
              </button>
            </motion.div>
          {/* </Fade> */}
        </form>
      </motion.div>
    </motion.section>
  );
}
