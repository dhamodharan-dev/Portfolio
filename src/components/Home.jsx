import React, { useEffect, useState } from 'react'
import myPic from '../assets/my pic.png'
import '../css/Home.css'

function Home() {
  const [role, setRole] = useState(' ')
  const words = ["Frontend Developer ", "React Developer "];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  useEffect(() => {
    function type() {
      currentWord = words[i];
      if (isDeleting) {
        setRole(currentWord.substring(0, j - 1))
        j--;
        if (j == 0) {
          isDeleting = false;
          i++;
          if (i == words.length) {
            i = 0;
          }
        }
      } else {
        setRole(currentWord.substring(0, j + 1))
        j++;
        if (j == currentWord.length) {
          isDeleting = true;
        }
      }
      setTimeout(type, 300);
    }

    type();
  }, [])

  return (
    <main className="home">
      <aside className='aside1'>
        <h3 className='welcome-text'>Hi, Welcome</h3>
        <h1 className='intro-text'>I am <span className='name'>Dhamodharan B</span></h1>
        <h3 className="role">{`Junior ${role}`}</h3>
        <div className="text-box">
          <a target='_blank' href="https://drive.google.com/file/d/1lT-gw0_WAoT68xLmyHw9UJTv3YcKUVrn/view" className="btn btn-white btn-animate">Resume</a>
        </div>
      </aside>
      <aside className='aside2'>
        <img src={myPic} alt="Dhamodharan" className='my-pic' />
      </aside>
    </main>
  )
}

export default Home