import React from "react";
import image1 from "../images/admin.jpeg";
import image2 from "../images/about.jpg";

import { IconContext } from "react-icons";
import { GiMechanicGarage } from "react-icons/gi";
import { RiComputerLine, RiLightbulbFlashLine } from "react-icons/ri";
import { GiTreeBranch } from "react-icons/gi";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div>
      <div className="site-section" id="about-section">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-md-5 ">
              <Fade bottom>
                <h2 className="section-title mb-3">A propos de nous</h2>
              </Fade>
              <Fade bottom>
                <p className="mb-4 text-left">
                  La grandeur et la force d’un homme réside dans les idées,
                  forces qui orientent un peuple dans un espace donné.
                  Convaincus de l’impérieuse et absolue nécessité de faire de
                  notre ville, province et pays un pool d’intelligence et de
                  savoir-faire, une puissance économique, énergétique,
                  environnementale et de mieux être. Prenant conscience de
                  l’obligation d’instaurer à l’Est de la RD Congo/ N-K, une
                  culture d’excellence qui rompt avec les pesanteurs du
                  nivellement par le bas ; avons créé une société partenaire
                  technique pour la Sécurité, la qualité et la garantie des
                  services afin d’offrir au peuple congolais l’occasion
                  d’engager la R D Congo sur l’orbite de l’émergence.
                </p>
              </Fade>
              <br />
            </div>
            <Fade bottom>
              <div className="col-md-5 mb-5 mb-lg-0 position-relative ml-auto">
                <img
                  src={image1}
                  className="img-fluid image-about"
                  alt="Image"
                />
              </div>
            </Fade>
          </div>
        </div>

        <div className="container " style={{ marginTop: 100 }}>
          <div className="row align-items-lg-center">
            <Fade bottom>
              <div className="col-md-5 mb-5 mb-lg-0 position-relative ">
                <img
                  src={image2}
                  className="img-fluid image-about"
                  alt="Image"
                />
              </div>
            </Fade>
            <div className="col-md-5 ml-auto">
              <Fade bottom>
                <h2 className="section-title mb-3">
                  Domaines d’action ou d’intervention{" "}
                </h2>
              </Fade>
              <Fade bottom>
                <p className="mb-4 text-left">
                  SATEC CONGO Sarl est une société qui offre des services, un
                  support logistique (fourniture et vente des incubateurs
                  automatiques des œufs de qualité fabriqués en RDC, vente et
                  prestation des services techniques d’ingenierie dans le
                  secteur : de l’electricite, mecanique électronique,
                  informatique appliquee, plomberie et construction.) ainsi que
                  des formations professionnelles dans les domaines techniques
                  notamment :
                </p>
              </Fade>
              <br />
            </div>
          </div>
        </div>
        <div className="domain-section-wrapper">
          <div className="section-overlay"></div>
          <div className="container">
            <div className="domains-main-wrapper">
              <Fade bottom>
                <div className="domain-item">
                  <div className="domain-item-icon-wrapper">
                    <IconContext.Provider value={{ className: "icon-domain" }}>
                      <GiMechanicGarage />
                    </IconContext.Provider>
                  </div>
                  <div className="domain-item-content">
                    <h3>MECANIQUE</h3>
                    <p>
                      {" "}
                      Forage, Aménagement des Sources, Installation et
                      Maintenance des Circuits Hydrauliques (Domestiques et
                      Industriels), Générateur, Ajustage des Structures
                      Métalliques{" "}
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="domain-item">
                  <div className="domain-item-icon-wrapper">
                    <IconContext.Provider value={{ className: "icon-domain" }}>
                      <RiLightbulbFlashLine />
                    </IconContext.Provider>
                  </div>
                  <div className="domain-item-content">
                    <h3>ELECTRICITE</h3>
                    <p>
                      Domestique, Industrielle, Construction Des Micros
                      Centrales Hydroelectrique et solaire, des Lignes et Postes
                      (Cabines) de Transformation MT (Moyenne Tension et BT
                      (Basse Tension), mise en place et maintenance des reaseaux
                      electriques et autres travaux similaires
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="domain-item">
                  <div className="domain-item-icon-wrapper">
                    <IconContext.Provider value={{ className: "icon-domain" }}>
                      <GiTreeBranch />
                    </IconContext.Provider>
                  </div>
                  <div className="domain-item-content">
                    <h3>AGRO ALIMENTTAIRE</h3>
                    <p>
                      Conception et fabrication des machines agroalimentaires
                      dans le but de lutter contre l’insécurité alimentaire ;
                      les machines telles que : Les couveuses automatiques des
                      œufs de poules, les inséminateurs artificiels de poissons
                      et bien d’autres
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="domain-item">
                  <div className="domain-item-icon-wrapper">
                    <IconContext.Provider value={{ className: "icon-domain" }}>
                      <RiComputerLine />
                    </IconContext.Provider>
                  </div>
                  <div className="domain-item-content">
                    <h3>INFORMATIQUE APPLIQUEE</h3>
                    <p>
                      création des systèmes intelligents, automatisation des
                      certaines taches humaines
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
