import React from "react";
import { IconContext } from "react-icons";
import {
  FaFacebookSquare,
  FaWhatsappSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer bg-dark" style={{ maxHeight: "100%" }}>
      <div className="container footer">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <h2 className="footer-heading mb-4 textwhite">Racourcies</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#about" className="textwhite">
                      Apropos de nous
                    </a>
                  </li>
                  <li>
                    <a href="#products" className="text-white">
                      Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h2 className="footer-heading mb-4 textwhite">
                  Aprops de nous
                </h2>
                <p className="text text-white">
                  La grandeur et la force d’un homme réside dans les idées,
                  forces qui orientent un peuple dans un espace donné.
                  Convaincus de l’impérieuse et absolue nécessité de faire de
                  notre ville,
                </p>
              </div>

              <div className="col-md-4">
                <h2 className="footer-heading mb-4 text-white">Suivez nous</h2>
                <a
                  href="https://www.facebook.com/pages/category/Business-Service/SATEC-Congo-incubation-113625197074726/"
                  target="blank"
                  className="pl-0 pr-3"
                >
                  <IconContext.Provider value={{ className: "footer-icon" }}>
                    <FaFacebookSquare />
                  </IconContext.Provider>
                </a>
                <a href="#" className="pl-3 pr-3">
                  <IconContext.Provider value={{ className: "footer-icon" }}>
                    <FaWhatsappSquare />
                  </IconContext.Provider>
                </a>
                <a href="#" className="pl-3 pr-3">
                  <IconContext.Provider value={{ className: "footer-icon" }}>
                    <FaInstagramSquare />
                  </IconContext.Provider>
                </a>
                <a href="#" className="pl-3 pr-3">
                  <IconContext.Provider value={{ className: "footer-icon" }}>
                    <FaTwitterSquare />
                  </IconContext.Provider>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center copy-right">
          <div className="col-md-12">
            <div className="border-top ">
              <p>
                Copyright &copy; 2020 All rights reserved |
                <a href="https://www.fidbagraphics.com" target="_blank">
                  Fidba Graphics
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
