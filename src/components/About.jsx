import React from 'react'
import '../css/About.css'
import HtmlLogo from '../assets/HTML5.png'
import CSS3Logo from '../assets/CSS3.png'
import JavaScriptLogo from '../assets/JavaScript.png'
import TailwindCSSLogo from '../assets/Tailwind CSS.png'
import ReactLogo from '../assets/React.png'
import ViteJsLogo from '../assets/Vite js.png'
import GitHubLogo from '../assets/Git hub.png'

function About() {
  const skillItems = [
    { id: 1, src: HtmlLogo, name: 'HTML' },
    { id: 2, src: CSS3Logo, name: 'CSS' },
    { id: 3, src: JavaScriptLogo, name: 'JavaScript' },
    { id: 4, src: TailwindCSSLogo, name: 'Tailwind CSS' },
    { id: 5, src: ReactLogo, name: 'React JS' },
    { id: 6, src: ViteJsLogo, name: 'Vite JS' },
    { id: 7, src: GitHubLogo, name: 'Git Hub' },
  ]
  return (
    <section className='about' id='about'>
      <h1 className='about-me title'>About me</h1>
      <div className="about-container">
        <p>Hello! I'm a dedicated and enthusiastic React developer with a strong foundation in web development. I have completed a course in HTML, CSS, and JavaScript on Udemy, which has given me a solid grounding in the essentials of front-end development. I'm always looking for opportunities to learn new technologies and grow as a developer. When I'm not coding, you can find me exploring new technologies and working on personal projects.
          <br />Let's connect! I'm open to opportunities in web development and collaboration. Feel free to reach out to me if you'd like to discuss potential projects and ideas or just talk tech!</p>
        <h1 className="skills title">Skills</h1>
        <div className='skills-container'>
          {skillItems.map((items) => {
            return (
              <div key={items.id} className='skills-item'>
                <img src={items.src} alt={items.name} className='item-img' />
                <p className='item-name'>{items.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About