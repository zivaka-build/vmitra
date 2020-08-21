/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "axios";

import Sidebar from "./../Homepage/Sidebar";
import RecentPost from "./../RecentPost"
class Homepage extends React.Component {
  state = {
    categories: [],
    base_url: "http://34.69.57.206:1337",
    displaypic: "",
    posts: [],
  };

  componentDidMount() {
    axios.get("http://34.69.57.206:1337/introduction").then(({ data }) => {
      /* const categories = data.map((category) => {
        const { displayText, created_at } = category;
        const createdAt = new Date(Date.parse(created_at)).toDateString();
        return { displayText, createdAt };
      });*/
      const {
       intro
      } = data;
      this.setState({ displaypic: data.displaypic.url, intro });
    });
  }

  render() {
    return (
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
                  <p className="text-center">{ this.state.intro }</p>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-lg-12 mt-auto mb-auto text">
                  <RecentPost id="3"/>
                  </div>
                 
                </div>
                
              
              </article>
             
            </div>
           
            <Sidebar />
          </div>
        </div>
      </section>
    );
  }
}

export default Homepage;
