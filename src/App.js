import './App.scss';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Character from './pages/Character';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Rick n Morty Playground</Link>
      <Link to="/about">About</Link>
    </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About/>} />        
        <Route path="*" element={<NotFound />}/>
        <Route path="character/:id" element={<Character/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
