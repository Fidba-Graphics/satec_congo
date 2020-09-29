import React from "react";
import Fade from "react-reveal/Fade";
const Home = () => {
  return (
    <div
      className="site-blocks-cover overlay"
      //   style={{
      //     backgroundImage:
      //       "https://www.buzzly.fr/uploads/thumb/960/phpssd9Eg.jpg",
      //   }}
      id="home-section"
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
            <div className="row mb-4">
              <div className="col-md-12 hiro">
                <Fade bottom>
                  <h1>
                    Etês vous passionné <br />
                    de la technologie ?
                  </h1>
                </Fade>
                <Fade bottom>
                  <p className="mb-5 lead">La solution c'est nous !</p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
