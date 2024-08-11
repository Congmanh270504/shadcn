import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
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
    const [type, setTypeInput] = useState("password")
    const [errorMessages, setErrorMessages] = useState(false);
    const [path, setPath] = useState("/login")
    const [user, setUser] = useState({
        email: "",
        password: "",
        rememberMe: true,
        img: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    const [disabledBtn, setdisabledBtn] = useState(true)
    const handleLogin = (user) => {
        if (user.email !== "manh" || user.password !== "123") {
            setErrorMessages(true);
            setPath("/")
        } else {
            localStorage.setItem("user", JSON.stringify(user));
        }

    }
    return (
        <Card className="mx-auto max-w-sm h-2/4 absolute top-2/4 left-2/4 -ml-2/4 -translate-x-1/2 -translate-y-1/2 w-3/4 flex flex-col justify-center gap-3 md:h-3/4 lg:gap-20">
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
                            onChange={(e) => setUser((prevUser) => ({ ...prevUser, email: e.target.value }))}
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link href="#" className="ml-auto inline-block text-sm hover-underline-animation">
                                Forgot your password?
                            </Link>
                        </div>
                        <div className="flex justify-between items-center border border-solid rounded-md p-0.5">
                            <input id="password" className="flex h-10 w-full border-input bg-background px-3 py-2 text-sm outline-none border-none" type={type} onChange={(e) => {
                                e.target.value === "" ? setShowEyes(false) : setShowEyes(true)
                                setUser((prevUser) => ({ ...prevUser, password: e.target.value }))
                            }} />
                            {showEyes && <FaEyeSlash className="mx-3 wobble-hor-bottom cursor-pointer" onClick={(e) => {
                                type === "password" ? setTypeInput("text") : setTypeInput("password")
                            }} />}
                        </div>
                    </div>
                    {errorMessages && <div className="text-red-500">Email or password is incorrect</div>}
                    <Link to={path}>
                        <Button type="submit" className="w-full" disabled={user.email === "" || user.password === "" ? true : false} onClick={(e) => {
                            e.preventDefault()
                            handleLogin(user)
                            console.log(path)
                        }}>
                            Login
                        </Button>
                    </Link>
                    <Button variant="outline" className="w-full">
                        Login with Google <FcGoogle className="ml-1" />
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className="hover-underline-animation">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
export default LoginForm