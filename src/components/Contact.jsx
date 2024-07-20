import React from 'react';
import '../css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            const response = await fetch('https://formspree.io/f/xqazezkb', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert("Success!!!");
                event.target.reset();
            } else {
                alert("Failed!!!");
            }
        } catch (error) {
            alert("Error!!!");
        }
    };

    return (
        <div className='contact-container'>
            <h1 className='title' id='contact'>Social handles</h1>
            <div className='social-icons'>
                <a target='_blank' href='https://www.instagram.com/imdhamu/' className='contact-icon' id='insta'>
                    <FontAwesomeIcon icon={faInstagram} title="Instagram" />
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/dhamodharan-dev' className='contact-icon' id='lin'>
                    <FontAwesomeIcon icon={faLinkedin} title="LinkedIn" />
                </a>
                <a target='_blank' href='https://github.com/Dhamodharan-dev' className='contact-icon'>
                    <FontAwesomeIcon icon={faGithub} title="GitHub" />
                </a>
                <a href="mailto:myself.dhamodharan@gmail.com" className='contact-icon' id='email'>
                    <FontAwesomeIcon icon={faEnvelope} title="Email" />
                </a>
            </div>
            <h1 className='title'>Contact Me</h1>
            <form className='contact-form' onSubmit={handleSubmit}>
                <div className="name-input">
                    <label htmlFor="Name">Name:</label>
                    <input type="text" name="Name" required placeholder='Enter your name'/>
                </div>
                <div className="email-input">
                    <label htmlFor="Email">Email:</label>
                    <input type="email" name="Email" required placeholder='Enter your email address'/>
                </div>
                <div className="message-input">
                    <label htmlFor="Message">Message:</label>
                    <textarea name="Message" id="Message" cols={10} required placeholder='Type something!!!'></textarea>
                </div>
                <input type="submit" value='Submit' className='submit'/>
            </form>
        </div>
    );
}

export default Contact;
