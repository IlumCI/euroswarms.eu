import { Link } from 'react-router-dom';
import GitHubLink from '../components/GitHubLink';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero -mx-6 md:-mx-8 px-6 md:px-8">
        <div className="max-w-4xl">
          <h1 className="font-serif mb-6">Euroswarms R&D Division</h1>
          <p className="text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl">
            Independent research in agentic reasoning architectures, causal modeling, and
            constraint-driven AI systems for real-world decision processes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
            <Link to="/crca" className="btn-primary">
              Explore CR-CA
            </Link>
          </div>
        </div>
      </section>

      {/* Organization Overview */}
      <section>
        <h2 className="font-serif">Research Excellence in Causal AI</h2>
        <p className="text-lg leading-relaxed max-w-4xl mb-8">
          Euroswarms R&D Division is dedicated to advancing the frontiers of explainable AI through
          rigorous causal reasoning frameworks. We develop systems that combine structural causal
          modeling with modern AI capabilities to enable transparent, deterministic decision-making.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Rigorous Methodology</h3>
            <p className="leading-relaxed">
              Formally grounded frameworks based on structural causal models and theoretical foundations.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Explainable Systems</h3>
            <p className="leading-relaxed">
              Transparent AI that provides clear explanations through counterfactual analysis.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Open Research</h3>
            <p className="leading-relaxed">
              Publicly available frameworks, code, and research to advance the field collectively.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Flagship Project: CR-CA */}
      <section>
        <div className="mb-6">
          <span className="badge-official">Flagship Project</span>
          <span className="ml-4 text-muted font-mono text-sm">v1.4.0</span>
        </div>
        <h2 className="font-serif">CR-CA Framework</h2>
        <p className="text-lg leading-relaxed max-w-4xl mb-8">
          CR-CA (Causal Reasoning and Counterfactual Analysis) v1.4.0 is our flagship framework for
          building deterministic, explainable agent systems. It combines structural causal models
          with large language model integration to enable sophisticated causal inference, automatic
          variable extraction from natural language, deterministic causal simulation, and comprehensive
          counterfactual scenario generation. Designed for both research and practical applications,
          CR-CA provides a modular architecture supporting specialized agents for quantitative trading,
          socioeconomic dynamics, and corporate governance.
        </p>
        
        <div className="card p-8 md:p-12 max-w-5xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li>Automatic variable extraction from natural language (v1.3.0+)</li>
                <li>Dual-mode operation (LLM mode vs deterministic mode)</li>
                <li>Structural causal model (SCM) construction</li>
                <li>Deterministic causal simulation</li>
                <li>Counterfactual scenario generation</li>
                <li>Advanced analysis suite (batch prediction, optimization, time-series)</li>
                <li>Bayesian inference with credible intervals</li>
                <li>Async/await support for concurrent analysis</li>
                <li>Policy Engine System for autonomous system control</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4">Specialized Branches</h3>
              <ul className="space-y-3 mb-4">
                <li><Link to="/crca/crca-sd" className="text-yellow-300 hover:text-white">CRCA-SD:</Link> Socioeconomic dynamics with MPC solver</li>
                <li><Link to="/crca/crca-cg" className="text-yellow-300 hover:text-white">CRCA-CG:</Link> Corporate governance with CorporateSwarm</li>
                <li><Link to="/crca/crca-q" className="text-yellow-300 hover:text-white">CRCA-Q:</Link> Quantitative trading with causal signals</li>
              </ul>
              <h3 className="font-serif text-xl mb-3 mt-6">Applications</h3>
              <ul className="space-y-2 text-sm">
                <li>Causal discovery from data</li>
                <li>Policy analysis and evaluation</li>
                <li>Root cause analysis</li>
                <li>Scenario planning</li>
                <li>Decision support systems</li>
                <li>Research and academic applications</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <div className="flex flex-wrap gap-4">
              <GitHubLink variant="secondary" />
              <Link to="/crca" className="btn-secondary">
                View Documentation
              </Link>
              <Link to="/crca/installation" className="text-yellow-300 hover:text-white font-medium">
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Specialized Branches */}
      <section>
        <h2 className="font-serif">CR-CA Specialized Branches</h2>
        <p className="text-lg leading-relaxed max-w-4xl mb-8">
          CR-CA includes specialized branches for domain-specific applications, extending the core
          framework with targeted capabilities for quantitative trading, socioeconomic dynamics, and
          corporate governance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Link to="/crca/crca-sd" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3 text-white">CRCA-SD</h3>
            <p className="leading-relaxed mb-4 text-blue-200">
              Socioeconomic dynamics with MPC solver, governance systems, and real-time monitoring
              for complex policy analysis and economic modeling.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              Learn more →
            </span>
          </Link>
          <Link to="/crca/crca-cg" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3 text-white">CRCA-CG</h3>
            <p className="leading-relaxed mb-4 text-blue-200">
              Corporate governance with CorporateSwarm, ESG scoring, and multi-agent orchestration
              for organizational decision-making.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              Learn more →
            </span>
          </Link>
          <Link to="/crca/crca-q" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3 text-white">CRCA-Q</h3>
            <p className="leading-relaxed mb-4 text-blue-200">
              Quantitative trading with QuantTradingAgent, causal signals, and portfolio optimization
              for financial market analysis.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              Learn more →
            </span>
          </Link>
        </div>
      </section>

      <div className="divider"></div>

      {/* Other Research Areas */}
      <section>
        <h2 className="font-serif">Active Research Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
          <Link to="/projects/lucre" className="card-light p-8 block group">
            <div className="mb-4">
              <span className="status" style={{ color: '#003399' }}>Active</span>
            </div>
            <h3 className="font-serif text-2xl mb-3">Project LUCRE</h3>
            <p className="leading-relaxed mb-4">
              Multi-agent coordination and incentive-aware execution frameworks for distributed systems.
            </p>
            <span className="text-accent text-sm font-medium group-hover:text-accent-light">
              View project →
            </span>
          </Link>
        </div>
      </section>

      <div className="divider"></div>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="font-serif mb-6">Get Started with CR-CA</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
          Explore our comprehensive documentation, installation guides, examples, and use cases
          to begin using CR-CA in your research or applications.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/crca/installation" className="btn-primary">
            Installation Guide
          </Link>
          <Link to="/crca/examples" className="btn-secondary">
            View Examples
          </Link>
          <Link to="/crca/documentation" className="btn-secondary">
            Documentation
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
