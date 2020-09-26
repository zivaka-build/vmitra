import React, { Fragment } from "react";

import Nav from "./Homepage/Nav";
import TopBar from "./Homepage/TopBar";
import BlogList from "./BlogList/BlogList";
import Footer from "./Homepage/Footer";


const BlogListPage = () => {
  return (
    <Fragment>
      {/* TopBar */}
      <TopBar />
      {/* Navbar */}
      <Nav />
      {/* BlogList */}
      <BlogList />
      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default BlogListPage;
