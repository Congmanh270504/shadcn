import Sidebar from '../components/Sidebar';
import React from 'react';
import { BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom';
function App() {
    return (
        <>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <Sidebar />
                <Outlet></Outlet>
            </div>
        </>

    )
}
export default App;