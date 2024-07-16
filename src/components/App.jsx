import Sidebar from '../components/Sidebar';
import Headers from '../components/Headers';

import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import LoginForm from './LoginForm';

function App({ showHeaderAndNav, setShowHeaderAndNav, tittleAbove, setTittleAbove, tittleBelow, setTittleBelow }) {


    // useEffect(() => {
    //     setShowHeaderAndNav(true);
    // }, [showHeaderAndNav]);
    return (
        <>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                {showHeaderAndNav && (
                    <Sidebar tittleAbove={tittleAbove} setTittleAbove={setTittleAbove} tittleBelow={tittleBelow} setTittleBelow={setTittleBelow} showHeaderAndNav={showHeaderAndNav}
                        setShowHeaderAndNav={setShowHeaderAndNav} />
                )}
                <div className="flex min-h-screen w-full flex-col bg-muted/40">
                    {showHeaderAndNav && (
                        <div className="flex-col pl-12 sm:gap-4 sm:py-4 sm:pl-13 ">
                            <Headers tittleAbove={tittleAbove} setTittleAbove={setTittleAbove} />
                        </div>
                    )}
                    <Outlet ></Outlet>
                </div>
            </div>
        </>

    )
}
export default App;