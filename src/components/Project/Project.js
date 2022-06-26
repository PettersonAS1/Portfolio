import React from 'react'
import './Project.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjetoAcai from '../../assets/Home/ProjetoAcai.jpeg'
import ProjetoFlamengo from '../../assets/Home/ProjetoFlamengo.jpeg'
import ProjetoPsicologia from '../../assets/Home/ProjetoPsicologia.jpeg'

function Project() {
    return (
        <div className='project-container'>
            <div className='project-parent'>
                <div className='row'>
                    <div className="col-md-12">
                        <h1 className='project-title'>Meus Projetos</h1>
                    </div>
                    <div className="project-card col-md-4">
                        <img src={ProjetoAcai} className="img-fluid" />
                        <div className='project-icon'>
                            <ion-icon name="logo-html5"></ion-icon>
                            <ion-icon name="logo-css3"></ion-icon>
                            <ion-icon name="logo-javascript"></ion-icon>
                        </div>
                        <div className='project-buttons'>
                            <a href="https://pettersonas1.github.io/LandingPage_Acai/">
                                <button className='btn project-btn'>Acessar</button>
                            </a>
                            <a href="https://github.com/PettersonAS1/LandingPage_Acai" target="_blank">
                                <button className='btn project-btn'><ion-icon name="logo-github"></ion-icon> GitHub</button>
                            </a>
                        </div>
                    </div>
                    <div className="project-card col-md-4">
                        <img src={ProjetoFlamengo} className="img-fluid" />
                        <div className='project-icon'>
                            <ion-icon name="logo-html5"></ion-icon>
                            <ion-icon name="logo-css3"></ion-icon>
                            <ion-icon name="logo-javascript"></ion-icon>
                        </div>
                        <div className='project-buttons'>
                            <button className='btn project-btn'>Acessar</button>
                            <button className='btn project-btn'><ion-icon name="logo-github"></ion-icon> GitHub</button>
                        </div>
                    </div>
                    <div className="project-card col-md-4">
                        <img src={ProjetoPsicologia} className="img-fluid" />
                        <div className='project-icon'>
                            <ion-icon name="logo-html5"></ion-icon>
                            <ion-icon name="logo-css3"></ion-icon>
                            <ion-icon name="logo-javascript"></ion-icon>
                        </div>
                        <div className='project-buttons'>
                            <button className='btn project-btn'>Acessar</button>
                            <button className='btn project-btn'><ion-icon name="logo-github"></ion-icon> GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project