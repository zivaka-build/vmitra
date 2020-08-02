/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
var arraySort = require('array-sort');

class Sidebar extends React.Component {
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
          const { name, created_at, id } = category;
          const createdAt = new Date(Date.parse(created_at)).toDateString();
          return { name, createdAt, created_at, id };
        });
        this.setState({ categories });
        const sortCategories = arraySort(this.state.categories, "name");
        this.setState({ categories:sortCategories });
        /* console.log(arraySort(this.state.categories, "name")); */
      })
      .catch(console.error);
    axios
      .get("http://34.69.57.206:1337/bloglists/3")
      .then(({ data }) => {
        // console.log("blogs", data);
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
    /* console.log(this.state.categories); */
    
    return (
      <div className="col-lg-4">
        {/* <div className="container recent-posts">
                    <h3 className="blog-post-title">Recent Posts</h3>
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
                </div> */}
        <div className="container categories">
          <h3 className="blog-post-title">Category</h3>
          <hr />
          <ul>
            {this.state.categories.map((category) => (
              <li key={category.created_at}>
                <Link to={"/bloglist/" + category.id}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
