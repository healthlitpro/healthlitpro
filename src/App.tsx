import Home from './Pages/Home.tsx';
import About from './Pages/About.tsx';
import Projects from './Pages/Projects.tsx';
import { Routes, Route } from 'react-router-dom';


function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    );
  }
  
  export default App;