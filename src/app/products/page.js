"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Products() {
    const pathname = usePathname()
    const routes = useRouter()

    // if(1==1){
    //     throw new error()
    // }

    return <><h1>Products</h1>
    <p>Current pathname: {pathname}</p>
    <button onClick={()=> routes.back()}>Back</button>
     <Link href='/products/1'>product 1</Link> <p>product 2 </p><p>product 3</p></>
}