import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"

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
                </ul>
            </nav>
        </div>
     );
}

export default Navbar;