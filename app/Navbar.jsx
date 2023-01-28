import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <Link href="/">Home</Link> |&nbsp;
            <Link href="/about">About</Link> |&nbsp;
            <Link href="/team">Team</Link>
        </nav>
    )
}