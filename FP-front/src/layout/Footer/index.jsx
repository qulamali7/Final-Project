import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className='footer_top'>
                <img src="https://zcube.in/mecare/img/an-bg/footer-bg.png" alt="" />
            </div>
            <footer>
                <div className='footer_back'>
                    <div className='footer_container'>
                        <div className='footer_content'>
                            <div className='footer_logo'>
                                <div className='logos'>
                                    <img src="https://zcube.in/mecare/img/logo/logo.png" alt="" />
                                </div>
                                <p>Sed ut perspiciatis unde om is nerror sit voluptatem accustium dolorem tium totam rem aperam eaque ipsa quae ab illose inntore veritatis</p>
                                <div className='footer_icons'>
                                    <div className='footer_icon'>
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className='footer_icon'>
                                        <i className="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className='footer_icon'>
                                        <i className="fa-brands fa-instagram"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='footer_links'>
                                <h4>Our Links</h4>
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-chevron-right"></i>
                                        <Link>Partners</Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-chevron-right"></i>
                                        <Link>About Us</Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-chevron-right"></i>
                                        <Link>Career</Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-chevron-right"></i>
                                        <Link>Reviews</Link>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-chevron-right"></i>
                                        <Link>Help</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer_contacts'>
                                <h3>Contact Us</h3>
                                <div className='footer_contact_content'>
                                    <div className='contact_icons'>
                                        <div className='contact_icon'>
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <p>1800-121-3637
                                            +91 555 234-8765</p>
                                    </div>
                                    <div className='contact_icons'>
                                        <div className='contact_icon'>
                                            <i className="fa-regular fa-envelope"></i>
                                        </div>
                                        <p>info@example.com
                                            sale@example.com</p>
                                    </div>
                                    <div className='contact_icons'>
                                        <div className='contact_icon'>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <p>380 St Kilda Road, Melbourne VIC 3004, Australia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer