import React, {useState} from "react";
import './navbar.css'
import { Link } from "react-router-dom"

function Nav() {
    const [Nav, setNav] = useState (false)

    return ( 
        <div>
            <nav className='navbar'>
                <h3 className='logo'>TaskTrain</h3>
                    <ul className={Nav ? "nav-link" : "nav-links"} onClick={() => setNav(false)}>
                         <Link to='/' className='home'>
                            <li>Home</li>
                         </Link>
                         <Link to='/todos' className='todos'>
                            <li>Todos</li>
                        </Link>
                        <Link to='/new' className='home'>
                            <li>New</li>
                        </Link>
                    </ul>
                        <button className='nav-menu-icon' onClick={() => setNav(!Nav)}>
                         </button>
             </nav>
        </div>
     );
}

export default Nav;