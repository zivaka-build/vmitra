import React, { Fragment } from "react";

import Nav from "./Homepage/Nav";
import TopBar from "./Homepage/TopBar";
/* import SingleBlog from "./Homepage/SingleBlog"; */
import Footer from "./Homepage/Footer";
import Homepage from "./Homepage/Homepage";

const VMitra = () => {
  return (
    <Fragment>
      {/* TopBar */}
      <TopBar />
      {/* Navbar */}
      <Nav />
      {/* SingleBlog */}
      <Homepage />
      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default VMitra;
