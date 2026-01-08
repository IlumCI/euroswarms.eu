import { Link } from 'react-router-dom';
import GitHubLink from '../components/GitHubLink';

function Projects() {
  return (
    <>
      <section>
        <h1 className="font-serif">Research Projects</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          Research projects maintained and published by Euroswarms R&D Division.
          Projects may be in active development or released as stable artifacts.
        </p>
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
          variable extraction, deterministic causal simulation, and comprehensive counterfactual
          scenario generation. The framework includes specialized branches for quantitative trading,
          socioeconomic dynamics, and corporate governance.
        </p>
        
        <div className="card p-8 md:p-12 max-w-5xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li>• Automatic variable extraction (v1.3.0+)</li>
                <li>• Dual-mode operation (LLM vs deterministic)</li>
                <li>• Structural causal models</li>
                <li>• Counterfactual analysis</li>
                <li>• Advanced analysis suite</li>
                <li>• Policy Engine System</li>
                <li>• Specialized branches (CRCA-SD, CRCA-CG, CRCA-Q)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link to="/crca" className="block text-yellow-300 hover:text-white transition-colors">
                  Overview →
                </Link>
                <Link to="/crca/installation" className="block text-yellow-300 hover:text-white transition-colors">
                  Installation →
                </Link>
                <Link to="/crca/documentation" className="block text-yellow-300 hover:text-white transition-colors">
                  Documentation →
                </Link>
                <Link to="/crca/examples" className="block text-yellow-300 hover:text-white transition-colors">
                  Examples →
                </Link>
                <Link to="/crca/use-cases" className="block text-yellow-300 hover:text-white transition-colors">
                  Use Cases →
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <div className="flex flex-wrap gap-4">
              <GitHubLink variant="secondary" />
              <Link to="/crca" className="btn-secondary">
                Explore CR-CA
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CR-CA Specialized Branches */}
      <section>
        <h2 className="font-serif">CR-CA Specialized Branches</h2>
        <p className="text-lg leading-relaxed max-w-4xl mb-8">
          CR-CA includes specialized branches for domain-specific applications, extending the core
          framework with targeted capabilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Link to="/crca/crca-sd" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3 text-white">CRCA-SD</h3>
            <p className="leading-relaxed mb-4 text-blue-200">
              Socioeconomic dynamics with MPC solver, governance systems, and real-time monitoring.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              Learn more →
            </span>
          </Link>
          <Link to="/crca/crca-cg" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3 text-white">CRCA-CG</h3>
            <p className="leading-relaxed mb-4 text-blue-200">
              Corporate governance with CorporateSwarm, ESG scoring, and multi-agent orchestration.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              Learn more →
            </span>
          </Link>
          <Link to="/crca/crca-q" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3 text-white">CRCA-Q</h3>
            <p className="leading-relaxed mb-4 text-blue-200">
              Quantitative trading with QuantTradingAgent, causal signals, and portfolio optimization.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              Learn more →
            </span>
          </Link>
        </div>
      </section>

      <div className="divider"></div>

      {/* Other Projects */}
      <section>
        <h2 className="font-serif">Other Research Projects</h2>
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
    </>
  );
}

export default Projects;
