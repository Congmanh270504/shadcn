import React, { useState, useEffect } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Outlet, Link, NavLink } from "react-router-dom";
import {
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    File,
    Home,
    LineChart,
    ListFilter,
    MoreVertical,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    Truck,
    Users2,
} from "lucide-react"

export function Sidebar({ tittleAbove, setTittleAbove,tittleBelow,setTittleBelow }) {
    const [active, setActive] = useState([{
        bgAccent: "",
        textAccent: "",
        textMuted: "text-muted-foreground"
    },
    {
        bgAccent: 'bg-accent',
        textAccent: "text-accent-foreground",
        textMuted: ""
    }])
    const handleActiveOn = (index, value) => {
        if (value === 1) {
            const updatedTittleAbove = tittleAbove.map(item => ({
                ...item,
                ...active[0]
            }));
            updatedTittleAbove[index] = { ...tittleAbove[index], ...active[1] }
            setTittleAbove(updatedTittleAbove);
        }
        else {
            const updatedTittleAbove = tittleAbove.map(item => ({
                ...item,
                ...active[0]
            }));
            setTittleAbove(updatedTittleAbove);

            const updatedTittleBelow = tittleBelow.map(item => ({
                ...item,
                ...active[0]
            }));
            updatedTittleBelow[index] = { ...tittleBelow[index], ...active[1] }
            setTittleBelow(updatedTittleBelow)
        }


    }
    return (
        <aside className="fixed inset-y-0 left-0 z-10 w-14 flex-col border-r bg-background flex sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    to="/"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <TooltipProvider>
                    {
                        tittleAbove.map((item, index) => {
                            const Icon = item.tag;
                            return (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild className={`${item.bgAccent} ${item.textAccent} ${item.textMuted}`}
                                        onClick={() => {
                                            handleActiveOn(index, 1);
                                        }
                                        }
                                    >
                                        <Link
                                            to={`/${item.name}`}
                                            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
                                        >
                                            {Icon ? <Icon className="h-5 w-5" /> : null}
                                            <span className="sr-only">{item.name}</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">{item.name}</TooltipContent>
                                </Tooltip>
                            )
                        })
                    }
                </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <TooltipProvider>
                    {
                        tittleBelow.map((item, index) => {
                            const Icon = item.tag;
                            return (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild className={`${item.bgAccent} ${item.textAccent} ${item.textMuted}`}
                                    >
                                        <Link
                                            to={`/${item.name}`}
                                            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
                                            onClick={() => {
                                                handleActiveOn(index, 2)
                                            }}
                                        >
                                            {Icon ? <Icon className="h-5 w-5" /> : null}
                                            <span className="sr-only">{item.name}</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">{item.name}</TooltipContent>
                                </Tooltip>
                            )
                        })
                    }
                </TooltipProvider>
            </nav>
        </aside >
    )
}
export default Sidebar;