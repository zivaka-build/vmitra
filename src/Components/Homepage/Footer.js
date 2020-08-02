import React from "react";
import axios from "axios";

class Footer extends React.Component {
  state = {
    facebook: "",
    instagram: "",
    email: "",
    linkedin: "",
  };

  componentDidMount() {
    axios.get("http://34.69.57.206:1337/social-media").then(({ data }) => {
      // console.log(data);
      this.setState({ ...data });
    });
  }

  render() {
    return (
      <div>
        {/* FOOTER */}
        <footer id="main-footer" className="py-3 text-white">
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                <a href="opus.html" className="navbar-brand">
                  <img
                    src={require("./../../assets/img/vm.png")}
                    width={200}
                    alt="vm-logo"
                  />
                </a>
              </div>
              <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                <ul className="nav navbar">
                  <li className="nav-items active">
                    <a href="/blogs" className="nav-link text-light font-monte">
                      Blogs
                    </a>
                  </li>
                  <li className="nav-items">
                    <a href="/qissa" className="nav-link text-light font-monte">
                      Qissaa Buddy
                    </a>
                  </li>
                  <li className="nav-items">
                    <a
                      href="/about"
                      rel="noopener noreferrer"
                      className="nav-link text-light font-monte"
                    >
                      About Me
                    </a>
                  </li>
                  <li className="nav-items">
                    <a
                      href="/contact"
                      rel="noopener noreferrer"
                      className="nav-link text-light font-monte"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="col-sm-12 col-xs-12 col-md-3 col-lg-3"
                style={{ marginTop: 8 }}
              >
                <a
                  href="https://www.facebook.com/vibhamitra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./../../assets/img/footer/fbicon.png")}
                    alt="fb-logo"
                  />
                </a>
                <a
                  href={this.state.twi}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./../../assets/img/footer/twitter.png")}
                    alt="twitter-logo"
                  />
                </a>
                <a
                  href="https://wa.me/919830933434"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./../../assets/img/footer/whatsapp.png")}
                    alt="whatsapp-logo"
                  />
                </a>
                <a
                  href="https://www.instagram.com/vibha.mitra/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={require("./../../assets/img/footer/instagram.png")}
                    alt="instagram-logo"
                  />
                </a>
              </div>
              {/* <div class="col-md-6 ml-auto">
          <p class="lead">
            Copyright &copy;
            <span id="year"></span>
          </p>
        </div> */}
            </div>
          </div>
        </footer>
        <div className="copyright-area">
          <p className="text-center" id="footer-copyright-text">
            <i className="far fa-copyright" /> 2020 Vibha Mitra | All Rights
            Reserved | Powered By Zivaka
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
