import React from "react";
import axios from "axios";

import Nav from "./Homepage/Nav";
import TopBar from "./Homepage/TopBar";
import Footer from "./Homepage/Footer";
import Sidebar from "./Homepage/Sidebar";

const ReactMarkdown = require("react-markdown/with-html");
function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

const QissaaBuddy = () => {
  return (
    <React.Fragment>
      {/* TopBar */}
      <TopBar />
      {/* Navbar */}
      <Nav />
      {/* SingleBlog */}
      <Quissa />
      {/* Footer */}
      <Footer />
    </React.Fragment>
  );
};

class Quissa extends React.Component {
  state = {
    base_url: "http://34.69.57.206:1337",
    title: "",
    Heading: "",
    SubHeading: "",
    formlink: "",
    formtext: "",
    imgUrl: "",
    desc: "",
  };

  async componentDidMount() {
    axios.get("http://34.69.57.206:1337/qissabuddy").then(({ data }) => {
      const {
        title,
        Heading,
        SubHeading,
        formlink,
        formtext,
        logo,
        desc,
      } = data;
      this.setState({
        title,
        Heading,
        SubHeading,
        formlink,
        formtext,
        imgUrl: logo[0].url,
        desc,
      });
    });
  }

  render() {

    const formLink = this.state.formlink;
    console.log(this.state.formlink);
    return (
      <section className="blog-container container">
        <div className="container mt-2">
          <div className="row">
            <div className="col-lg-7 col-xs 12 main-blog-content container">
              <article className="homepage">
                <header>
                  <h2 className="blog-post-title">{this.state.title}</h2>
                </header>
                <figure>
                  <p className="text-center">
                    <img
                      src={this.state.base_url + this.state.imgUrl}
                      alt="Quissa buddy"
                    />
                  </p>
                  {/* <figcaption>Caption for the image</figcaption> */}
                </figure>

                <h4 className="py-4">{this.state.Heading}</h4>
                <h6 className="py-3">{this.state.SubHeading}</h6>
                {/* <p>{this.state.desc}</p> */}
                <ReactMarkdown
                  source={replaceAll(this.state.desc, "\n", "<br />")}
                  escapeHtml={false}
                  transformImageUri={(uri) =>
                    uri.startsWith("http")
                      ? uri
                      : `${this.state.base_url}${uri}`
                  }
                />
                <p className="text-center py-4">
                  <a class="quissa-btn" target="_blank" rel="noopener noreferrer" href={formLink}>{this.state.formtext}</a>
                </p>
              </article>
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
    );
  }
}

export default QissaaBuddy;
