import React /* , { Fragment } */ from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

import Nav from "./Homepage/Nav";
import TopBar from "./Homepage/TopBar";
import Footer from "./Homepage/Footer";

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
      .get("http://34.69.57.206:1337/categories")
      .then(({ data }) => {
        /* console.log("categories", data); */
        const categories = data.map((category) => {
          const { displayText, created_at, id } = category;
          const createdAt = new Date(Date.parse(created_at)).toDateString();
          return { displayText, createdAt, created_at, id };
        });
        this.setState({ categories });
      })
      .catch(console.error);
    axios
      .get("http://34.69.57.206:1337/bloglists/4")
      .then(({ data }) => {
        console.log("blogs", data);
        const posts = data.blogs.map((blog) => {
          const { title, post_date, id } = blog;
          const createdAt = new Date(Date.parse(post_date)).toDateString();
          return { title, createdAt, post_date, id };
        });
        this.setState({ posts });
      })
      .catch(console.error);
  }

  render() {
    console.log(this.state.posts);
    return (
      <section className="blogs-container container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="container recent-posts">
                <h2 className="blog-post-title">Recent Posts</h2>
                <hr />
                <ul>
                  {this.state.posts.map((post) => (
                    <li key={post.created_at + post.title}>
                      <a
                        href={"/blog/" + post.id}
                        onClick={(e) => {
                          e.preventDefault();
                          if (this.props.switchFunc) {
                            this.props.switchFunc(post.id);
                          } else {
                            navigate("/blog/" + post.id);
                          }
                        }}
                      >
                        {post.title} - {post.createdAt}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="container categories">
                <h2 className="blog-post-title">Category</h2>
                <hr />
                <ul>
                  {this.state.categories.map((category) => (
                    <li key={category.created_at}>
                      <Link to={"/bloglist/" + category.id}>
                        {category.displayText}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blogs;
