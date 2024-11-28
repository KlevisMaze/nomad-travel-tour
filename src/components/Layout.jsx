/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Fixed Navbar at the top */}
      <Navbar />
      {/* Main content after the Navbar */}
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
};

// Add prop validation for 'children'
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children are passed
};

export default Layout;
