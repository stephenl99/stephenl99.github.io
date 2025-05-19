// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import "./index.css"
import Footer from "./components/Footer.jsx";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
    </>
  )
}

export default App
