import { Outlet, Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
import { FaEyeSlash } from "react-icons/fa";
export function LoginForm() {
    const [showEyes, setShowEyes] = useState(false)
    return (
        <Card className="mx-auto max-w-sm h-2/4 absolute top-2/4 left-2/4 -ml-2/4 -translate-x-1/2 -translate-y-1/2 w-3/4 flex flex-col justify-center gap-8 md:h-3/4 lg:gap-20
        
        ">
            <CardHeader>
                <CardTitle className="text-2xl text-center">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
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
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link href="#" className="ml-auto inline-block text-sm hover-underline-animation">
                                Forgot your password?
                            </Link>
                        </div>
                        <div className="flex justify-between items-center border border-solid rounded-md">
                            <input id="password" className="flex h-10 w-full border-input bg-background px-3 py-2 text-sm outline-none border-none" onChange={(e) => {
                               e.target.value === "" ? setShowEyes(false) : setShowEyes(true)
                                // setShowEyes(!showEyes)
                            }} />
                            {showEyes && <FaEyeSlash className="mx-3 wobble-hor-bottom" />}
                        </div>
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="#" className="hover-underline-animation">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
export default LoginForm