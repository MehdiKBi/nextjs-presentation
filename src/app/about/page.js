"use client"

import { usePathname } from "next/navigation"



export default function About(){
    const pathName = usePathname()
    return <h1>{pathName}</h1>
}


