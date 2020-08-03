/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "axios";

import Sidebar from "./../Homepage/Sidebar";

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
      this.setState({ displaypic: data.displaypic.url });
    });
  }

  render() {
    return (
      <section className="blog-container container">
        <div className="container mt-2">
          <div className="row">
            <div className="col-lg-7 col-xs 12 main-blog-content container">
              <article className="homepage">
                
                <figure>
                  <div className="cf">
                  <div className="leftcol">
                    <img
                      src={this.state.base_url + this.state.displaypic}
                      alt="blog-dp"
                    />
                  </div>
                  <div classname="rightcol">
                  <p className="text-center">Yarns to spins and stories to tell!</p>
                  <p className="text-center">Jottings of life sketches, the way I see it and connect</p>
                  <p className="text-center">The raconteur, jotter, rambler, muser!</p>
                  <p className="text-center">Sharing ins and outs, odds and bends, whatnots, anecnotes,
                      points of view! Believe in miracles, an eternal optimist,
                      love laughter joie de vivre…</p>
                  <p className="text-center">~ Vibha Mitra ~ The Sutradhar</p>
                      </div>
                      <div class="clear"></div>
                      </div>
                      
                  {/* <figcaption>Caption for the image</figcaption> */}
                </figure>
                
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
