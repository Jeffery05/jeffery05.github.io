import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "./Components/about";
import Achievements from "./Components/achievements";
import Projects from "./Components/projects";
import Home from "./Components/home";
import Contact from "./Components/contact";

export const App = () => {
  return (
    <div className="page">
      <div className="navbar">
        <header className="site-header">
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-primary">
            <div className="container">
              <a className="navbar-brand" href="home.jsx">
                {/*<i
                  className="bi bi-laptop"
                  role="img"
                  aria-label="Logo"
                  style={{padding-right: 5px;}}
  ></i>*/}
                Jeffery Hu
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="nav navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="./Components/home.jsx">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./Components/about.jsx">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./Components/achievements.jsx">
                      Acheivements
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./Components/projects.jsx">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://jefferyhu2005.wixsite.com/portfolio/oop-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Java Tutorials
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="Contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App = () => {
  return(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}