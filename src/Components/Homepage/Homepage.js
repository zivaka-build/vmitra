/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "axios";

import Sidebar from "./../Homepage/Sidebar";
import RecentPostSmall from "./../RecentPostSmall"

const ReactMarkdown = require("react-markdown/with-html");
function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

class Homepage extends React.Component {
  state = {
    categories: [],
    base_url: "http://34.69.57.206:1337",
    displaypic: "",
    intro: "",
    posts: [],
  };

  componentDidMount() {
    axios.get("http://34.69.57.206:1337/introduction").then(({ data }) => {
      /* const categories = data.map((category) => {
        const { displayText, created_at } = category;
        const createdAt = new Date(Date.parse(created_at)).toDateString();
        return { displayText, createdAt };
      });*/
      const root = "http://35.184.242.240:1337";
      const {
       intro
      } = data;
      this.setState({ displaypic: data.displaypic.url, intro, });
    });
  }

  render() {
    return (
      <div className="bloglist container ">
      <section className="blog-container container">
        <div className="container mt-2">
          <div className="row">
            <div className="col-xs-12 col-lg-8 main-blog-content">
              <article className="homepage">
                
              
                  <div className="row">
                  <div className="col-xs-12 col-sm-12 col-lg-4 text-center">
                    <img 
                      src={this.state.base_url + this.state.displaypic}
                      alt="blog-dp" 
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-lg-8 mt-auto mb-auto text">
                  {/* <p className="text-center">{ this.state.intro }</p> */}
                  <ReactMarkdown
                  source={replaceAll(this.state.intro, "\n", "<br />")}
                  escapeHtml={false}
                  transformImageUri={(uri) =>
                    uri.startsWith("http")
                      ? uri
                      : `${this.state.base_url}${uri}`
                  }
                />
                  </div>
                 
                 
                </div>
                
              
              </article>
             
            </div>
           
            <div className="col-lg-4">
            <Sidebar />
            <div className="row">
            
            
            <div className="col-lg-12">
            <RecentPostSmall id="3"/>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Homepage;
