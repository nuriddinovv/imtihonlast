import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="">
      <Navbar />
      <div className="container max-w-[1440px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
