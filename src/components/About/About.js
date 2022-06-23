import React from 'react'
import './About.css'
import AboutImg from '../../assets/Home/about-1.svg'

function About() {
  return (
    <div className='about-container'>
      <div className='about-parent'>
        <div className='about-text'>
          <h1>Sobre mim</h1>
          <span>Por que me escolher?</span>
        </div>
        <div className='about-box'>
          <div className='about-image'>
            <img src={AboutImg} alt="" />
          </div>
          <div className='about-details'>
            <h2>Sobre</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde odio provident facere magni cum molestias aut qui reprehenderit. Officiis harum corrupti porro dolor blanditiis molestias recusandae quidem ut? Eius, consequatur!</p>
            <div className='about-list'>
              <ul>
                <li><img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" /> HTML</li>
                <li><img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" /> CSS</li>
                <li><img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" /> JavaScript</li>
                <li><img src="https://cdn-icons-png.flaticon.com/512/753/753244.png" alt="" /> ReactJS</li>
                <li><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="" /> Vue.JS</li>
              </ul>
            </div>
            <div className='about-buttons'>
              <button className='btn mb-2 primary-btn'>LinkedIn</button>
              <button className='btn mb-2 sucess-btn'>WhatsApp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About