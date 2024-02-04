import React, { useEffect, useRef } from 'react'
import "./index.scss";
import { Link, NavLink } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const stickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("sticky_header")
            }
            else {
                headerRef.current.classList.remove("sticky_header")
            }
        })
    }
    useEffect(() => {
        stickyHeader()
        return () => window.removeEventListener('scroll', stickyHeader)
    })

    const toggleMenu=()=>{
        menuRef.current.classList.toggle('show_menu')
    }
    return (
        <>
            <header ref={headerRef}>
                <div className='header_container' >
                    <div className='header_content'>
                        <div className='logo'>
                            <img src="https://zcube.in/mecare/img/logo/logo.png" alt="" />
                        </div>
                        <nav ref={menuRef} onClick={toggleMenu}>
                            <ul>
                                <li >
                                    <NavLink to={"/"}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/findDoctor"}>Find a Doctor</NavLink>
                                </li>
                                <li>
                                    <NavLink>Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className='header_right'>
                            <div className='user_profile'>
                                <figure>
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </figure>
                            </div>
                            <Link to={"/login"}>
                                <button className='login_btn'>Login</button>
                            </Link>
                            <span onClick={toggleMenu}>
                                <BiMenu className="menu_icon" />
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar