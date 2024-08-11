import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button"
import "../css/style.css"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaEyeSlash } from "react-icons/fa"
export function Register() {
    const [showEyes, setShowEyes] = useState(false)
    const [type, setTypeInput] = useState("password")
    return (
        <Card className="mx-auto max-w-sm absolute top-2/4 left-2/4 -ml-2/4 -translate-x-1/2 -translate-y-1/2 w-3/4 flex flex-col justify-center gap-3">
            <CardHeader>
                <CardTitle className="text-xl">Sign Up</CardTitle>
                <CardDescription>
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" placeholder="Max" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" placeholder="Robinson" required />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        {/* <Input id="password" type="password" /> */}
                        <div className="flex justify-between items-center border border-solid rounded-md p-0.5">
                            <input id="password" className="flex h-10 w-full border-input bg-background px-3 py-2 text-sm outline-none border-none" type={type} onChange={(e) => {
                                e.target.value === "" ? setShowEyes(false) : setShowEyes(true)
                            }} />
                            {showEyes && <FaEyeSlash className="mx-3 wobble-hor-bottom cursor-pointer" onClick={(e) => {
                                type === "password" ? setTypeInput("text") : setTypeInput("password")
                            }} />}
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Retype Password</Label>
                        <Input id="password" type="password" />
                    </div>
                    <Button type="submit" className="w-full">
                        Create an account
                    </Button>
                    <Button variant="outline" className="w-full">
                        Sign up with GitHub
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="hover-underline-animation">
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
export default Register