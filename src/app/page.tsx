"use client";
import Dashboard from "../components/Dashboard";
import Orders from "../components/Orders";
import Setting from "../components/Setting";
import React, { createContext, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    // <New/>
  );
}
