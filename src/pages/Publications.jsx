import { Link } from 'react-router-dom';
import GitHubLink from '../components/GitHubLink';

function Publications() {
  return (
    <>
      <section>
        <h1 className="font-serif">Publications</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          Peer-reviewed publications, preprints, and technical reports from Euroswarms R&D Division.
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">CR-CA Framework</h2>
        <div className="space-y-6 mt-8">
          <div className="card p-8 max-w-4xl">
            <div className="mb-4">
              <span className="badge-official">Official Publication</span>
            </div>
            <h3 className="font-serif text-2xl mb-3">Causal Reasoning and Counterfactual Analysis: A Framework for Deterministic Agent Systems</h3>
            <p className="meta mb-4">Euroswarms R&D Division — 2026</p>
            <p className="leading-relaxed mb-4">
              A comprehensive framework for causal reasoning and counterfactual analysis, combining
              structural causal models (SCMs) with large language model integration. This paper
              presents the theoretical foundations, architecture, and applications of the CR-CA framework.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://arxiv.org/abs/2026.xxxxx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-white font-medium"
              >
                arXiv:2026.xxxxx →
              </a>
              <GitHubLink variant="secondary" label="View Repository" />
            </div>
          </div>

          <div className="card-light p-8 max-w-4xl">
            <h3 className="font-serif text-2xl mb-3">CR-CA: Technical Documentation</h3>
            <p className="meta mb-4">Version 1.3.0 — 2026</p>
            <p className="leading-relaxed mb-4">
              Complete technical documentation including API reference, architecture overview,
              and implementation details.
            </p>
            <Link to="/crca/documentation" className="text-accent hover:text-accent-light font-medium">
              View Documentation →
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Related Research</h2>
        <div className="card-light p-8 max-w-4xl mt-8">
          <h3 className="font-serif text-2xl mb-3">Causal Reasoning Architectures for Deterministic Agent Systems</h3>
          <p className="meta mb-4">Arron Leilion — 2026</p>
          <p className="leading-relaxed mb-4">
            A formal framework for structural causality modeling in agentic systems with
            applications to explainable AI and constraint-driven decision processes.
          </p>
          <a 
            href="https://arxiv.org/abs/2026.xxxxx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-light font-medium"
          >
            arXiv:2026.xxxxx →
          </a>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Open Source Contributions</h2>
        <p className="leading-relaxed max-w-4xl mb-6">
          All research code, frameworks, and documentation are publicly available on GitHub.
          We believe in open science and making our research accessible to the community.
        </p>
        <div className="flex flex-wrap gap-4">
          <GitHubLink />
          <a 
            href="https://github.com/IlumCI/CR-CA/releases" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View Releases
          </a>
        </div>
      </section>
    </>
  );
}

export default Publications;
