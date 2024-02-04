import React from 'react'
import "./index.scss";
const NewsLetter = () => {
  return (
    <>
    <section id='news'>
      <div className='news_container'>
        <div className='news_content'>
          <div className='news_left'>
            <p>NEWSLETTER</p>
            <h2>Subscribe To Our Newsletter</h2>
          </div>
          <div className='news_input'>
            <input type="text" placeholder='Email Address...' />
            <button>Subscribe</button>
          </div>
          <div className='news_right'>
            <img src="https://zcube.in/mecare/img/bg/news-illustration.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default NewsLetter