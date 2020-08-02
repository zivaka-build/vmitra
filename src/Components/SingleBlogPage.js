import React, { Fragment } from "react";

import Nav from "./Homepage/Nav";
import TopBar from "./Homepage/TopBar";
import SingleBlog from "./Homepage/SingleBlog";
import Footer from "./Homepage/Footer";

const SingleBlogPage = () => {
    return (
        <Fragment>
            {/* TopBar */}
            <TopBar />
            {/* Navbar */}
            <Nav />
            {/* SingleBlog */}
            <SingleBlog />
            {/* Footer */}
            <Footer />
        </Fragment>
    );
};

export default SingleBlogPage;
