import React from 'react'
import '../css/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    return (
        <div className='contact-container'>
            <h1 className='title' id='contact'>Social handles</h1>
            <div className='social-icons'>
                <a target='_blank' href='https://www.instagram.com/imdhamu/' className='contact-icon' id='insta'><FontAwesomeIcon icon={faInstagram} title="Instagram" /></a>
                <a target='_blank' href='https://www.linkedin.com/in/dhamodharan-dev' className='contact-icon' id='lin'><FontAwesomeIcon icon={faLinkedin} title="LinkedIn" /></a>
                <a target='_blank' href='https://github.com/Dhamodharan-dev' className='contact-icon'><FontAwesomeIcon icon={faGithub} title="GitHub" /></a>
            </div>
            <p><a href="mailto:myself.dhamodharan@gmail.com" className='email'>Email - myself.dhamodharan@gmail.com</a></p>
        </div>
    )
}

export default Contact