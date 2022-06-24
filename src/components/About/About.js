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
            <p className='font-weight-bold'>Brasilia, DF</p>
            <p>Olá, meu nome é Petterson André, me formei em Analise e Desevolvimento de Sistemas em Dezembro de 2021, e desde então venho me dedicando nos estudos para ser um desenvolvedor FullStack. Tendo em mente que estamos sempre em constante aprendizado, venho aprimorando meus conhecimentos Técnicos e Pessoais, estou sempre disposto a desafios. Venho me aperfeiçoando nas linguagens:</p>
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
              <button className='btn mb-2 primary-btn'>
                <a href="https://www.linkedin.com/in/petter-andre/" target="_blank">
                  LinkedIn
                </a>
              </button>
              <button className='btn mb-2 sucess-btn'>
                <a href="https://api.whatsapp.com/send?phone=5561992580891" target="_blank">
                  WhatsApp
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About