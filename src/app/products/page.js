
import Link from "next/link";

export const metadata = {
    title: 'product page metadata title',
  }


export default function Products (){
    return <><Link href='/products/123'>to product</Link></>
}