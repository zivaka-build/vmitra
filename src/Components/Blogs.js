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
var arraySort = require('array-sort');
class Content extends React.Component {
  state = {
    base_url: "http://34.69.57.206:1337",
    displaypic: "",
    posts: [],
    visible: 10,
  };

  loadmore = this.loadmore.bind(this)
    
  

  componentDidMount() {
    
    axios
      .get("http://34.69.57.206:1337/blogs")
      .then(({ data }) => {
        console.log("blogs", data);
        
        const posts = data.map((blog) => {
          const { title, post_date, id, Media, hashtag, blog_intro, categories } = blog;
          const createdAt = new Date(Date.parse(post_date)).toDateString();
          return { title, createdAt, post_date, id, Media, hashtag, blog_intro, categories };
        });

       
        this.setState({ posts });
        const sortPosts = arraySort(this.state.posts, "post_date").reverse();
        this.setState({ posts:sortPosts });
      })
      .catch(console.error);
  }

  loadmore(){
    this.setState((old)=>{
      return {visible: old.visible + 10}
    })
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
                {this.state.posts.slice(0,this.state.visible).map((post) => (
            <div className="col-12 col-md-8 bloglist-card">
              <div className="row">
                
                <div className="col-3">
                  
                  <a href>
                    <img
                      className="img-fluid"
                      src={this.state.base_url + post.Media[0].url}
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
                      {post.categories.map((category)=> (
                      <a href> <b>&middot;</b>  {category.name}  </a> ))}
                    </span>
                    <br />
                  </p>
                </div>
              </div>
             </div>
              ))}
              <hr />
              <div className="text-center">
              { this.state.visible <= this.state.posts.length &&
              <button type="button" onClick={this.loadmore} className="btn btn-secondary">Load More</button>
              }
              </div>
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
