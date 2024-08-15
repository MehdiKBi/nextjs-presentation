
import Link from "next/link";


export default function review() {
    return (
        <>
            <Link href='/products/123/review/1'>to id 1</Link> <br></br>
            <Link href='/products/123/review/2'>to id 2</Link>
        </>
    )
}