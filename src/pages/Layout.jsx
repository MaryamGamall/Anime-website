import React from "react";
import Navigation from "../Companent/Navigation/Navigation";
import Footer from "../Companent/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
