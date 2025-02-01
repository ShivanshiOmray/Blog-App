import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div className="mr-7 ml-7">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
