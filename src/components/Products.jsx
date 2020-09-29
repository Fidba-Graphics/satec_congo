import React from "react";
import Fade from "react-reveal/Fade";
import prod1 from "./images/satec2.PNG";
import prod5 from "./images/satec3.PNG";
import prod3 from "./images/satec4.PNG";
import prod4 from "./images/satec5.png";
import prod2 from "./images/satec6.png";
import prod6 from "./images/satec11.PNG";
export default function Products() {
  return (
    <div>
      <div className="site-section" id="products-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-6 text-center">
              <Fade bottom>
                <h2 className="section-title mb-3">Nos Produits</h2>
              </Fade>
              <Fade bottom>
                <p>
                  Profitez des meilleures installations électriques
                  industrielles et domestiques, Plomberie et des bons
                  dimensionements des systèmes solaires au standard
                  international avec la meilleure entreprise du moment. <br />
                  SATEC - Congo sarl.
                </p>
              </Fade>
            </div>
          </div>
          <div className="row">
            <Fade bottom>
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="product-item">
                  <figure>
                    <img src={prod1} alt="Image" className="img-fluid" />
                  </figure>
                  <div className="px-4">
                    <div className="mb-3">
                      <span className="meta-icons mr-3">
                        Capacité 240 oeufs
                      </span>
                    </div>

                    <div>
                      <a href="#prod1" className="btn view-btn ml-1 rounded-0">
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="product-item">
                  <figure>
                    <img src={prod2} alt="Image" className="img-fluid" />
                  </figure>
                  <div className="px-4">
                    <div className="mb-3">
                      <span className="meta-icons mr-3">
                        Capacité 480 oeufs
                      </span>
                    </div>

                    <div>
                      <a href="#prod2" className="btn  ml-1 rounded-0 view-btn">
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="product-item">
                <figure>
                  <img src={prod3} alt="Image" className="img-fluid" />
                </figure>
                <div className="px-4">
                  <div className="mb-3">
                    <span className="meta-icons mr-3">Capacité 600 oeufs</span>
                  </div>

                  <div>
                    <a href="#prod3" className="btn  ml-1 rounded-0 view-btn">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Fade bottom>
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="product-item">
                  <figure>
                    <img src={prod4} alt="Image" className="img-fluid" />
                  </figure>
                  <div className="px-4">
                    <div className="mb-3">
                      <span className="meta-icons wishlist">
                        Capacité 900 oeufs
                      </span>
                    </div>

                    <div>
                      <a href="#prod4" className="btn view-btn  ml-1 rounded-0">
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="product-item">
                <figure>
                  <img src={prod5} alt="Image" className="img-fluid" />
                </figure>
                <div className="px-4">
                  <div className="mb-3">
                    <span className="meta-icons wishlist">
                      Capacité 5000 oeufs
                    </span>
                  </div>

                  <div>
                    <a href="#prod5" className="btn view-btn  ml-1 rounded-0">
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Fade bottom>
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="product-item">
                  <figure>
                    <img src={prod6} alt="Image" className="img-fluid" />
                  </figure>
                  <div className="px-4">
                    <div className="mb-3">
                      <span className="meta-icons wishlist">
                        <a href="#" className="mr-2">
                          <span className="icon-heart"></span>
                        </a>
                        Capacité 10000 Oeufs
                      </span>
                    </div>

                    <div>
                      <a href="#prod6" className="btn view-btn  ml-1 rounded-0">
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="site-section product-details">
        <div className="container">
          <Fade left>
            <div className="bg-white py-4 mb-4" id="prod1">
              <div className="row mx-4 my-4 product-item-2 align-items-start">
                <div className="col-md-6 mb-5 mb-md-0">
                  <img src={prod1} alt="Image" className="img-fluid" />
                </div>

                <div className="col-md-5 ml-auto product-title-wrap">
                  <h3 className="text-black mb-4 font-weight-bold">
                    A propos du produit
                  </h3>
                  <p className="mb-1">Capacite : 240 Oeufs</p>
                  <p className="mb-1">Puissance : 200W Max</p>
                  <p className="mb-1">Tension : 220V AC/ 12V DC</p>
                  <p className="mb-1">Poid : 45Kg</p>
                  <p className="mb-1">Guaranty : 1 an</p>
                  <p className="mb-1">Taux d'ecclosion : 80 à 90%</p>
                  <div className="mb-4">
                    <h3 className="text-black font-weight-bold h5">Prix:</h3>
                    <div className="price">
                      <del className="mr-2">$700.00</del> $600.00
                    </div>
                  </div>
                  <p className="mb-1 text-danger">
                    Puissance necessaire en energie solaires qu'il vous faut
                  </p>
                  <p className="mb-1">Panneau solaire : 600W</p>
                  <p className="mb-1">Batterie : 12V / 300Ah</p>

                  <p>
                    <a
                      href="#contact"
                      className="btn btn-black rounded-0 d-block d-lg-inline-block"
                    >
                      Acheter
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <div className="bg-white py-4" id="prod2">
            <div className="row mx-4 my-4 product-item-2 align-items-start">
              <div className="col-md-6 mb-5 mb-md-0 order-1 order-md-2">
                <img src={prod2} alt="Image" className="img-fluid" />
              </div>

              <div className="col-md-5 mr-auto product-title-wrap order-2 order-md-1">
                <h3 className="text-black mb-4 font-weight-bold">
                  A propos du produit
                </h3>
                <p className="mb-1">Capacite : 480 Oeufs</p>
                <p className="mb-1">Puissance : 240W Max</p>
                <p className="mb-1">Tension : 220V AC/ 12V DC</p>
                <p className="mb-1">Poid : 65Kg</p>
                <p className="mb-1">Guaranty : 1 an</p>
                <p className="mb-1">Taux d'ecclosion : 80 à 90%</p>
                <div className="mb-4">
                  <h3 className="text-black font-weight-bold h5">Prix:</h3>
                  <div className="price">
                    <del className="mr-2">$700.00</del> $680.00
                  </div>
                </div>
                <p className="mb-1 text-danger">
                  Puissance necessaire en energie solaires qu'il vous faut
                </p>
                <p className="mb-1">Panneau solaire : 600W</p>
                <p className="mb-1">Batterie : 12V / 300Ah</p>

                <p>
                  <a
                    href="#contact"
                    className="btn btn-black rounded-0 d-block d-lg-inline-block"
                  >
                    Acheter
                  </a>
                </p>
              </div>
            </div>
          </div>
          <Fade right>
            <div
              className="bg-white py-4 mb-4"
              id="prod3"
              style={{ marginTop: 40 }}
            >
              <div className="row mx-4 my-4 product-item-2 align-items-start">
                <div className="col-md-6 mb-5 mb-md-0">
                  <img src={prod3} alt="Image" className="img-fluid" />
                </div>

                <div className="col-md-5 ml-auto product-title-wrap">
                  <h3 className="text-black mb-4 font-weight-bold">
                    A propos du produit
                  </h3>
                  <p className="mb-1">Capacite : 600 Oeufs</p>
                  <p className="mb-1">Puissance : 340W Max</p>
                  <p className="mb-1">Tension : 220V AC/ 12V DC</p>
                  <p className="mb-1">Poid : 80Kg</p>
                  <p className="mb-1">Guaranty : 1 an</p>
                  <p className="mb-1">Taux d'ecclosion : 80 à 90%</p>
                  <div className="mb-4">
                    <h3 className="text-black font-weight-bold h5">Prix:</h3>
                    <div className="price">
                      <del className="mr-2">$900.00</del> $800.00
                    </div>
                  </div>
                  <p className="mb-1 text-danger">
                    Puissance necessaire en energie solaires qu'il vous faut
                  </p>
                  <p className="mb-1">Panneau solaire : 600W</p>
                  <p className="mb-1">Batterie : 12V / 300Ah</p>

                  <p>
                    <a
                      href="#contact"
                      className="btn btn-black rounded-0 d-block d-lg-inline-block"
                    >
                      Acheter
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <div className="bg-white py-4" id="prod4">
            <div className="row mx-4 my-4 product-item-2 align-items-start">
              <div className="col-md-6 mb-5 mb-md-0 order-1 order-md-2">
                <img src={prod4} alt="Image" className="img-fluid" />
              </div>

              <div className="col-md-5 mr-auto product-title-wrap order-2 order-md-1">
                <h3 className="text-black mb-4 font-weight-bold">
                  A propos du produit
                </h3>
                <p className="mb-1">Capacite : 840 Oeufs</p>
                <p className="mb-1">Puissance : 400W Max</p>
                <p className="mb-1">Tension : 220V AC/ 12V DC</p>
                <p className="mb-1">Poid : 90Kg</p>
                <p className="mb-1">Guaranty : 1 an</p>
                <p className="mb-1">Taux d'ecclosion : 80 à 90%</p>
                <div className="mb-4">
                  <h3 className="text-black font-weight-bold h5">Prix:</h3>
                  <div className="price">
                    <del className="mr-2">$1200.00</del> $1000.00
                  </div>
                </div>
                <p className="mb-1 text-danger">
                  Puissance necessaire en energie solaires qu'il vous faut
                </p>
                <p className="mb-1">Panneau solaire : 600W</p>
                <p className="mb-1">Batterie : 12V / 300Ah</p>

                <p>
                  <a
                    href="#contact"
                    className="btn btn-black rounded-0 d-block d-lg-inline-block"
                  >
                    Acheter
                  </a>
                </p>
              </div>
            </div>
          </div>
          <Fade left>
            <div
              className="bg-white py-4 mb-4"
              id="prod5"
              style={{ marginTop: 40 }}
            >
              <div className="row mx-4 my-4 product-item-2 align-items-start">
                <div className="col-md-6 mb-5 mb-md-0">
                  <img src={prod5} alt="Image" className="img-fluid" />
                </div>

                <div className="col-md-5 ml-auto product-title-wrap">
                  <h3 className="text-black mb-4 font-weight-bold">
                    A propos du produit
                  </h3>
                  <p className="mb-1">Capacite : 5000 Oeufs</p>
                  <p className="mb-1">Puissance : 500W Max</p>
                  <p className="mb-1">Tension : 220V AC/ 12V DC</p>
                  <p className="mb-1">Poid : 160Kg</p>
                  <p className="mb-1">Guaranty : 1 an</p>
                  <p className="mb-1">Taux d'ecclosion : 80 à 90%</p>
                  <div className="mb-4">
                    <h3 className="text-black font-weight-bold h5">Prix:</h3>
                    <div className="price">
                      <del className="mr-2">$4000.00</del> $3200.00
                    </div>
                  </div>
                  <p className="mb-1 text-danger">
                    Puissance necessaire en energie solaires qu'il vous faut
                  </p>
                  <p className="mb-1">Panneau solaire : 800W</p>
                  <p className="mb-1">Batterie : 12V / 420Ah</p>

                  <p>
                    <a
                      href="#contact"
                      className="btn btn-black rounded-0 d-block d-lg-inline-block"
                    >
                      Acheter
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="bg-white py-4" id="prod6">
              <div className="row mx-4 my-4 product-item-2 align-items-start">
                <div className="col-md-6 mb-5 mb-md-0 order-1 order-md-2">
                  <img src={prod6} alt="Image" className="img-fluid" />
                </div>

                <div className="col-md-5 mr-auto product-title-wrap order-2 order-md-1">
                  <h3 className="text-black mb-4 font-weight-bold">
                    A propos du produit
                  </h3>
                  <p className="mb-1">Capacite : 10000 Oeufs</p>
                  <p className="mb-1">Puissance : 2000W Max</p>
                  <p className="mb-1">Tension : 220V AC/ 12V DC</p>
                  <p className="mb-1">Poid : 300Kg</p>
                  <p className="mb-1">Guaranty : 1 an</p>
                  <p className="mb-1">Taux d'ecclosion : 80 à 90%</p>
                  <div className="mb-4">
                    <h3 className="text-black font-weight-bold h5">Prix:</h3>
                    <div className="price">
                      <del className="mr-2">$9500.00</del> $8500.00
                    </div>
                  </div>
                  <p className="mb-1 text-danger">
                    Puissance necessaire en energie solaires qu'il vous faut
                  </p>
                  <p className="mb-1">Panneau solaire : 3000W</p>
                  <p className="mb-1">Batterie : 12V / 840Ah</p>

                  <p>
                    <a
                      href="#contact"
                      className="btn btn-black rounded-0 d-block d-lg-inline-block"
                    >
                      Acheter
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
