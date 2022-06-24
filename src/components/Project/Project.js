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
                <div className="row project-row">
                    <div className="col-md-12">
                        <h1 className="main-title">Meus Projetos</h1>
                    </div>
                    <div className="col-md-12" id="filter-btn-box">
                        <button className="btn mb-2 project-btn active" id="all-btn">Todos</button>
                        <button className="btn mb-2 project-btn" id="carioca-btn">ReactJS</button>
                        <button className="btn mb-2 project-btn" id="liberta-btn">Vue.JS</button>
                        <button className="btn mb-2 project-btn" id="brasileiro-btn">PHP</button>
                    </div>
                    <div className="col-md-4 project-box liberta">
                        <img src={ProjetoAcai} className="img-fluid" alt="Jogo Historico 1" />
                        <div className='project-icons'>
                            <ion-icon name="logo-html5"></ion-icon>
                            <ion-icon name="logo-css3"></ion-icon>
                            <ion-icon name="logo-javascript"></ion-icon>
                        </div>
                        <div className='project-buttons'>
                            <button className='btn mt-2 project-btn'>Acessar</button>
                            <button className='btn mt-2 git-btn'> <ion-icon name="logo-github"></ion-icon> Github</button>
                        </div>
                    </div>
                    <div className="col-md-4 project-box brasileiro">
                        <img src={ProjetoFlamengo} className="img-fluid" alt="Jogo Historico 2" />
                        <div className='project-icons'>
                            <ion-icon name="logo-html5"></ion-icon>
                            <ion-icon name="logo-css3"></ion-icon>
                            <ion-icon name="logo-javascript"></ion-icon>
                        </div>
                        <div className='project-buttons'>
                            <button className='btn mt-2 project-btn'>Acessar</button>
                            <button className='btn mt-2 git-btn'> <ion-icon name="logo-github"></ion-icon> Github</button>
                        </div>
                    </div>
                    <div className="col-md-4 project-box carioca">
                        <img src={ProjetoPsicologia} className="img-fluid" alt="Jogo Historico 3" />
                        <div className='project-icons'>
                            <ion-icon name="logo-html5"></ion-icon>
                            <ion-icon name="logo-css3"></ion-icon>
                            <ion-icon name="logo-nodejs"></ion-icon>
                        </div>
                        <div className='project-buttons'>
                            <button className='btn mt-2 project-btn'>Acessar</button>
                            <button className='btn mt-2 git-btn'> <ion-icon name="logo-github"></ion-icon> Github</button>
                        </div>
                    </div>
                    <div className="col-md-4 project-box liberta">
                        <img src={ProjetoAcai} className="img-fluid" alt="Jogo Historico 4" />
                        <div className='project-icons'>
                            <ion-icon name="logo-html5"></ion-icon>
                            <ion-icon name="logo-css3"></ion-icon>
                            <ion-icon name="logo-nodejs"></ion-icon>
                            <ion-icon name="logo-javascript"></ion-icon>
                            <ion-icon name="logo-react"></ion-icon>
                        </div>
                        <div className='project-buttons'>
                            <button className='btn mt-2 project-btn'>Acessar</button>
                            <button className='btn mt-2 git-btn'> <ion-icon name="logo-github"></ion-icon> Github</button>
                        </div>
                    </div>
                    <div className="col-md-4 project-box brasileiro">
                        <img src={ProjetoFlamengo} className="img-fluid" alt="Jogo Historico 5" />
                        <div className='project-icons'>
                            <ion-icon name="logo-html5"></ion-icon>
                            <ion-icon name="logo-css3"></ion-icon>
                            <ion-icon name="logo-python"></ion-icon>
                            <ion-icon name="logo-nodejs"></ion-icon>
                        </div>
                        <div className='project-buttons'>
                            <button className='btn mt-2 project-btn'>Acessar</button>
                            <button className='btn mt-2 git-btn'> <ion-icon name="logo-github"></ion-icon> Github</button>
                        </div>
                    </div>
                    <div className="col-md-4 project-box liberta">
                        <img src={ProjetoPsicologia} className="img-fluid" alt="Jogo Historico 6" />
                        <div className='project-icons'>
                            <ion-icon name="logo-html5"></ion-icon>
                            <ion-icon name="logo-css3"></ion-icon>
                            <ion-icon name="logo-nodejs"></ion-icon>
                        </div>
                        <div className='project-buttons'>
                            <button className='btn mt-2 project-btn'>Acessar</button>
                            <button className='btn mt-2 git-btn'> <ion-icon name="logo-github"></ion-icon> Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project