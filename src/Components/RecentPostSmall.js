import React from "react";
import axios from "axios";
import { Link,navigate } from "@reach/router";
var arraySort = require('array-sort');


class RecentPostSmall extends React.Component {
    state = {
        categories: [],
        base_url: "http://34.69.57.206:1337",
        displaypic: "",
        posts: [],
      };

      componentDidMount() {
    
        axios
          .get("http://34.69.57.206:1337/bloglists/" + this.props.id)
          .then(({ data }) => {
            console.log("blogs", data);
            const posts = data.blogs.map((blog) => {
              const { title, post_date, id, Media, hashtag, blog_intro} = blog;
              const createdAt = new Date(Date.parse(post_date)).toDateString();
              return { title, createdAt, post_date, id, Media, blog_intro };
            });
            this.setState({ posts });
            const sortPosts = arraySort(this.state.posts, "post_date").reverse();
            this.setState({ posts:sortPosts });
          })
          .catch(console.error);
      }  

      render() {
        console.log(this.state.posts);
        return (
            
            
              
                
                  
                    <div className="small-recent-posts my-5">
                      <h3 className="blog-post-title">Recent Posts</h3>
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
                            <Link to={"/blog/" + post.id}><h6>{post.title}</h6></Link>
                          </span>
                          
                          <span className="bloglist-intro">
                            <a href>{post.blog_intro}</a>
                          </span>
                          <br />
                          {/* <span className="bloglist-author">
                            <a href>{blog.Author || ""}</a>
                          </span>
                          <br /> */}
                          <span className="bloglist-date">{post.post_date}</span>
                          
                        </p>
                      </div>
                    </div>
                   </div>
                    ))}

</div>
                
                  
                  
                  
        
                
              
            

        );
      
    }

}

export default RecentPostSmall;