import './style/blog.css'

import Nav from './components/Nav'
import Blogblock from './components/blogblock'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Blog () {
    const [ blogs , setblogs ] = useState()

    useEffect( () => {
        fetch('http://localhost:1000/blog')
        .then(res => res.json())
        .then(res => setblogs(res))
    } , [] )

    return (
        <>
        <Nav />
        <div className="blogs-block">
            {blogs && blogs.map(x => <Blogblock x={x}/>)}
        </div>
        </>
    )
}