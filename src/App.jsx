import { Routes, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectCrca from './pages/projects/Crca';
import ProjectLucre from './pages/projects/Lucre';
import Publications from './pages/Publications';
import Research from './pages/Research';
import Docs from './pages/Docs';
import Contact from './pages/Contact';
// CR-CA pages
import CrcaOverview from './pages/crca/Overview';
import CrcaInstallation from './pages/crca/Installation';
import CrcaDocumentation from './pages/crca/Documentation';
import CrcaExamples from './pages/crca/Examples';
import CrcaUseCases from './pages/crca/UseCases';
import CrcaSD from './pages/crca/CRCA-SD';
import CrcaCG from './pages/crca/CRCA-CG';
import CrcaQ from './pages/crca/CRCA-Q';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout><Home /></BaseLayout>} />
      <Route path="/about" element={<BaseLayout><About /></BaseLayout>} />
      <Route path="/crca" element={<BaseLayout><CrcaOverview /></BaseLayout>} />
      <Route path="/crca/installation" element={<BaseLayout><CrcaInstallation /></BaseLayout>} />
      <Route path="/crca/documentation" element={<BaseLayout><CrcaDocumentation /></BaseLayout>} />
      <Route path="/crca/examples" element={<BaseLayout><CrcaExamples /></BaseLayout>} />
      <Route path="/crca/use-cases" element={<BaseLayout><CrcaUseCases /></BaseLayout>} />
      <Route path="/crca/crca-sd" element={<BaseLayout><CrcaSD /></BaseLayout>} />
      <Route path="/crca/crca-cg" element={<BaseLayout><CrcaCG /></BaseLayout>} />
      <Route path="/crca/crca-q" element={<BaseLayout><CrcaQ /></BaseLayout>} />
      <Route path="/projects" element={<BaseLayout><Projects /></BaseLayout>} />
      <Route path="/projects/crca" element={<BaseLayout><ProjectCrca /></BaseLayout>} />
      <Route path="/projects/lucre" element={<BaseLayout><ProjectLucre /></BaseLayout>} />
      <Route path="/publications" element={<BaseLayout><Publications /></BaseLayout>} />
      <Route path="/research" element={<BaseLayout><Research /></BaseLayout>} />
      <Route path="/docs" element={<BaseLayout><Docs /></BaseLayout>} />
      <Route path="/contact" element={<BaseLayout><Contact /></BaseLayout>} />
    </Routes>
  );
}

export default App;

