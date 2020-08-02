import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";

import Sidebar from "./Sidebar";


const ReactMarkdown = require("react-markdown/with-html");
function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}


class SingleBlog extends React.Component {
  state = {
    base_url: "http://34.69.57.206:1337",
    title: "",
    blog_intro: "",
    post_date: "",
    tag: "",
    author: "",
    blog_body: "",
    imgSrc: "",
    blogListId: "",
    sendProps: true,
  };

  componentDidMount() {
    const blogId = window.location.pathname.split("/")[2];
    axios
      .get("http://34.69.57.206:1337/blogs/" + blogId)
      .then(({ data }) => {
        const root = "http://35.184.242.240:1337";
        const { title, blog_intro, post_date, tag, Author, blog_body } = data;
        // console.log(data);
        // const { id: blogListId } = data.bloglist;
        const imgSrc = data.dpimg ? root + data.dpimg.url : "";
        this.setState({
          title,
          blog_intro,
          post_date,
          tag,
          author: Author,
          blog_body,
          imgSrc,
          // blogListId,
          sendProps: true,
        });
      })
      .catch(console.error);
  }

  changeBlog(id) {
    navigate("/blog/" + id);
    this.componentDidMount();
  }

  render() {
    return (
      <section className="blog-container container">
        <div className="container mt-2">
          <div className="row">
            <div className="col-lg-7 col-xs 12 main-blog-content container">
              <article>
                <header>
                  <h2 className="blog-post-title">{this.state.title}</h2>
                  <p className="blog-post-meta">
                    <i className="far fa-clock" /> {this.state.post_date} &nbsp;
                    <i className="fas fa-user" />{" "}
                    {this.state.author ? this.state.author.username : ""} &nbsp;
                    <i className="fas fa-tags" /> {this.state.tag}
                  </p>
                </header>
                {this.state.imgSrc ? (
                  <figure>
                    <img src={this.state.imgSrc} alt="single blog page" />
                  </figure>
                ) : null}

                {/* <p>{this.state.blog_body}</p> */}
                <ReactMarkdown
                  source={replaceAll(this.state.blog_body, "\n", "<br />")}
                  escapeHtml={false}
                  transformImageUri={(uri) =>
                    uri.startsWith("http")
                      ? uri
                      : `${this.state.base_url}${uri}`
                  }
                />
              </article>
            </div>
            <Sidebar switchFunc={this.changeBlog.bind(this)} />
          </div>
        </div>
      </section>
    );
  }
}

export default SingleBlog;
