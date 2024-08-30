import './style.css'
import React from "react";
import avatar from "../assets/Imgs/avatar.png"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import Image from 'next/image'
function New() {
    return <>
        <Image width={500}
            height={500}
            src={avatar}
            alt="Picture of the author" />
        <Avatar>
            <AvatarImage src="https://github.com/Congmanh270504/Db-FloralHaven/blob/main/binh-hoa-anh-duong-ruc-ro-572/12165d1e0f.jpg" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>

    </>
}
export default New;