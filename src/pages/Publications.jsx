function Publications() {
  return (
    <>
      <section className="mb-24">
        <h1 className="font-serif">Publications</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          Peer-reviewed publications, preprints, and technical reports from Euroswarms Research.
        </p>
      </section>

      <div className="divider"></div>

      <section className="mb-16">
        <div className="card p-8 max-w-3xl">
          <h3 className="font-serif text-2xl mb-3">Causal Reasoning Architectures for Deterministic Agent Systems</h3>
          <p className="meta mb-4">Arron Leilion — 2026</p>
          <p className="leading-relaxed mb-4">
            A formal framework for structural causality modeling in agentic systems with
            applications to explainable AI and constraint-driven decision processes.
          </p>
          <a href="#" className="text-blue-300 hover:text-white font-medium">arXiv:2026.xxxxx →</a>
        </div>
      </section>
    </>
  );
}

export default Publications;

