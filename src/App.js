import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/about";
import Achievements from "./Components/achievements";
import Projects from "./Components/projects";
import Contact from "./Components/contact";

function App(){
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Jeffery Hu</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="achievements">Achievements</NavLink>
        <NavLink to="projects">Projects</NavLink>
        <a href="https://jefferyhu2005.wixsite.com/portfolio" target="_blank">Java Tutorials</a>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="achievements" element={<Achievements />}/>
          <Route path="projects" element={<Projects />}/>
          <Route path="contact" element={<Contact />}/>
        </Routes>
      </main>
    </BrowserRouter>
    
  )
}

export default App