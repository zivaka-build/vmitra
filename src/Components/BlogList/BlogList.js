import React from "react";
import axios from "axios";
import { Link } from "@reach/router";

class BlogList extends React.Component {
  state = {
    base_url: "http://34.69.57.206:1337",
    blogs: [],
    name: "",
    displayText: "",
  };

  componentDidMount() {
    const categoryId = window.location.pathname.split("/")[2];
    axios
      .get("http://34.69.57.206:1337/categories/" + categoryId)
      .then(({ data }) => {
        console.log(data);
        const blogs = data.blogs.map((blog) => {
          const { id, post_date, blog_intro, title, Author, Media, hashtag } = blog;
          return { id, post_date, blog_intro, title, Author, Media, hashtag };
        });
        const { name, displayText } = data;
        this.setState({ blogs, name, displayText });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="bloglist container my-5">
        <h3>{this.state.displayText}</h3>
        <div className="row">
          {/* BlogList Card */}
          {this.state.blogs.map((blog) => (
            <div className="col-12 col-md-8 bloglist-card">
              <div className="row">
                <div className="col-3">
                  <a href>
                    <img
                      className="img-fluid"
                      src={this.state.base_url + blog.Media[0].formats.thumbnail.url}
                      alt={blog.Media[0].name}
                    />
                  </a>
                </div>
                <div className="col-8">
                  <p>
                    <span className="bloglist-heading">
                      <Link to={"/blog/" + blog.id}>{blog.title}</Link>
                    </span>
                    <br />
                    <span className="bloglist-intro">
                      <a href>{blog.blog_intro}</a>
                    </span>
                    <br />
                    {/* <span className="bloglist-author">
                      <a href>{blog.Author || ""}</a>
                    </span>
                    <br /> */}
                    <span className="bloglist-date">{blog.post_date}</span>
                    <br />
                    <span className="bloglist-intro">
                      <a href>{blog.hashtag}</a>
                    </span>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* BlogList Card Ends*/}
        </div>
        {/* BlogList Card Row Ends*/}
      </div>
    );
  }
}

export default BlogList;
