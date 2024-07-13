"use client";
import Dashboard from "../components/Dashboard";
import Orders from "../components/Orders";
import Setting from "../components/Setting";
import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
import { Home, ShoppingCart, Settings } from "lucide-react";

export default function Container() {
  const [showHeaderAndNav, setShowHeaderAndNav] = useState(true);
  const [tittleAbove, setTittleAbove] = useState([
    // above
    {
      name: "",
      tag: Home,
      bgAccent: "bg-accent",
      textAccent: "text-accent-foreground",
      textMuted: "",
    },
    {
      name: "Orders",
      tag: ShoppingCart,
      bgAccent: "",
      textAccent: "",
      textMuted: "text-muted-foreground",
    },
  ]);
  const [tittleBelow, setTittleBelow] = useState([
    // above
    {
      name: "Setting",
      tag: Settings,
      bgAccent: "",
      textAccent: "",
      textMuted: "text-muted-foreground",
    },
  ]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <App
                showHeaderAndNav={showHeaderAndNav}
                setShowHeaderAndNav={setShowHeaderAndNav}
                tittleAbove={tittleAbove}
                setTittleAbove={setTittleAbove}
                tittleBelow={tittleBelow}
                setTittleBelow={setTittleBelow}
              />
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route
              path="setting"
              element={
                <Setting
                  tittleAbove={tittleAbove}
                  setShowHeaderAndNav={setShowHeaderAndNav}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    // <New/>
  );
}
