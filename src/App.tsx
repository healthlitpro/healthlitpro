import Home from './Pages/Home.tsx';
import About from './Pages/About.tsx';
import Projects from './Pages/Projects.tsx';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Contributors from './Pages/Contributors.tsx';
import Login from './Pages/Login.tsx';


function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes as needed */}
      </Routes>

    );
  }
  
  export default App;