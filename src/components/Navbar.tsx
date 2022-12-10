// import React, { useState } from "react";
// import logo from "../assets/images/logo.png";
// import '.';


// //   const [isOpen, setIsOpen] = useState(false);
// //   const toggle = () => setIsOpen(!isOpen);
// //   const close = () => setIsOpen(false);



// export const Navbar: React.FC = () => {
//   const [burger_class, setBurgerClass] = useState<string>("burger-bar unclicked");
//   const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
//   const close = () => setIsMenuClicked(false);

//   const updateMenu = () => {
//       if(!isMenuClicked) {
//           setBurgerClass("burger-bar clicked");
//           // setSideBarClass("sideBar visible");
//       }
//       else {
//           setBurgerClass("burger-bar unclicked");
//           // setSideBarClass("sideBar hidden");
//       }
//       setIsMenuClicked(!isMenuClicked)
//   }

//   return (
//     <header>
//       <div className="navbar-main-wrapper">
//         <a href="#" className="brand-navbar" onClick={() => close()}>
//           <img src={logo} alt="" srcSet="" onClick={() => close()} />
//         </a>
//       </div>

//     <nav className="nav">
//       <div className="burger-menu" onClick={updateMenu}>
//         <div className={burger_class} ></div>
//         <div className={burger_class} ></div>
//         <div className={burger_class} ></div>
//       </div>

//       <li onClick={() => close()}>
//           <a href="#about-section">A propos</a>
//         </li>
//         <li onClick={() => close()}>
//           <a href="#products-section">Produits</a>
//         </li>
//         <li onClick={() => close()}>
//           <a href="#team-section">Team</a>
//         </li>
//         <li onClick={() => close()}>
//           <a href="#contacts">Contacts</a>
//         </li>
//     </nav>
//     </header>
    
//   )
// }
// // export default Navigation;