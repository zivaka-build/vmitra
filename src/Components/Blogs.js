import React /* , { Fragment } */ from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

import Nav from "./Homepage/Nav";
import TopBar from "./Homepage/TopBar";
import Footer from "./Homepage/Footer";
import Sidebar from "./Homepage/Sidebar";

const Blogs = () => {
  return (
    <React.Fragment>
      {/* TopBar */}
      <TopBar />
      {/* Navbar */}
      <Nav />
      {/* Content */}
      <Content />
      {/* Footer */}
      <Footer />
    </React.Fragment>
  );
};

class Content extends React.Component {
  state = {
    categories: [],
    base_url: "http://34.69.57.206:1337",
    displaypic: "",
    posts: [],
  };

  componentDidMount() {
    
    axios
      .get("http://34.69.57.206:1337/bloglists/4")
      .then(({ data }) => {
        console.log("blogs", data);
        const posts = data.blogs.map((blog) => {
          const { title, post_date, id, Media, hashtag, blog_intro} = blog;
          const createdAt = new Date(Date.parse(post_date)).toDateString();
          return { title, createdAt, post_date, id, Media, hashtag, blog_intro };
        });
        this.setState({ posts });
      })
      .catch(console.error);
  }

  render() {
    console.log(this.state.posts);
    return (
      <div className="bloglist container  my-5">
      <section className="blogs-container container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xs-12">
              <div className="container recent-posts">
                <h2 className="blog-post-title">Recent Posts</h2>
                <hr />
                {this.state.posts.map((post) => (
            <div className="col-12 col-md-8 bloglist-card">
              <div className="row">
                <div className="col-3">
                  <a href>
                    <img
                      className="img-fluid"
                      src={this.state.base_url + post.Media[0].formats.thumbnail.url}
                      alt={post.Media[0].name}
                    />
                  </a>
                </div>
                <div className="col-8">
                  <p>
                    <span className="bloglist-heading">
                      <Link to={"/blog/" + post.id}>{post.title}</Link>
                    </span>
                    <br />
                    <span className="bloglist-intro">
                      <a href>{post.blog_intro}</a>
                    </span>
                    <br />
                    {/* <span className="bloglist-author">
                      <a href>{blog.Author || ""}</a>
                    </span>
                    <br /> */}
                    <span className="bloglist-date">{post.post_date}</span>
                    <br />
                    <span className="bloglist-intro">
                      <a href>{post.hashtag}</a>
                    </span>
                    <br />
                  </p>
                </div>
              </div>
             </div>
              ))}
              </div>
            </div>
            <Sidebar />
            
          </div>
          
        </div>
      </section>
      </div>
    );
  }
}

export default Blogs;
