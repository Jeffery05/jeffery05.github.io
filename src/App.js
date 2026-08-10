import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Components/home';
import About from './Components/about';
import Achievements from './Components/achievements';
import Projects from './Components/projects';

function ScrollNavbar() {
  useEffect(() => {
    const header = document.querySelector('header');
    const handler = () => header.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollNavbar />
      <header>
        <nav>
          <NavLink id="logo" to="/">
            <svg
              version="1.1"
              height="2.4rem"
              viewBox="0 0 700 700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fillRule="evenodd" preserveAspectRatio="xMidYMid meet">
                <path d="m372.21 560c73.922-449.22-197.19-316.51-296.23-560 0 102.74-3.8398 186.6 110.01 229.3-37.809 4.7266-65.348-4.9375-89.469-38.438 20.785 85.676 99.609 107.8 158.39 119.29-61.789 10.68-93.113-25.359-116.31-38.438 87.141 155.5 204.79 56.672 228.31 225.99-7.5117-9.2773-15.02-18.555-22.531-27.832 25.578 42.879 22.801 40.422 27.832 90.125z" />
                <path d="m367.57 268.41c36.664 50 28.277 139.96 29.16 198.15 27.113-107.05 66.367-182.34 149.77-204.78-30.707-3.9766-49.484 5.3008-66.273 16.566 13.707-27.355 38.926-41.355 94.688-50.562-35.012-5.7422-35.812-2.3438-50.617-0.79688 11.91-28.281 71.867-34.543 99.738-38.766-132.77-6.9883-155.77 51.086-201.42 94.598-24.738 15.816-11.496-70.352 14.367-36.945-4.4062-70.414-73.348-48.211-69.418 22.531z" />
                <path d="m344.21 93.98c4.7617 66.117 66.441 69.734 56.473 105.89-44.246-6.6797-71.398-57.398-56.473-105.89z" />
              </g>
            </svg>
          </NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="achievements">Experience</NavLink>
          <NavLink to="projects">Work</NavLink>
        </nav>
      </header>
      <main>
        <AnimatedRoutes />
      </main>
      <footer className="site-footer">
        <a href="https://www.linkedin.com/in/jeffery-hu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:jefferyhu8@gmail.com">Email</a>
        <a href="https://github.com/Jeffery05" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span>© 2026 Jeffery Hu</span>
      </footer>
    </BrowserRouter>
  );
}

export default App;
