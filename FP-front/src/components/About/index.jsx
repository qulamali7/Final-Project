import React from 'react'
import "./index.scss";
const About = () => {
  return (
    <>
    <section id='about'>
        <div className='about_container'>
            <div className='about_content'>
                <div className='about_left'>
                    <img src="https://zcube.in/mecare/img/bg/illlustration.png" alt="" />
                </div>
                <div className='about_right'>
                    <h4>ABOUT US</h4>
                    <h2>We Are Specialize in Medical Diagnositics</h2>
                    <p>Nulla lacinia sapien a diam ullamcorper, sed congue leo vulputate. Phasellus et ante ultrices, sagittis purus vitae, sagittis quam. Quisque urna lectus, auctor quis tristique tincidunt, semper vel lectus. Mauris eget eleifend massa. Praesent ex felis, laoreet nec tellus in, laoreet commodo ipsum.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About