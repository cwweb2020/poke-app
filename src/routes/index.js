import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Description from "../views/Description";
import Home from "../views/Home";
import Layout from "./Layout";
import ScrollToTop from "../components/ScrollToTop";



const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="description/:id" element={<Description />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
