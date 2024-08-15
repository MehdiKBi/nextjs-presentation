
import Link from "next/link";


export async function generateMetadata({ params }) {
    const product = await params.productsId;

    return {
        title: `Product: ${product}`,
        description: `Details about the product`,
    };
}


export default function proId({ params }) {
    return (<>
        <Link href='/products/123/review'>to Review</Link>
       
        <h1>{params.productsId}</h1>
    </>)
}