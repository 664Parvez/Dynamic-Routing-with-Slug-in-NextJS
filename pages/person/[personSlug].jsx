import userApi from "../api/userApi";
import { useRouter } from "next/router";

import { useState, useEffect } from 'react'
import axios from 'axios'

const routingHandle = () =>  {

    const router = useRouter()
    const {personSlug} = router.query


    const  [ data, setData ] = useState([])


    useEffect (() => {
        axios.get(`http://localhost:3000/api/userApi/${personSlug}`)
        .then((res) => {
            setData (res.data)
        })
    }, [])


return (
    
    <h1>{data.name}, {data.code}</h1>

)}

export default routingHandle

