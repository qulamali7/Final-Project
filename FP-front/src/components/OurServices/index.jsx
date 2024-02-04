import React from 'react'
import "./index.scss";
const OurServices = () => {
    return (
        <>
            <section id='our_services'>
                <div className='services_container'>
                    <div className='services_content'>
                        <div className='services-title'>
                            <p>OUR SERVICES</p>
                            <h2>Our Special Services For You</h2>
                        </div>
                        <div className='services_cards'>
                            <div className='services_card'>
                                <div className='card_content'>
                                    <div className='card_img'>
                                        <img src="https://zcube.in/mecare/img/icon/sr-icon01.png" alt="" />
                                    </div>
                                    <h3>Find a Location</h3>
                                    <p>Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.</p>
                                </div>
                            </div>
                            <div className='services_card card2'>
                                <div className='card_content'>
                                    <div className='card_img'>
                                        <img src="https://zcube.in/mecare/img/icon/sr-icon02.png" alt="" />
                                    </div>
                                    <h3>Find a Location</h3>
                                    <p>Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.</p>
                                </div>
                            </div>
                            <div className='services_card'>
                                <div className='card_content'>
                                    <div className='card_img'>
                                        <img src="https://zcube.in/mecare/img/icon/sr-icon03.png" alt="" />
                                    </div>
                                    <h3>Find a Location</h3>
                                    <p>Mauris nunc felis, congue eu convallis in, bibendum vitae nisl. Duis vestibulum eget orci maximus pretium.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurServices