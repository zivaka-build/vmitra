import React from "react";
import axios from "axios";

import Nav from "./Homepage/Nav";
import TopBar from "./Homepage/TopBar";
import Footer from "./Homepage/Footer";

const ReactMarkdown = require("react-markdown/with-html");
function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

const About = () => {
  return (
    <React.Fragment>
      {/* TopBar */}
      <TopBar />
      {/* Navbar */}
      <Nav />
      {/* SingleBlog */}
      <AboutMe />
      {/* Footer */}
      <Footer />
    </React.Fragment>
  );
};

class AboutMe extends React.Component {
  state = {
    base_url: "http://34.69.57.206:1337",
    WorkExperience: "",
    SkillSets: "",
    OngoingActivities: "",
    Education: "",
  };

  async componentDidMount() {
    axios.get("http://34.69.57.206:1337/aboutme").then(({ data }) => {
      console.log(data);
      const { WorkExperience, SkillSets, OngoingActivities, Education } = data;
      this.setState({
        WorkExperience,
        SkillSets,
        OngoingActivities,
        Education,
      });
    });
  }
  render() {
    return (
      <div className="container py-3">
        <ReactMarkdown
          source={replaceAll(this.state.SkillSets, "\n", "<br />")}
          escapeHtml={false}
          transformImageUri={(uri) =>
            uri.startsWith("http") ? uri : `${this.state.base_url}${uri}`
          }
        />
         <ReactMarkdown
          source={replaceAll(this.state.OngoingActivities, "\n", "<br />")}
          escapeHtml={false}
          transformImageUri={(uri) =>
            uri.startsWith("http") ? uri : `${this.state.base_url}${uri}`
          }
        />
        <ReactMarkdown
          source={replaceAll(this.state.WorkExperience, "\n", "<br />")}
          escapeHtml={false}
          transformImageUri={(uri) =>
            uri.startsWith("http") ? uri : `${this.state.base_url}${uri}`
          }
        />
        <ReactMarkdown
          source={replaceAll(this.state.Education, "\n", "<br />")}
          escapeHtml={false}
          transformImageUri={(uri) =>
            uri.startsWith("http") ? uri : `${this.state.base_url}${uri}`
          }
        />
        </div>
    );
  }
}

export default About;
