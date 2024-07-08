import React, { useState } from 'react';
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

export function Sidebar() {

    const [tittleAbove, setTittleAbove] = useState([ // above
        { name: 'Dashboard', tag: Home },
        { name: 'Orders', tag: ShoppingCart }
    ])
    const [tittleBelow, setTittleBelow] = useState([ // above
        { name: 'Setting', tag: Settings },
    ])
    const [aa, setJ] = useState(1);
    const [active, setActive] = useState([{
        bgAccent: '',
        textAccent: "",
        textMuted: "text-muted-foreground"
    }, {
        bgAccent: 'bg-accent',
        textAccent: "text-accent-foreground",
        textMuted: ""
    }])
    const [listStyle, setListStyle] = useState([{
        bgAccent: "bg-accent",
        textAccent: "text-accent-foreground",
        textMuted: ""
    },
    {
        bgAccent: "",
        textAccent: "",
        textMuted: "text-muted-foreground"
    }
    ])
    const handleActiveOff = () => {
        const tmp = listStyle.map(() => active[0]);
        setListStyle(tmp);
    }
    const handleActiveOn = (index) => {
        console.log(index)
        // handleActiveOff();
        setListStyle(listStyle.map((item, i) => i === index ? active[1] : active[0])) // lỗi làm swap idex listStyle
        // setListStyle(active[1])
        console.log(listStyle)
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
                                <>
                                    <Tooltip key={index}>
                                        <TooltipTrigger asChild className={`${listStyle[index].bgAccent} ${listStyle[index].textAccent} ${listStyle[index].textMuted}`}
                                            onClick={() => {
                                                // handleActiveOff();
                                                handleActiveOn(index);
                                            }
                                            }
                                        >
                                            <Link
                                                to={index == 0 ? `/` : `/${item.name}`}
                                                className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
                                            >
                                                {Icon ? <Icon className="h-5 w-5" /> : null}
                                                <span className="sr-only">{item.name}</span>
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent side="right">{item.name}</TooltipContent>
                                    </Tooltip>
                                </>
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
                                <>
                                    <Tooltip key={index}>
                                        <TooltipTrigger asChild className={`${listStyle[1].bgAccent} ${listStyle[1].textAccent} ${listStyle[1].textMuted}`}
                                            onClick={() => {
                                                // handleActiveOff();
                                                // console.log(index);
                                                // handleActiveOn(index);
                                                // setListStyle(listStyle.map((item, i) => i === index ? active[1] : active[0]))
                                                console.log(aa);
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
                                </>
                            )
                        })
                    }

                    {/* <Tooltip>
                        <TooltipTrigger asChild className={`${listStyle[1].bgAccent} ${listStyle[1].textAccent} ${listStyle[1].textMuted}`}
                            onClick={() => {

                            }}>
                            <Link
                                to='/Setting'
                                className="flex h-9 w-9 items-center justify-center rounded-lg  transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip> */}

                </TooltipProvider>
            </nav>
        </aside >
    )
}
export default Sidebar;