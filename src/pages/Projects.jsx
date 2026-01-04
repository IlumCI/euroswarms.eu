import { Link } from 'react-router-dom';

function Projects() {
  return (
    <>
      <section className="mb-24">
        <h1 className="font-serif">Research Projects</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          Research projects maintained and published by Euroswarms Research.
          Projects may be in active development or released as stable artifacts.
        </p>
      </section>

      <div className="divider"></div>

      <section className="mb-24">
        <h2 className="font-serif">CR-CA Family</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
          <Link to="/projects/crca" className="card p-8 block group">
            <div className="mb-4">
              <span className="status" style={{ color: '#f4c430' }}>Official</span>
            </div>
            <h3 className="font-serif text-2xl mb-3">CR-CA Core</h3>
            <p className="leading-relaxed mb-4">
              Causal inference and constraint systems for deterministic agent architectures.
            </p>
            <span className="text-blue-300 text-sm font-medium group-hover:text-white">View project →</span>
          </Link>

          <div className="card p-8">
            <div className="mb-4">
              <span className="status" style={{ color: '#9bb8d0' }}>In Development</span>
            </div>
            <h3 className="font-serif text-2xl mb-3">CR-CA-Q</h3>
            <p className="leading-relaxed">
              Quantitative counterfactual extensions for probabilistic reasoning systems.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="mb-24">
        <h2 className="font-serif">Project LUCRE</h2>
        <div className="card p-8 max-w-2xl mt-8">
          <div className="mb-4">
            <span className="status" style={{ color: '#f4c430' }}>Official</span>
          </div>
          <h3 className="font-serif text-2xl mb-3">LUCRE Core</h3>
          <p className="leading-relaxed mb-4">
            Multi-agent coordination and incentive-aware execution frameworks for distributed systems.
          </p>
          <Link to="/projects/lucre" className="text-blue-300 text-sm font-medium hover:text-white inline-block">
            View project →
          </Link>
        </div>
      </section>
    </>
  );
}

export default Projects;

