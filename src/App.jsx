import Navbar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import ScrollTop from './components/ScrollTop.jsx'

function App() {

  return (
    <>
      <main className='main'>
        <div className="h-dvh">
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Contact />
          <ScrollTop />
          
        </div>
      </main>
    </>
  )
}

export default App
