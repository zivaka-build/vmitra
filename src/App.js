import React from "react";
import { Router } from "@reach/router";
import "./assets/css/style.css";

import VMitra from "./Components/VMitra";
import Contact from "./Components/Contact";
import QissaaBuddy from "./Components/QissaaBuddy";
import SingleBlogPage from "./Components/SingleBlogPage";
import BlogListPage from "./Components/BlogListPage";
import Blogs from "./Components/Blogs";
import About from "./Components/About";

function App() {
    return (
        <Router>
            <VMitra path="/" />
            <Contact path="/contact" />
            <QissaaBuddy path="/qissa" />
            <SingleBlogPage path="/blog/:id" />
            <BlogListPage path="/bloglist/:id" />
            <Blogs path="/blogs" />
            <About path="/about" />
        </Router>
    );
}

export default App;
