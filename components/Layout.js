import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
