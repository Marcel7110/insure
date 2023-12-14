import { useState, useRef } from "react";
import logo from '../assets/logo.svg'
import menu from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'

const Navbar = () => {
    const [active,setActive] = useState(false)
    const navRef = useRef()

    const handleMenu = () => {
        navRef.current.classList.toggle('nav-open')
        setActive(prev => !prev)
    }

    return ( 
        <nav ref={navRef}>
            <div>
                <img src={logo} alt="logo" className="logo"/>
                <button onClick={handleMenu}>
                    <img src={active === false ? menu : close} alt=""/>
                </button>
            </div>
            <menu>
                <a href="#">HOW WE WORK</a>
                <a href="#">BLOG</a>
                <a href="#">ACCOUNT</a>
                <a href="#">VIEW PLANS</a>
            </menu>
        </nav>
     );
}
 
export default Navbar;