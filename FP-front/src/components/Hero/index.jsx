import React from 'react'
import "./index.scss";
const Hero = () => {
  return (
    <>
    <section id='hero'>
        <div className='hero_container'>
            <div className='hero_content'>
                <div className='hero_text'>
                    <h2>Get Better Care For Your Health</h2>
                    <p>Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla. Praesent massa odio, pellentesque in consectetur quis, volutpat sit amet erat.</p>
                </div>
                <div className='hero_img'>
                    <img src="https://zcube.in/mecare/img/bg/header-img.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero