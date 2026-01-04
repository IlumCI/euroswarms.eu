function Lucre() {
  return (
    <>
      <section className="mb-16">
        <div className="mb-6">
          <span className="status" style={{ color: '#f4c430' }}>Official Project</span>
        </div>
        <h1 className="font-serif">Project LUCRE</h1>
      </section>

      <div className="divider"></div>

      <section className="mb-16">
        <h2 className="font-serif">Overview</h2>
        <p className="text-lg leading-relaxed">
          Project LUCRE focuses on multi-agent coordination and incentive-aware
          execution frameworks for distributed agentic systems. The project addresses
          fundamental challenges in scalable agent coordination and resource allocation.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-serif">Core Concepts</h2>
        <p className="leading-relaxed mb-4">
          The project explores three key research directions:
        </p>
        <ul className="space-y-3">
          <li>Agent coordination protocols for distributed execution</li>
          <li>Incentive alignment mechanisms for multi-agent systems</li>
          <li>Scalable execution frameworks for large-scale deployments</li>
        </ul>
      </section>

      <div className="divider"></div>

      <section className="mb-16">
        <h2 className="font-serif">Artifacts</h2>
        <ul className="space-y-3">
          <li><a href="#" className="text-yellow-300 hover:text-white">Technical Documentation</a></li>
          <li><a href="#" className="text-yellow-300 hover:text-white">arXiv Preprint</a></li>
          <li><a href="#" className="text-yellow-300 hover:text-white">Source Repository</a></li>
        </ul>
      </section>
    </>
  );
}

export default Lucre;

