import React from 'react'
import {Link, Router} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className = "header-title">
                <h1>No More Dead Plants</h1>
            </div>
            <nav className = "nav-links">
                {/* <Router> */}
                    <Link to = {"/home"}>Home</Link>
                    <Link to = {"/add"}>Add New Plant</Link>
                {/* </Router> */}
            </nav>

        </>
    )
}

export default Header