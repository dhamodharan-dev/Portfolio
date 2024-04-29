import React from 'react'
import '../css/Projects.css'
import Project1 from '../assets/p1.png'
import Project2 from '../assets/p2.png' 
import Project3 from '../assets/p3.png' 

function Projects() {
    return (
        <section className='projects-section'>
            <h1 id='title'>Projects</h1>
            <div className="projects-container">
                <article className="project p-1">
                    <img src={Project1} alt="Project 1" className='project-img' />
                    <div className='project-details'>
                        <h1 className="project-title">Property management system</h1>
                        <p className="project-about">This is a MERN stack project called THRIVNEST the front end is deployed using Netlify and the back end is hosted using Render.</p>
                        <div className="projects-btn">
                            <a href="https://main--thrivnest.netlify.app/" target='_blank'><button className="btn-4">Live link</button></a>
                            <a href="https://github.com/Dhamodharan-dev/ThrivNest" target='_blank'><button className="btn-4">Source code</button></a>
                        </div>
                    </div>
                </article>
                <article className="project p-2">
                    <div className='project-details'>
                        <h1 className="project-title">To-do list</h1>
                        <p className="project-about">This project is build using Vite js and to-do lists are stored in local storage. It is deployed using Netlify.</p>
                        <div className="projects-btn">
                            <a href="https://to-do-list-react-js.web.app/" target='_blank'><button className="btn-4">Live link</button></a>
                            <a href="https://github.com/Dhamodharan-dev/to-do-list" target='_blank'><button className="btn-4">Source code</button></a>
                        </div>
                    </div>
                    <img src={Project2} alt="Project 2" className='project-img' />
                </article>
                <article className="project p-3">
                    <img src={Project3} alt="Project 3" className='project-img' />
                    <div className='project-details'>
                        <h1 className="project-title">South Indian Restaurant</h1>
                        <p className="project-about">This project is build using Vite js and use tailwindcss for responsive design. It is deployed using Firebase</p>
                        <div className="projects-btn">
                            <a href="https://south-indian-restaurant.web.app/" target='_blank'><button className="btn-4">Live link</button></a>
                            <a href="https://github.com/Dhamodharan-dev/My-Restaurant" target='_blank'><button className="btn-4">Source code</button></a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Projects