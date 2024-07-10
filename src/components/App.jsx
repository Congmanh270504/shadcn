import Sidebar from '../components/Sidebar';
import Headers from '../components/Headers';

import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom';

import { Home, ShoppingCart, Settings } from "lucide-react";
function App() {

    const [tittleAbove, setTittleAbove] = useState([ // above
        {
            name: 'Dashboard',
            tag: Home,
            bgAccent: "bg-accent",
            textAccent: "text-accent-foreground",
            textMuted: ""
        },
        {
            name: 'Orders',
            tag: ShoppingCart,
            bgAccent: "",
            textAccent: "",
            textMuted: "text-muted-foreground"
        },

    ])
    const [tittleBelow, setTittleBelow] = useState([ // above
        {
            name: 'Setting',
            tag: Settings,
            bgAccent: "",
            textAccent: "",
            textMuted: "text-muted-foreground"
        }
    ])
    return (
        <>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <Sidebar tittleAbove={tittleAbove} setTittleAbove={setTittleAbove} tittleBelow={tittleBelow} setTittleBelow={setTittleBelow} />
                <div className="flex min-h-screen w-full flex-col bg-muted/40">
                    <div className="  flex-col pl-12 sm:gap-4 sm:py-4 sm:pl-13 ">
                        <Headers tittleAbove={tittleAbove} tittleBelow={tittleBelow}/>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>

    )
}
export default App;