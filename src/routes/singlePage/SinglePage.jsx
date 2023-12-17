import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SinglePage() {
    const [fullData, setFullData] = useState({})
    const { id } = useParams()
    let API = "https://64da6002e947d30a260b2eee.mockapi.io/foods/jobs";
    useEffect(() => {
        axios.get(API + "/" + id)
            .then(res => setFullData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='singlepage'>
            <Header />
            <h1>single page</h1>
        </div>
    )
}

export default SinglePage
