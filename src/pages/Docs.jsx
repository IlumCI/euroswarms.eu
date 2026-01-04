import { Link } from 'react-router-dom';
import GitHubLink from '../components/GitHubLink';

function Docs() {
  return (
    <>
      <section>
        <h1 className="font-serif">Documentation</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          Technical documentation, specifications, and implementation guides for
          Euroswarms R&D Division projects.
        </p>
      </section>

      <div className="divider"></div>

      {/* CR-CA Documentation */}
      <section>
        <div className="mb-6">
          <span className="badge-official">Flagship Framework</span>
        </div>
        <h2 className="font-serif">CR-CA Framework Documentation</h2>
        <p className="text-lg leading-relaxed max-w-4xl mb-8">
          Comprehensive documentation for the CR-CA framework, including installation guides,
          API reference, examples, and use cases.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Link to="/crca/documentation" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3">API Reference</h3>
            <p className="leading-relaxed mb-4">
              Complete API documentation, architecture overview, core concepts, and integration guides.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View API Reference →
            </span>
          </Link>

          <Link to="/crca/installation" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3">Installation Guide</h3>
            <p className="leading-relaxed mb-4">
              Step-by-step installation instructions, requirements, configuration, and setup guides.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View Installation Guide →
            </span>
          </Link>

          <Link to="/crca/examples" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3">Examples & Tutorials</h3>
            <p className="leading-relaxed mb-4">
              Code examples, tutorials, and demonstrations covering basic usage and advanced features.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View Examples →
            </span>
          </Link>

          <Link to="/crca/use-cases" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3">Use Cases</h3>
            <p className="leading-relaxed mb-4">
              Real-world applications, research use cases, and industry examples.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View Use Cases →
            </span>
          </Link>
        </div>
      </section>

      <div className="divider"></div>

      {/* Other Project Documentation */}
      <section>
        <h2 className="font-serif">Other Project Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="card-light p-8">
            <h3 className="font-serif text-2xl mb-3">Project LUCRE Documentation</h3>
            <p className="leading-relaxed mb-4">
              Coordination protocols, execution models, and integration guides for multi-agent systems.
            </p>
            <Link to="/projects/lucre" className="text-accent hover:text-accent-light font-medium">
              View project →
            </Link>
          </div>

          <div className="card-light p-8">
            <h3 className="font-serif text-2xl mb-3">CR-CA-Q Documentation</h3>
            <p className="leading-relaxed mb-4">
              Quantitative extensions and probabilistic reasoning documentation (in development).
            </p>
            <span className="text-muted text-sm">Coming soon</span>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">GitHub Repository</h2>
        <p className="leading-relaxed max-w-4xl mb-6">
          For the most up-to-date documentation, including detailed README files, code examples,
          and technical specifications, visit the CR-CA GitHub repository.
        </p>
        <div className="flex flex-wrap gap-4">
          <GitHubLink />
          <a 
            href="https://github.com/IlumCI/CR-CA/blob/main/README.md" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View README
          </a>
        </div>
      </section>
    </>
  );
}

export default Docs;
