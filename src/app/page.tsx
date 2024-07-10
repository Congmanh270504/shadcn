"use client";
import Dashboard from "../components/Dashboard";
import Orders from "../components/Orders";
import Setting from "../components/Setting";
import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
export default function Home() {
  const [showHeaderAndNav, setShowHeaderAndNav] = useState(true);
  const toggleHeaderAndNav = () => {
    setShowHeaderAndNav(!showHeaderAndNav);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App showHeaderAndNav={showHeaderAndNav} />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route
              path="setting"
              element={<Setting setShowHeaderAndNav={setShowHeaderAndNav} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    // <New/>
  );
}
