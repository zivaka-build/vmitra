import React, { Fragment } from "react";

import Nav from "./Homepage/Nav";
import TopBar from "./Homepage/TopBar";
import ContactForm from "./Homepage/ContactForm";
import Footer from "./Homepage/Footer";

const Contact = () => {
  return (
    <Fragment>
      {/* TopBar */}
      <TopBar />
      {/* Navbar */}
      <Nav />
      {/* ContactForm */}
      <ContactForm />
      {/* Footer */}
      <Footer />
    </Fragment>
  );
};

export default Contact;
