import Sidebar from '../components/Sidebar';
import Headers from '../components/Headers';

import React from 'react';
import { BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom';
function App() {
    return (
        <>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <Sidebar />
                <div className="flex min-h-screen w-full flex-col bg-muted/40">
                    <div className="  flex-col pl-12 sm:gap-4 sm:py-4 sm:pl-13 ">
                        <Headers />
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>

    )
}
export default App;