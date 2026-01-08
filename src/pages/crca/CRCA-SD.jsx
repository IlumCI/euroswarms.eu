import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink';
import CodeBlock from '../../components/CodeBlock';

function CrcaSD() {
  return (
    <>
      <section>
        <div className="mb-6">
          <span className="badge-official">Specialized Branch</span>
          <span className="ml-4 text-muted font-mono text-sm">v1.4.0</span>
        </div>
        <h1 className="font-serif">CRCA-SD: Socioeconomic Dynamics</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          CRCA-SD integrates CR-CA for causal scenario generation in model-predictive control (MPC) systems.
          Designed for complex policy analysis, economic modeling, and real-time monitoring of socioeconomic systems.
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Overview</h2>
        <p className="leading-relaxed max-w-4xl mb-6">
          CRCA-SD extends the core CR-CA framework with specialized capabilities for socioeconomic dynamics,
          including MPC solvers, governance systems, and real-time monitoring. The module enables sophisticated
          causal scenario generation for policy analysis and economic system modeling.
        </p>
        <div className="card-light p-8 max-w-4xl mt-6">
          <h3 className="font-serif text-xl mb-4">Key Components</h3>
          <ul className="space-y-2">
            <li><strong>StateVector:</strong> State representation for socioeconomic systems</li>
            <li><strong>MPC Solver:</strong> Model-predictive control for policy optimization</li>
            <li><strong>Governance Systems:</strong> Policy governance and decision-making frameworks</li>
            <li><strong>Real-time Monitoring:</strong> Live system monitoring and analysis</li>
            <li><strong>Scenario Generator:</strong> Causal scenario generation using CR-CA</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">MPC Solver</h3>
            <p className="leading-relaxed">
              Model-predictive control solver for optimizing policy interventions over time horizons,
              considering causal relationships and constraints.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Causal Scenario Generation</h3>
            <p className="leading-relaxed">
              Generate causal scenarios using CR-CA instead of random noise, providing more realistic
              and interpretable policy analysis.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Governance Systems</h3>
            <p className="leading-relaxed">
              Policy governance frameworks for managing complex socioeconomic systems with transparent
              decision-making processes.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Real-time Monitoring</h3>
            <p className="leading-relaxed">
              Live monitoring and analysis of socioeconomic indicators with automatic alerting and
              intervention recommendations.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Integration with CR-CA</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <p className="leading-relaxed mb-4">
            CRCA-SD integrates CRCAAgent for causal scenario generation:
          </p>
          <CodeBlock code={`from crca_sd import get_crca_agent
from crca_sd.crca_sd_mpc import ScenarioGenerator

# Get CRCAAgent instance
crca = get_crca_agent(
    variables=['GDP', 'unemployment', 'inflation', 'stability'],
    model_name="gpt-4o-mini"
)

if crca:
    # Create scenario generator with CRCA
    gen = ScenarioGenerator(crca_agent=crca)
    
    # Generate causal scenarios instead of random noise
    scenarios = gen.generate_causal_scenarios(
        n_scenarios=10,
        horizon=12,
        current_state=state_vector,
        target_variables=['GDP', 'unemployment']
    )
else:
    # Fallback to Gaussian scenarios
    scenarios = gen.generate_gaussian(n_scenarios=10, horizon=12)`} language="python" />
        </div>
      </section>

      <section>
        <h2 className="font-serif">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Policy Intervention Analysis</h3>
            <p className="leading-relaxed mb-4">
              Evaluate the causal effects of policy interventions on socioeconomic outcomes,
              using MPC to optimize intervention timing and magnitude.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• Economic policy evaluation</li>
              <li>• Social policy analysis</li>
              <li>• Intervention optimization</li>
            </ul>
          </div>
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Economic System Modeling</h3>
            <p className="leading-relaxed mb-4">
              Model complex economic systems with causal relationships, enabling realistic
              scenario generation and policy planning.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• Macroeconomic modeling</li>
              <li>• Regional economic analysis</li>
              <li>• System stability assessment</li>
            </ul>
          </div>
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Real-time Monitoring</h3>
            <p className="leading-relaxed mb-4">
              Monitor socioeconomic indicators in real-time, with automatic causal analysis
              and intervention recommendations.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• Live system monitoring</li>
              <li>• Alert generation</li>
              <li>• Automated recommendations</li>
            </ul>
          </div>
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Governance Optimization</h3>
            <p className="leading-relaxed mb-4">
              Optimize governance systems using causal reasoning to understand the effects
              of different governance structures and policies.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• Governance structure analysis</li>
              <li>• Policy effectiveness evaluation</li>
              <li>• Decision-making optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Installation</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <p className="leading-relaxed mb-4">
            CRCA-SD dependencies are included in the main CR-CA installation. Install CR-CA:
          </p>
          <CodeBlock code="pip install crca" language="bash" className="mb-4" />
          <p className="leading-relaxed text-sm opacity-75">
            CRCA-SD is available as part of the core CR-CA package. No additional installation steps required.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Examples</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <p className="leading-relaxed mb-4">
            The CR-CA repository includes comprehensive CRCA-SD examples:
          </p>
          <ul className="space-y-2 mb-4">
            <li>• <code>examples/crca_sd_example.py</code> - Basic CRCA-SD usage</li>
            <li>• <code>examples/pridnestrovia-sd.py</code> - Regional economic modeling</li>
            <li>• <code>examples/pridnestrovia_realtime.py</code> - Real-time monitoring example</li>
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
              Learn about the core CR-CA framework that powers CRCA-SD.
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
          For detailed CRCA-SD documentation and examples, visit the GitHub repository.
        </p>
        <GitHubLink />
      </section>
    </>
  );
}

export default CrcaSD;

