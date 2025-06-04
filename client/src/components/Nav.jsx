import { Link } from 'react-router-dom'
import '../style/nav.css'

export default function Nav () {
    return (
        <>
        <nav>
            <div className="nav-block">
                <div className="nav-bar">
                    <div className="heading">
                        <h1>THEBLOGS</h1>
                    </div>

                    <div className="links">
                        <Link to='/'>Blogs</Link>   
                        <Link to='/'>Post a Blogs</Link>   
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}