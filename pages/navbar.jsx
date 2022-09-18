import Link from 'next/link'
const navBar = () => {
    return (
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/service"><a>Service</a></Link>
            <Link href="/blog"><a>Blog</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </nav>
    )
}

export default navBar

