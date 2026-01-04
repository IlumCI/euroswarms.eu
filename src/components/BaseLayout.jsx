import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Breadcrumbs from './Breadcrumbs';

function BaseLayout({ children, title = 'Euroswarms R&D Division', description = 'Euroswarms R&D Division - Independent Research in Agentic and Causal AI Systems' }) {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return (
    <div className="min-h-screen bg-bg">
      <Navigation />
      <main className="max-w-content mx-auto px-6 md:px-8 py-8 md:py-12" id="main-content">
        <Breadcrumbs />
        {children}
      </main>
      <footer className="border-t mt-24 section-bg" style={{ borderColor: '#b8d4e8' }}>
        <div className="max-w-content mx-auto px-6 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About Column */}
            <div>
              <h3 className="font-serif text-lg mb-4 text-fg">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted hover:text-accent transition-colors">
                    Organization
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-muted hover:text-accent transition-colors">
                    Mission & Vision
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-muted hover:text-accent transition-colors">
                    Research Philosophy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Research Projects Column */}
            <div>
              <h3 className="font-serif text-lg mb-4 text-fg">Research Projects</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/crca" className="text-sm text-muted hover:text-accent transition-colors font-semibold">
                    CR-CA Framework
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-sm text-muted hover:text-accent transition-colors">
                    All Projects
                  </Link>
                </li>
                <li>
                  <Link to="/projects/lucre" className="text-sm text-muted hover:text-accent transition-colors">
                    Project LUCRE
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-serif text-lg mb-4 text-fg">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/docs" className="text-sm text-muted hover:text-accent transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/publications" className="text-sm text-muted hover:text-accent transition-colors">
                    Publications
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://github.com/IlumCI/CR-CA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    GitHub Repository
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-serif text-lg mb-4 text-fg">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/contact" className="text-sm text-muted hover:text-accent transition-colors">
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://github.com/IlumCI/CR-CA/issues" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    Report Issue
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/IlumCI/CR-CA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    Contribute
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8" style={{ borderColor: '#b8d4e8' }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted text-center md:text-left">
                © 2026 Euroswarms R&D Division. Independent research in agentic and causal AI systems.
              </p>
              <div className="flex gap-6 text-sm text-muted">
                <a href="https://github.com/IlumCI/CR-CA/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  License
                </a>
                <span>•</span>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BaseLayout;

