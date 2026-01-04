import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink';

function CrcaOverview() {
  return (
    <>
      <section>
        <div className="mb-6">
          <span className="badge-official">Flagship Framework</span>
          <span className="ml-4 text-muted font-mono text-sm">v1.3.0</span>
        </div>
        <h1 className="font-serif">CR-CA: Causal Reasoning and Counterfactual Analysis</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          A comprehensive framework for causal reasoning and counterfactual analysis, combining
          structural causal models (SCMs) with large language model (LLM) integration. CR-CA enables
          sophisticated causal inference, automatic variable extraction from natural language,
          deterministic causal simulation, and comprehensive counterfactual scenario generation.
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Overview</h2>
        <p className="leading-relaxed max-w-4xl mb-6">
          CR-CA is designed for researchers and practitioners who need to build deterministic,
          explainable agent systems with causal reasoning capabilities. The framework provides
          a formal foundation for modeling causal structure, constraints, and counterfactual
          outcomes in complex environments.
        </p>
        <p className="leading-relaxed max-w-4xl">
          The framework combines theoretical rigor with practical usability, making advanced
          causal inference accessible through intuitive APIs and automatic extraction capabilities.
        </p>
      </section>

      <section>
        <h2 className="font-serif">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Automatic Variable Extraction</h3>
            <p className="leading-relaxed">
              Extract variables and causal relationships directly from natural language task
              descriptions using advanced LLM integration.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Structural Causal Models</h3>
            <p className="leading-relaxed">
              Build and manage structural causal models (SCMs) with support for deterministic
              inference and constraint validation.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Counterfactual Analysis</h3>
            <p className="leading-relaxed">
              Generate comprehensive counterfactual scenarios to explore alternative outcomes
              and understand causal relationships.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Advanced Analysis Suite</h3>
            <p className="leading-relaxed">
              Batch prediction, optimization methods, time-series analysis, Bayesian inference,
              and information-theoretic measures.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">LLM Integration</h3>
            <p className="leading-relaxed">
              Seamless integration with large language models for natural language processing
              and automatic extraction capabilities.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Extensible Architecture</h3>
            <p className="leading-relaxed">
              Template system for creating specialized agents and custom analysis methods
              tailored to specific domains.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Core Concepts</h2>
        <div className="space-y-6 mt-6">
          <div>
            <h3 className="font-serif text-xl mb-3">Structural Causality Modeling</h3>
            <p className="leading-relaxed max-w-4xl">
              CR-CA uses structural causal models (SCMs) to represent causal relationships
              between variables. These models enable deterministic inference and provide
              a formal foundation for understanding cause and effect.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-3">Constraint Validation</h3>
            <p className="leading-relaxed max-w-4xl">
              The framework includes systems for validating and verifying constraints,
              ensuring that causal models respect domain-specific rules and boundaries.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-3">Explainable Counterfactual Analysis</h3>
            <p className="leading-relaxed max-w-4xl">
              Generate counterfactual scenarios that explain what would have happened under
              different conditions, providing transparency in decision-making processes.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Quick Start</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Link to="/crca/installation" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3">Installation</h3>
            <p className="leading-relaxed mb-4">
              Get started with CR-CA by following our installation guide. Includes requirements,
              setup instructions, and configuration options.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View installation guide →
            </span>
          </Link>
          <Link to="/crca/examples" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3">Examples</h3>
            <p className="leading-relaxed mb-4">
              Explore code examples, tutorials, and demonstrations to learn how to use
              CR-CA in your projects.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View examples →
            </span>
          </Link>
          <Link to="/crca/documentation" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3">Documentation</h3>
            <p className="leading-relaxed mb-4">
              Comprehensive API reference, architecture overview, and integration guides
              for all CR-CA features.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View documentation →
            </span>
          </Link>
          <Link to="/crca/use-cases" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3">Use Cases</h3>
            <p className="leading-relaxed mb-4">
              Learn about research applications, industry use cases, and real-world
              scenarios where CR-CA can be applied.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View use cases →
            </span>
          </Link>
        </div>
      </section>

      <section className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif mb-6">Get Started with CR-CA</h2>
          <p className="text-lg leading-relaxed mb-8">
            Join researchers and practitioners using CR-CA for causal reasoning and
            counterfactual analysis. The framework is open-source and actively maintained.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <GitHubLink />
            <Link to="/crca/installation" className="btn-primary">
              Installation Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CrcaOverview;

