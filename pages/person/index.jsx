import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

const Users = () => {
    const  [ data, setData ] = useState([])

    useEffect (() => {
        axios.get('http://localhost:3000/api/userApi')
        .then((res) => {
            setData (res.data)
            // console.log(res);
        })
    }, [])

    return (
        <div>
            <h2>Person Page</h2>
            {
                data.map((items) => {
                    return (
                        <Link href={ `/person/${items.slug}` }><a><h3>{ items.name }</h3></a></Link>
                    )
                })
            }
        </div>
    )
}

export default Users