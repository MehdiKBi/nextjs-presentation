

"use client"

import { useRouter } from "next/navigation"



export default function Contact() {
    const router = useRouter();
    const pushBackHome =()=>{
             router.push("/")
    }
    return <>
        <button onClick={pushBackHome} variant="text" color="default ">
            Back to the base
        </button>
        <h1>0123912391</h1>
    </>
}