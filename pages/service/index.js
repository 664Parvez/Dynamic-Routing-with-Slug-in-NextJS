import Navbar from '../navbar.jsx'
import Link from 'next/link.js'


const Service = () => {
    return (
        <div>
            <Navbar />
            <h2>Services</h2>
            <Link href='/person'><a>Click here</a></Link>
        </div>
    )
}

export default Service