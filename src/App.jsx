import { Routes, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectCrca from './pages/projects/Crca';
import ProjectLucre from './pages/projects/Lucre';
import Publications from './pages/Publications';
import Docs from './pages/Docs';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout><Home /></BaseLayout>} />
      <Route path="/projects" element={<BaseLayout><Projects /></BaseLayout>} />
      <Route path="/projects/crca" element={<BaseLayout><ProjectCrca /></BaseLayout>} />
      <Route path="/projects/lucre" element={<BaseLayout><ProjectLucre /></BaseLayout>} />
      <Route path="/publications" element={<BaseLayout><Publications /></BaseLayout>} />
      <Route path="/docs" element={<BaseLayout><Docs /></BaseLayout>} />
      <Route path="/contact" element={<BaseLayout><Contact /></BaseLayout>} />
    </Routes>
  );
}

export default App;

