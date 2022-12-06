import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { MenuItem } from '../../modal/index';
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";
import { CgClose } from 'react-icons/cg';
import { FaAngleDoubleRight, FaArrowRight } from 'react-icons/fa';

import logo from "../../assets/images/logo.png";
// import styles from './header.module.scss';
import './header.scss';

type Props = {
  children: React.ReactNode | JSX.Element | JSX.Element[];
  isVisible: boolean;
  other?: any;
};


export const Header: React.FC<Props> = ({ children, isVisible }) => {
  const MenuLinks: MenuItem[] = [
    {
      name: 'A propos',
      linkTo: 'about-section'
    },
    {
      name: 'Produits',
      linkTo: 'products-section'
    },
    {
      name: 'Team',
      linkTo: 'team-section'
    },
    {
      name: 'Contacts',
      linkTo: 'contacts'
    }
  ]

  // const [burger_class, setBurgerClass] = useState<string>("burger-bar unclicked");
  const [burgerClicked, setBurgerClicked] = React.useState(false);
  // const [showNavBar, setShowNavBar] = React.useState<string>('hidden');

      // to change burger classes
      const handleBurgerClick = () => {
        setBurgerClicked(!burgerClicked)
        // burgerClicked ? setShowNavBar('show') : setShowNavBar('hidden');
        console.log('New showSideBar:', burgerClicked);
      }


      


  return (
    <header className="header_container">
      <> 
        {isVisible && {children}}
      </>
      <motion.div className="header-scrolled d-flex flex-center">
        <motion.div className="logo">
            <a href="#home-section">
              MAGNUSBEN
              {/* <img src={logo} alt="logo" /> */}
            </a>
        </motion.div>

        <motion.nav className="navbar d-flex flex-center">
          <motion.div className="hamburger-lines">
            <motion.button
              aria-label="Opened"
              type="button" onClick={handleBurgerClick}>
              <IconContext.Provider value={{ className: 'burger_class' }}>
                {!burgerClicked ? (
                  <FiMenu />
                  ) : (
                  <CgClose />
                )}
              </IconContext.Provider>
            </motion.button>
          </motion.div>
          {/* <nav className={`active ${show && 'hidden'}`}> */}

          {/* <ul className={`${styles.nav_menu} ${showNavBar ? styles.show : styles.hidden}`}> */}
          <motion.ul className={`nav_menu ${burgerClicked && 'show'} d-flex flex-column`}>
          {/* <ul className={`nav_menu ${showNavBar} d-flex flex-column`}> */}
            {MenuLinks.map((menu: MenuItem) => (
              <motion.li key={menu.name} className="menu_item">
                <a href={`#${menu.linkTo}`} onClick={handleBurgerClick}>
                    {menu.name}
                    <span><FaAngleDoubleRight /></span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav> 
      </motion.div>
    </header>

  );
};

// export default Header;
