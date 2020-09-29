import React from "react";
import Fade from "react-reveal/Fade";
export default function Contacts() {
  return (
    <div>
      <div
        id="contacts"
        className="container-fluid bg-grey"
        style={{ padding: "150px 20px", overflow: "hidden", paddingTop: 20 }}
      >
        <Fade bottom>
          <h2 className="text-center" style={{ margin: "50px 0" }}>
            CONTACT
          </h2>
        </Fade>
        <div className="row">
          <div className="col-sm-5">
            <Fade bottom>
              <p>
                Pour tous vos besoins d'innovation technique, Veuillez nous
                contacter par{" "}
              </p>
            </Fade>
            <Fade bottom>
              <p>
                <span className="glyphicon glyphicon-map-marker"></span>{" "}
                Goma-ville / N-K <br /> Q.KATINDO / AV La Frontiere No 136
              </p>
            </Fade>
            <Fade bottom>
              <p>
                <span className="glyphicon glyphicon-phone"></span> +243 994 764
                613
              </p>
            </Fade>
            <Fade bottom>
              <p>
                <span className="glyphicon glyphicon-envelope"></span> Service
                Clientel: info@sateccongo.com
              </p>
            </Fade>
            <Fade bottom>
              <p>
                <span className="glyphicon glyphicon-envelope"></span> Direction
                génerale: eunoshersheria@gmail.com
              </p>
            </Fade>
            <Fade bottom>
              <p>Direction Technique : +243 971 838 655</p>
            </Fade>
          </div>
          <div className="col-sm-7 slideanim">
            <div className="row">
              <Fade bottom>
                <div className="col-sm-6 form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-sm-6 form-group">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </div>
              </Fade>
            </div>
            <Fade bottom>
              <textarea
                className="form-control"
                id="comments"
                name="comments"
                placeholder="Comment"
                rows="5"
              ></textarea>
            </Fade>
            <br />
            <div className="row">
              <div className="col-sm-12 form-group">
                <Fade bottom>
                  <button className="btn btn-default pull-right" type="submit">
                    Send
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
