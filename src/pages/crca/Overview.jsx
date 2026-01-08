import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink';

function CrcaOverview() {
  return (
    <>
      <section>
        <div className="mb-6">
          <span className="badge-official">Flagship Framework</span>
          <span className="ml-4 text-muted font-mono text-sm">v1.4.0</span>
        </div>
        <h1 className="font-serif">CR-CA: Causal Reasoning and Counterfactual Analysis</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          CR-CA is a comprehensive framework for causal reasoning and counterfactual analysis, combining
          structural causal models (SCMs) with large language model (LLM) integration. The framework enables
          sophisticated causal inference, automatic variable extraction from natural language, deterministic
          causal simulation, and comprehensive counterfactual scenario generation. Designed for both research
          and practical applications, CR-CA provides a modular architecture supporting specialized agents
          for quantitative trading, socioeconomic dynamics, and corporate governance.
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
        <p className="leading-relaxed max-w-4xl mb-6">
          The framework combines theoretical rigor with practical usability, making advanced
          causal inference accessible through intuitive APIs and automatic extraction capabilities.
          CR-CA implements structural causal models (SCMs) based on Judea Pearl's causal hierarchy,
          enabling both LLM-based causal analysis and deterministic causal simulation.
        </p>
        <div className="card-light p-8 max-w-4xl mt-6">
          <h3 className="font-serif text-xl mb-4">Dual-Mode Operation</h3>
          <p className="leading-relaxed mb-4">
            CR-CA automatically selects between two operational modes:
          </p>
          <ul className="space-y-2">
            <li><strong>LLM Mode:</strong> When provided with a string task, the agent uses automatic variable extraction and LLM-based causal analysis</li>
            <li><strong>Deterministic Mode:</strong> When provided with a state dictionary, the agent performs fast, deterministic state evolution using SCMs</li>
          </ul>
          <p className="leading-relaxed mt-4 text-sm opacity-75">
            This dual-mode approach allows users to start with natural language descriptions and seamlessly
            transition to deterministic simulation for performance-critical applications.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Feature Matrix</h2>
        <div className="card-light p-8 max-w-5xl mt-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-semibold">Feature</th>
                <th className="text-center p-3 font-semibold">Core CRCAAgent</th>
                <th className="text-center p-3 font-semibold">CRCA-SD</th>
                <th className="text-center p-3 font-semibold">CRCA-CG</th>
                <th className="text-center p-3 font-semibold">CRCA-Q</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Automatic Variable Extraction</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">LLM-Based Causal Analysis</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Deterministic Simulation</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">-</td>
                <td className="text-center p-3">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Counterfactual Generation</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Batch Prediction</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">-</td>
                <td className="text-center p-3">-</td>
                <td className="text-center p-3">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Async Operations</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">-</td>
                <td className="text-center p-3">-</td>
                <td className="text-center p-3">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Optimization Methods</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">-</td>
                <td className="text-center p-3">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Time-Series Analysis</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">-</td>
                <td className="text-center p-3">-</td>
                <td className="text-center p-3">✓</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Bayesian Inference</td>
                <td className="text-center p-3">✓</td>
                <td className="text-center p-3">-</td>
                <td className="text-center p-3">-</td>
                <td className="text-center p-3">✓</td>
              </tr>
              <tr>
                <td className="p-3">Data Source Integration</td>
                <td className="text-center p-3">-</td>
                <td className="text-center p-3">-</td>
                <td className="text-center p-3">-</td>
                <td className="text-center p-3">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Module Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">CRCA.py (Core)</h3>
            <p className="leading-relaxed mb-3">
              Core causal reasoning agent with automatic extraction and dual-mode operation.
            </p>
            <ul className="text-sm space-y-1 opacity-75">
              <li>• CRCAAgent class</li>
              <li>• Automatic variable extraction</li>
              <li>• Dual-mode operation</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Utils Module</h3>
            <p className="leading-relaxed mb-3">
              Utility functions and extensions for enhanced functionality.
            </p>
            <ul className="text-sm space-y-1 opacity-75">
              <li>• Formatter utilities</li>
              <li>• TUI (Text User Interface)</li>
              <li>• Router and conversation management</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Tools Module</h3>
            <p className="leading-relaxed mb-3">
              External tool integration and protocol handling.
            </p>
            <ul className="text-sm space-y-1 opacity-75">
              <li>• MCP client utilities</li>
              <li>• Actuators and sensors</li>
              <li>• Code generator</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Templates Module</h3>
            <p className="leading-relaxed mb-3">
              Agent creation framework for specialized agents.
            </p>
            <ul className="text-sm space-y-1 opacity-75">
              <li>• Base agents</li>
              <li>• Feature mixins</li>
              <li>• Module registry</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">CRCA-SD Module</h3>
            <p className="leading-relaxed mb-3">
              Socioeconomic dynamics with MPC solver and governance systems.
            </p>
            <ul className="text-sm space-y-1 opacity-75">
              <li>• MPC solver</li>
              <li>• Governance systems</li>
              <li>• Real-time monitoring</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">CRCA-CG Module</h3>
            <p className="leading-relaxed mb-3">
              Corporate governance with multi-agent orchestration.
            </p>
            <ul className="text-sm space-y-1 opacity-75">
              <li>• CorporateSwarm</li>
              <li>• ESG scoring</li>
              <li>• Multi-agent orchestration</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">CRCA-Q Module</h3>
            <p className="leading-relaxed mb-3">
              Quantitative trading with causal signals and portfolio optimization.
            </p>
            <ul className="text-sm space-y-1 opacity-75">
              <li>• QuantTradingAgent</li>
              <li>• Causal signals</li>
              <li>• Portfolio optimization</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Schemas Module</h3>
            <p className="leading-relaxed mb-3">
              Type definitions and data structures.
            </p>
            <ul className="text-sm space-y-1 opacity-75">
              <li>• MCP schemas</li>
              <li>• Policy schemas</li>
              <li>• Data structures</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Automatic Variable Extraction</h3>
            <p className="leading-relaxed">
              Extract variables and causal relationships directly from natural language task
              descriptions using advanced LLM integration. Introduced in v1.3.0, this feature
              eliminates the need for manual variable declaration.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Structural Causal Models</h3>
            <p className="leading-relaxed">
              Build and manage structural causal models (SCMs) with support for deterministic
              inference and constraint validation. Based on Judea Pearl's causal hierarchy.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Counterfactual Analysis</h3>
            <p className="leading-relaxed">
              Generate comprehensive counterfactual scenarios to explore alternative outcomes
              and understand causal relationships. Provides explainable AI through transparent reasoning.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Advanced Analysis Suite</h3>
            <p className="leading-relaxed">
              Batch prediction, optimization methods, time-series analysis, Bayesian inference,
              and information-theoretic measures for comprehensive causal analysis.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">LLM Integration</h3>
            <p className="leading-relaxed">
              Seamless integration with large language models for natural language processing
              and automatic extraction capabilities. Supports multiple LLM providers via LiteLLM.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Extensible Architecture</h3>
            <p className="leading-relaxed">
              Template system for creating specialized agents and custom analysis methods
              tailored to specific domains. Supports CRCA-SD, CRCA-CG, and CRCA-Q branches.
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

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Specialized Branches</h2>
        <p className="leading-relaxed max-w-4xl mb-6">
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

      <section>
        <h2 className="font-serif">Quick Start</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Link to="/crca/installation" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3 text-white">Installation</h3>
            <p className="leading-relaxed mb-4 text-blue-200">
              Get started with CR-CA by following our installation guide. Includes requirements,
              setup instructions, and configuration options.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View installation guide →
            </span>
          </Link>
          <Link to="/crca/examples" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3 text-white">Examples</h3>
            <p className="leading-relaxed mb-4 text-blue-200">
              Explore code examples, tutorials, and demonstrations to learn how to use
              CR-CA in your projects.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View examples →
            </span>
          </Link>
          <Link to="/crca/documentation" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3 text-white">Documentation</h3>
            <p className="leading-relaxed mb-4 text-blue-200">
              Comprehensive API reference, architecture overview, and integration guides
              for all CR-CA features.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View documentation →
            </span>
          </Link>
          <Link to="/crca/use-cases" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3 text-white">Use Cases</h3>
            <p className="leading-relaxed mb-4 text-blue-200">
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

