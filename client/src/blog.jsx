import './style/blog.css'

import Nav from './components/Nav'
import Blogblock from './components/blogblock'

export default function Blog () {
    return (
        <>
        <Nav />
        <div className="blogs-block">
            <Blogblock />
            <Blogblock />
            <Blogblock />
            <Blogblock />
            <Blogblock />
            <Blogblock />
        </div>
        </>
    )
}