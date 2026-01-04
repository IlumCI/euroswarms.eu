import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink';

function Crca() {
  return (
    <>
      <section>
        <div className="mb-6">
          <span className="badge-official">Flagship Project</span>
          <span className="ml-4 text-muted font-mono text-sm">v1.3.0</span>
        </div>
        <h1 className="font-serif">CR-CA — Causal Reasoning & Counterfactual Analysis</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          A comprehensive framework for causal reasoning and counterfactual analysis, combining
          structural causal models (SCMs) with large language model (LLM) integration.
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Overview</h2>
        <p className="leading-relaxed max-w-4xl mb-6">
          CR-CA is a reasoning architecture designed to model causal structure, constraints,
          and counterfactual outcomes in agentic systems. The framework provides a formal
          foundation for deterministic, explainable decision-making in complex environments.
        </p>
        <p className="leading-relaxed max-w-4xl">
          The framework combines structural causal models with modern AI capabilities to enable
          sophisticated causal inference, automatic variable extraction from natural language,
          deterministic causal simulation, and comprehensive counterfactual scenario generation.
        </p>
      </section>

      <section>
        <h2 className="font-serif">Core Concepts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Structural Causality</h3>
            <p className="leading-relaxed">
              Modeling for deterministic inference using structural causal models (SCMs)
              that represent causal relationships between variables.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Constraint Validation</h3>
            <p className="leading-relaxed">
              Systems for validating and verifying constraints, ensuring causal models
              respect domain-specific rules and boundaries.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Counterfactual Analysis</h3>
            <p className="leading-relaxed">
              Explainable counterfactual analysis for decision transparency, enabling
              users to understand alternative outcomes.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">LLM Integration</h3>
            <p className="leading-relaxed">
              Automatic extraction of variables and relationships from natural language,
              making causal modeling accessible to all users.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Documentation & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Link to="/crca" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3">Overview</h3>
            <p className="leading-relaxed mb-4">
              Framework introduction, key features, and core concepts.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View overview →
            </span>
          </Link>
          <Link to="/crca/installation" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3">Installation</h3>
            <p className="leading-relaxed mb-4">
              Installation guide, requirements, and configuration.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View installation →
            </span>
          </Link>
          <Link to="/crca/documentation" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3">Documentation</h3>
            <p className="leading-relaxed mb-4">
              API reference, architecture, and integration guides.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View documentation →
            </span>
          </Link>
          <Link to="/crca/examples" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3">Examples</h3>
            <p className="leading-relaxed mb-4">
              Code examples, tutorials, and demonstrations.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View examples →
            </span>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="font-serif">GitHub Repository</h2>
        <p className="leading-relaxed max-w-4xl mb-6">
          CR-CA is open-source and actively maintained. Visit the GitHub repository for
          the latest code, documentation, examples, and to contribute to the project.
        </p>
        <div className="flex flex-wrap gap-4">
          <GitHubLink />
          <a 
            href="https://github.com/IlumCI/CR-CA/issues" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Report Issue
          </a>
          <a 
            href="https://github.com/IlumCI/CR-CA/blob/main/CONTRIBUTING.md" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Contribute
          </a>
        </div>
      </section>
    </>
  );
}

export default Crca;
