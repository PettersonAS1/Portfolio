import React from 'react'
import './Home.css'
import Shape from '../../assets/Home/shape-bg.png'

function Home() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='profile-networks'>
                        <div className='networks-icon'>
                            <a href="#">
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href="#">
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href="#">
                                <i className='fa fa-github-square'></i>
                            </a>
                            <a href="#">
                                <i className='fa fa-whatsapp'></i>
                            </a>
                        </div>

                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Olá, eu sou o <span className='special-text'>
                                Petterson
                            </span>
                        </span>
                    </div>
                    <div className='profile-info'>
                        <span className='profile-tag'>
                            Desenvolvedor Front-End Júnior | HTML | CSS | JavaScript | ReactJS | Vue.JS
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn mb-2 primary-btn'>
                            {" "}
                        LinkedIn    {" "}
                        </button>
                        <button className='btn mb-2 highlighted-btn'><a href="#" download='CV-PettersonAndré.pdf'>Meu curriculo</a></button>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}

export default Home