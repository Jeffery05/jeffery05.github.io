import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/about";

function App(){
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Jeffery Hu</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
        </Routes>
      </main>
    </BrowserRouter>
    
  )
}

export default App