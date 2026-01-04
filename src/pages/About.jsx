function About() {
  return (
    <>
      <section>
        <h1 className="font-serif">About Euroswarms R&D Division</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          Euroswarms R&D Division is an independent research organization dedicated to advancing
          the frontiers of agentic reasoning architectures, causal modeling, and constraint-driven
          AI systems for real-world decision processes.
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Mission</h2>
        <p className="leading-relaxed max-w-4xl mb-6">
          Our mission is to develop rigorous, explainable, and deterministic AI systems that enable
          transparent decision-making in complex environments. We focus on creating frameworks that
          combine structural causal modeling with modern AI capabilities to produce systems that
          are both powerful and interpretable.
        </p>
      </section>

      <section>
        <h2 className="font-serif">Vision</h2>
        <p className="leading-relaxed max-w-4xl mb-6">
          We envision a future where AI systems can reason causally about their environment,
          explain their decisions through counterfactual analysis, and operate within well-defined
          constraints. Our research aims to bridge the gap between theoretical causal inference
          and practical AI applications.
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Research Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Rigorous Methodology</h3>
            <p className="leading-relaxed">
              We employ formal methods and structural causal models to ensure our frameworks
              are mathematically sound and theoretically grounded.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Explainability First</h3>
            <p className="leading-relaxed">
              Every system we develop prioritizes transparency and interpretability, enabling
              users to understand not just what decisions are made, but why.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Open Research</h3>
            <p className="leading-relaxed">
              We believe in open science and make our research, code, and frameworks publicly
              available to advance the field collectively.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Practical Impact</h3>
            <p className="leading-relaxed">
              Our research is driven by real-world applications, ensuring that theoretical
              advances translate into practical tools and systems.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Key Research Areas</h2>
        <ul className="space-y-4 mt-6">
          <li className="text-lg">
            <strong className="text-fg">Causal Reasoning Architectures:</strong> Structural causal
            models, counterfactual analysis, and deterministic inference systems.
          </li>
          <li className="text-lg">
            <strong className="text-fg">Agentic Systems:</strong> Multi-agent coordination,
            constraint-driven execution, and incentive-aware frameworks.
          </li>
          <li className="text-lg">
            <strong className="text-fg">Explainable AI:</strong> Interpretable decision-making,
            transparent reasoning processes, and human-understandable explanations.
          </li>
          <li className="text-lg">
            <strong className="text-fg">Constraint-Driven AI:</strong> Systems that operate within
            well-defined boundaries and respect domain-specific constraints.
          </li>
        </ul>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Impact & Contributions</h2>
        <p className="leading-relaxed max-w-4xl mb-6">
          Euroswarms R&D Division contributes to the advancement of causal AI through open-source
          frameworks, peer-reviewed publications, and collaborative research. Our flagship project,
          CR-CA, provides researchers and practitioners with tools for causal reasoning and
          counterfactual analysis.
        </p>
        <p className="leading-relaxed max-w-4xl">
          We actively engage with the research community through publications, open-source
          contributions, and knowledge sharing. Our work aims to make advanced causal reasoning
          accessible to researchers and practitioners across various domains.
        </p>
      </section>
    </>
  );
}

export default About;

