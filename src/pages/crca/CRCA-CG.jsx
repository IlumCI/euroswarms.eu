import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink';
import CodeBlock from '../../components/CodeBlock';

function CrcaCG() {
  return (
    <>
      <section>
        <div className="mb-6">
          <span className="badge-official">Specialized Branch</span>
          <span className="ml-4 text-muted font-mono text-sm">v1.4.0</span>
        </div>
        <h1 className="font-serif">CRCA-CG: Corporate Governance</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          CRCA-CG extends CR-CA with specialized capabilities for corporate governance, featuring
          CorporateSwarm for multi-agent orchestration, ESG scoring, and transparent decision-making
          processes for organizational governance.
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Overview</h2>
        <p className="leading-relaxed max-w-4xl mb-6">
          CRCA-CG provides a comprehensive framework for corporate governance using multi-agent systems
          and causal reasoning. The module enables organizations to make transparent, explainable decisions
          through structured governance processes, proposal evaluation, and ESG (Environmental, Social, Governance)
          scoring.
        </p>
        <div className="card-light p-8 max-w-4xl mt-6">
          <h3 className="font-serif text-xl mb-4">Key Components</h3>
          <ul className="space-y-2">
            <li><strong>CorporateSwarm:</strong> Multi-agent orchestration system for corporate decision-making</li>
            <li><strong>ESG Scoring:</strong> Environmental, Social, and Governance metrics and evaluation</li>
            <li><strong>Proposal System:</strong> Structured proposal creation, evaluation, and voting</li>
            <li><strong>Board Management:</strong> Board of directors simulation and decision-making</li>
            <li><strong>TUI (Terminal UI):</strong> Interactive terminal interface for CorporateSwarm</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">CorporateSwarm</h3>
            <p className="leading-relaxed">
              Multi-agent orchestration system that simulates corporate decision-making processes
              with multiple stakeholders, committees, and voting mechanisms.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">ESG Scoring</h3>
            <p className="leading-relaxed">
              Comprehensive ESG (Environmental, Social, Governance) scoring system for evaluating
              corporate proposals and decisions against sustainability criteria.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Causal Policy Analysis</h3>
            <p className="leading-relaxed">
              Integrates CRCAAgent for causal analysis of policy impacts, enabling organizations
              to understand the causal effects of corporate decisions.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Multi-Agent Coordination</h3>
            <p className="leading-relaxed">
              Coordinates multiple agents representing different corporate roles (board members,
              executives, committees) in complex decision-making scenarios.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Proposal Evaluation</h3>
            <p className="leading-relaxed">
              Structured proposal system for creating, evaluating, and voting on corporate initiatives
              with transparent reasoning and causal impact analysis.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Interactive TUI</h3>
            <p className="leading-relaxed">
              Terminal user interface (TUI) for interactive CorporateSwarm management, enabling
              real-time monitoring and control of corporate governance processes.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Integration with CR-CA</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <p className="leading-relaxed mb-4">
            CRCA-CG integrates CRCAAgent for causal policy analysis:
          </p>
          <CodeBlock code={`from crca_cg.corposwarm import CorporateSwarm
from CRCA import CRCAAgent

# Initialize CRCA agent for causal policy analysis
crca = CRCAAgent(
    variables=['revenue', 'costs', 'employee_satisfaction'],
    model_name="gpt-4o"
)

swarm = CorporateSwarm(crca_agent=crca)

# Analyze policy impact using causal reasoning
result = swarm.analyze_policy_impact(
    policy_description="Increase R&D spending by 20%",
    use_causal_analysis=True
)`} language="python" />
        </div>
        <div className="card-light p-8 max-w-4xl mt-6">
          <p className="leading-relaxed mb-4">
            CRCA-CG can also integrate with CRCA-SD for enhanced governance:
          </p>
          <CodeBlock code={`swarm = CorporateSwarm(
    enable_crca_sd=True,
    crca_sd_config={
        'governance_model': 'democratic',
        'voting_threshold': 0.6
    }
)

# Enhanced voting with CRCA-SD governance system
vote_result = swarm.board.vote_on_proposal(
    proposal="Approve new product launch",
    use_enhanced_voting=True
)`} language="python" />
        </div>
      </section>

      <section>
        <h2 className="font-serif">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Corporate Decision-Making</h3>
            <p className="leading-relaxed mb-4">
              Simulate and optimize corporate decision-making processes with multiple stakeholders,
              using causal reasoning to understand decision impacts.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• Strategic planning</li>
              <li>• Resource allocation</li>
              <li>• Policy evaluation</li>
            </ul>
          </div>
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">ESG Compliance</h3>
            <p className="leading-relaxed mb-4">
              Evaluate corporate proposals and decisions against ESG criteria, ensuring
              sustainability and responsible governance.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• ESG scoring and evaluation</li>
              <li>• Sustainability impact analysis</li>
              <li>• Compliance monitoring</li>
            </ul>
          </div>
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Multi-Agent Coordination</h3>
            <p className="leading-relaxed mb-4">
              Coordinate multiple agents representing different corporate roles in complex
              decision-making scenarios with transparent processes.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• Board of directors simulation</li>
              <li>• Committee coordination</li>
              <li>• Stakeholder alignment</li>
            </ul>
          </div>
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Proposal Evaluation</h3>
            <p className="leading-relaxed mb-4">
              Structured evaluation of corporate proposals with causal impact analysis,
              enabling evidence-based decision-making.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• Proposal creation and submission</li>
              <li>• Causal impact analysis</li>
              <li>• Voting and approval processes</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Installation</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <p className="leading-relaxed mb-4">
            CRCA-CG dependencies are included in the main CR-CA installation. Install CR-CA:
          </p>
          <CodeBlock code="pip install crca" language="bash" className="mb-4" />
          <p className="leading-relaxed mb-4">
            For TUI (Terminal UI) support, install optional dependencies:
          </p>
          <CodeBlock code="pip install crca[tui]" language="bash" className="mb-4" />
          <p className="leading-relaxed text-sm opacity-75">
            This includes the 'rich' library for enhanced terminal interfaces.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Examples</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <p className="leading-relaxed mb-4">
            The CR-CA repository includes comprehensive CRCA-CG examples:
          </p>
          <ul className="space-y-2 mb-4">
            <li>• <code>examples/logistics_corporation.py</code> - Corporate governance example</li>
            <li>• <code>examples/palantir_example.py</code> - Advanced CorporateSwarm usage</li>
          </ul>
          <a 
            href="https://github.com/IlumCI/CR-CA/tree/main/examples" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-light font-medium"
          >
            View examples on GitHub →
          </a>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Learn More</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Link to="/crca" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3 text-white">CR-CA Overview</h3>
            <p className="leading-relaxed mb-4 text-blue-200">
              Learn about the core CR-CA framework that powers CRCA-CG.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View overview →
            </span>
          </Link>
          <Link to="/crca/documentation" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3 text-white">Documentation</h3>
            <p className="leading-relaxed mb-4 text-blue-200">
              Comprehensive API reference and integration guides.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View documentation →
            </span>
          </Link>
        </div>
      </section>

      <section className="text-center">
        <p className="text-lg leading-relaxed mb-6">
          For detailed CRCA-CG documentation and examples, visit the GitHub repository.
        </p>
        <GitHubLink />
      </section>
    </>
  );
}

export default CrcaCG;

