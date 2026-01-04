import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="mb-24">
        <h1 className="font-serif">Independent Research in Agentic and Causal AI Systems</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          Euroswarms Research is an independent research organization focused on
          agentic reasoning architectures, causal modeling, and constraint-driven
          AI systems for real-world decision processes.
        </p>
      </section>

      <div className="divider"></div>

      <section className="mb-24">
        <h2 className="font-serif">Active Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
          <Link to="/projects/crca" className="card p-8 block group">
            <div className="mb-4">
              <span className="status" style={{ color: '#f4c430' }}>Official</span>
            </div>
            <h3 className="font-serif text-2xl mb-3">CR-CA</h3>
            <p className="leading-relaxed">
              Causal Reasoning and Counterfactual Analysis architectures for
              deterministic, explainable agent systems.
            </p>
          </Link>
          <Link to="/projects/lucre" className="card p-8 block group">
            <div className="mb-4">
              <span className="status" style={{ color: '#f4c430' }}>Official</span>
            </div>
            <h3 className="font-serif text-2xl mb-3">Project LUCRE</h3>
            <p className="leading-relaxed">
              Multi-agent coordination and incentive-aware execution frameworks.
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;

