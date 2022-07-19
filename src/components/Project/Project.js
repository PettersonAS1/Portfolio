import React from 'react'
import './Project.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjetoAcai from '../../assets/Home/ProjetoAcai.jpeg'
import ProjetoFlamengo from '../../assets/Home/ProjetoFlamengo.jpeg'
import ProjetoPsicologia from '../../assets/Home/ProjetoPsicologia.jpeg'
import ProjetoMilhas from '../../assets/Home/milhas-project.jpg'

function Project() {
    return (
        <div className='project-container'>
            <div className='project-parent'>
                <div className='row'>
                    <div className="col-md-12">
                        <h1 className='project-title'>Meus Projetos</h1>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="content">
                            <a>
                                <div class="content-overlay"></div> <img class="content-image" src={ProjetoAcai} />
                                <div class="content-details fadeIn-bottom">
                                    <h3 class="content-title">Projeto desenvolvido utilizando HTML, CSS e JavaScript. Além de algumas bibliotecas de animações como tilt.js.</h3>
                                    <a href="https://pettersonas1.github.io/LandingPage_Acai/">
                                        <button className='btn project-btn'>Acessar</button>
                                    </a>
                                    <a href="https://github.com/PettersonAS1/LandingPage_Acai" target="_blank">
                                        <button className='btn project-btn'><ion-icon name="logo-github"></ion-icon> GitHub</button>
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="col-md-4 mb-4">
                        <div class="content">
                            <a>
                                <div class="content-overlay"></div> <img class="content-image" src={ProjetoFlamengo} />
                                <div class="content-details fadeIn-bottom">
                                    <h3 class="content-title">Projeto focado nas funcionalidades e animações do Bootstrap.</h3>
                                    <a href="https://pettersonas1.github.io/LandingPage_Flamengo/">
                                        <button className='btn project-btn'>Acessar</button>
                                    </a>
                                    <a href="https://github.com/PettersonAS1/LandingPage_Flamengo" target="_blank"><button className='btn project-btn'><ion-icon name="logo-github"></ion-icon> GitHub</button>
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="col-md-4 mb-4">
                        <div class="content">
                            <a>
                                <div class="content-overlay"></div> <img class="content-image" src={ProjetoPsicologia} />
                                <div class="content-details fadeIn-bottom">
                                    <h3 class="content-title">Projeto desenvolvido em ReactJs, consumindo as API EmailJS e ViaCEP... [Em Construção!]</h3>
                                    <a href="https://github.com/PettersonAS1/ProjetoPsicologia">
                                        <button className='btn project-btn'>Acessar</button>
                                    </a>
                                    <a href="https://github.com/PettersonAS1/ProjetoPsicologia" target="_blank"><button className='btn project-btn'><ion-icon name="logo-github"></ion-icon> GitHub</button>
                                    </a>
                                </div>
                            </a>
                        </div>

                    </div>

                    <div class="col-md-4 mb-4">
                        <div class="content">
                            <a>
                                <div class="content-overlay"></div> <img class="content-image" src={ProjetoMilhas} />
                                <div class="content-details fadeIn-bottom">
                                    <h3 class="content-title">Projeto feito com HTML, CSS e JavaScript para um teste técnico.</h3>
                                    <a href="https://pettersonas1.github.io/Milhas-Project/">
                                        <button className='btn project-btn'>Acessar</button>
                                    </a>
                                    <a href="https://github.com/PettersonAS1/Milhas-Project" target="_blank"><button className='btn project-btn'><ion-icon name="logo-github"></ion-icon> GitHub</button>
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project