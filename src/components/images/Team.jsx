import React from "react";
import image1 from "../images/m.jpeg";
import image2 from "../images/m2.jpeg";
import image3 from "../images/m3.jpeg";
import image4 from "../images/m4.jpeg";
import Fade from "react-reveal/Fade";
export default function Team() {
  return (
    <div>
      <div className="site-section border-bottom" id="team-section">
        <div className="container">
          <div className="row mb-5">
            <Fade bottom>
              <div className="col-12 text-center">
                <h3 className="section-sub-title">Team</h3>
                <h2 className="section-title mb-3">Leadership</h2>
              </div>
            </Fade>
          </div>
          <div className="row">
            <Fade bottom>
              <div
                className="col-md-6 col-lg-4 mb-5 mb-lg-0"
                data-aos="fade"
                data-aos-delay="100"
              >
                <div className="person text-center">
                  <img
                    src={image1}
                    alt="Image"
                    className="img-fluid  w-75 mb-3 team-img"
                  />
                  <h3>SHERIA ENOCK Eunosher</h3>
                  <p className="position text-muted">
                    Co-Founder, general manager
                  </p>
                  <p className="mb-4">
                    President Ingenieur A0 en Sciences de l ingenierie et
                    technologies specialiste en conception des systemes
                    electriques et embarques fondateur de la societe SATEC CONGO
                    sarl et expert en couvaison.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div
                className="col-md-6 col-lg-4 mb-5 mb-lg-0"
                data-aos="fade"
                data-aos-delay="200"
              >
                <div className="person text-center">
                  <img
                    src={image4}
                    alt="Image"
                    className="img-fluid  w-75 mb-3 team-img"
                  />
                  <h3>Ir IHORA MUMBOGO Fidele </h3>
                  <p className="position text-muted">DIRECTEUR TECHNIQUE</p>
                  <p className="mb-4">
                    Ingenieur A0 en Sciences appliquees specialiste en
                    conception des systemes electroniques co fondateur de la
                    societe SATEC CONGO sarl et expert en couvaison.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div
                className="col-md-6 col-lg-4 mb-5 mb-lg-0"
                data-aos="fade"
                data-aos-delay="300"
              >
                <div className="person text-center">
                  <img
                    src={image2}
                    alt="Image"
                    className="img-fluid  w-75 mb-3 team-img"
                  />
                  <h3>MUNYERENKANA CIRIMWAMI Lydia</h3>
                  <p className="position text-muted">
                    DIRECTEUR DE L'ADMINISTRATION ET FINANCE
                  </p>
                  <p className="mb-4">
                    co-fondatrice de la société SATEC-CONGO sarl et expert en
                    administration licenciée en ANGLAIS ET CULTURES AFRICAINES
                  </p>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div
                className="col-md-6 col-lg-4 mb-5 mb-lg-0"
                data-aos="fade"
                data-aos-delay="100"
              >
                <div className="person text-center">
                  <img
                    src={image3}
                    alt="Image"
                    className="img-fluid  w-75 mb-3 team-img"
                  />
                  <h3>LIMBO KAMALA Hélène</h3>
                  <p className="position text-muted">
                    Co-Founder, DIRECTEUR DE RESSOURCES HUMAINES ET MARKETING
                  </p>
                  <p className="mb-4">
                    Licenciée en gestion des entreprises, expert en
                    communication et marketing.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div
                className="col-md-6 col-lg-4 mb-5 mb-lg-0"
                data-aos="fade"
                data-aos-delay="200"
              >
                <div className="person text-center">
                  <img
                    src="https://res.cloudinary.com/fidbagraphicscode/image/upload/v1594982185/UJN_copy_c3stng.jpg"
                    alt="Image"
                    className="img-fluid  w-75 mb-3 team-img"
                  />
                  <h3>UN JOUR NOUVEAU HOLDING</h3>
                  <p className="position text-muted">
                    Co-Founder, Conseil technique
                  </p>
                  <p className="mb-4">
                    personne morale co-fondateur de Sarl SATEC-CONGO et
                    specialisée en accompagnement technique et coaching des
                    jeunes entrepreuneurs.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div
                className="col-md-6 col-lg-4 mb-5 mb-lg-0"
                data-aos="fade"
                data-aos-delay="300"
              >
                <div className="person text-center">
                  <img
                    src={image1}
                    alt="Image"
                    className="img-fluid  w-75 mb-3 team-img"
                  />
                  <h3>Winston Hodson</h3>
                  <p className="position text-muted">Marketing</p>
                  <p className="mb-4">
                    Nisi at consequatur unde molestiae quidem provident
                    voluptatum deleniti quo iste error eos est praesentium
                    distinctio cupiditate tempore suscipit inventore deserunt
                    tenetur.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
