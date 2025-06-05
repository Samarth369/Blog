import { useEffect } from 'react'
import '../style/blogblock.css'
import { useState } from 'react';
import { data } from 'react-router-dom';

export default function Blogblock ({x}) {

    const [ imgsrc , setimgsrc ] = useState()

    const imgbuffer = x.img.data

    useEffect( () => {
        const bufferarray = new Uint8Array(imgbuffer)
        const blob = new Blob([bufferarray] , { type: x.mimetype})
        const url = URL.createObjectURL(blob);
        setimgsrc(url)
    } , [])

    return (
        <>
        <div className="blog-block">

            <div className="blog-img-block">
                <img src={imgsrc} alt="" />
            </div>

            <div className="blog-block-heading">
                <h1>{x.title}</h1>
            </div>
            
        </div>
        </>
    )
}