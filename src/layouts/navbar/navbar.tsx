import React, { useState } from "react";
// import logo from "../../assets/images/logo.png";
// import './navbar.scss';

// type ChildProp = {
//   onClickProp?: React.MouseEventHandler
// }

type NavMenu = {
  name: string;
  linkTo: string;
  // onClickItem?: React.MouseEventHandler<Element> | undefined;
  // onClickItem?:  () => void;
  // onClickItem?: React.MouseEventHandler<HTMLAnchorElement>;
  // onClickItem?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

// type NavProps = {
//   NavMenu: {
//     name: string;
//     linkTo: string;
//   }[],
//   // onClickItem?: React.MouseEventHandler<Element> | undefined;
//   // onClickItem?:  () => void;
//   // onClickItem?: React.MouseEventHandler<HTMLAnchorElement>;
//   onClickItem?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
// }

//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const close = () => setIsOpen(false);


// const Links: React.FC<{ links: NavMenu[] }> = ({ links, onClickItem }) => {
// return (
  
// )
// };

export const Navbar: React.FC<{}> = ( ) => {
  const MenuLinks: any[] = [
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
  const [BurgerClick, setBurgerClick] = useState<boolean>(false);
  const [navMenu, setNavMenu] = useState<string>("navbar-container container");

  const handleBurgerClick = () => {
    if(!BurgerClick) {
      setNavMenu('navbar-container container open')
    }
    else {
      setNavMenu('navbar-container container')
    }
    setBurgerClick(!BurgerClick)
  }

  return (
    <nav className="navbar">
      <div className={navMenu}>
          <div className="hamburger-lines" onClick={handleBurgerClick}>
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
          <ul className="menu-items">
          {MenuLinks.map((menu: NavMenu) => (
            <li key={menu.name} className="menu">
              <a href={`#${menu.linkTo}`} onClick={handleBurgerClick}>
                  {menu.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="logo">
          MAGNUSBEN
          <a href="#home-section">
             {/* <img src={logo} alt="logo" /> */}
           </a>
        </div>
      </div>
    </nav> 
  )
}

// export default Navbar;
