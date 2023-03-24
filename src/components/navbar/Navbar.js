import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

function Navbar() {
    const [Navigation, setNavigation] = useState(false)
    return ( 
        <div>
            <nav className="navbar">
                <h3 className="logo">TaskTrain</h3>
                <ul className={Navigation ? "nav-links-mobile" : "nav-links"} onClick={() => setNavigation(false)}>
                    <Link to='/' className="home">
                        <li>Home</li>
                    </Link>
                    <Link to='/task' className="task">
                        <li>Task</li>
                    </Link>
                    <Link to='/addnew' className="addnew">
                        <li>Add Task</li>
                    </Link>
                </ul>
                <button className="mobile-menu-icon" onClick={() => setNavigation(!Navigation)}>
                    {Navigation ? <ImCross/> : <FaBars/>}}
                </button>
            </nav>
        </div>
     );
}

export default Navbar;