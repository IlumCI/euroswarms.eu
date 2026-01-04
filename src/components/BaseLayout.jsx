import { useEffect } from 'react';
import Navigation from './Navigation';

function BaseLayout({ children, title = 'Euroswarms Research', description = 'Euroswarms Research - Independent Research in Agentic and Causal AI Systems' }) {
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
      <main className="max-w-content mx-auto px-6 md:px-8 py-12 md:py-20" id="main-content">
        {children}
      </main>
      <footer className="border-t mt-24" style={{ borderColor: '#9bb8d0', backgroundColor: '#d4e3f0' }}>
        <div className="max-w-content mx-auto px-6 md:px-8 py-8">
          <p className="text-sm text-muted text-center">
            © 2026 Euroswarms Research. Independent research in agentic and causal AI systems.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default BaseLayout;

