import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink';
import CodeBlock from '../../components/CodeBlock';

function CrcaDocumentation() {
  return (
    <>
      <section>
        <h1 className="font-serif">CR-CA Documentation</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          Comprehensive documentation for the CR-CA framework, including API reference,
          architecture overview, core concepts, and integration guides.
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Architecture Overview</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <p className="leading-relaxed mb-6">
            CR-CA follows a modular architecture with clear separation of concerns. The framework is built around
            structural causal models (SCMs) combined with large language model integration:
          </p>
          <ul className="space-y-3 mb-6">
            <li><strong>CRCAAgent:</strong> Main agent class for causal reasoning and counterfactual analysis</li>
            <li><strong>Automatic Variable Extraction:</strong> Extract variables and relationships from natural language</li>
            <li><strong>SCM Management:</strong> Build and manage structural causal models</li>
            <li><strong>Counterfactual Generation:</strong> Generate and analyze counterfactual scenarios</li>
            <li><strong>Advanced Analysis:</strong> Batch prediction, optimization, time-series analysis, Bayesian inference</li>
            <li><strong>Specialized Branches:</strong> CRCA-SD, CRCA-CG, CRCA-Q for domain-specific applications</li>
            <li><strong>Policy Engine:</strong> Doctrine-based policy management with event-sourced ledger</li>
          </ul>
          <p className="leading-relaxed text-sm opacity-75">
            The framework supports dual-mode operation (LLM mode for natural language tasks, deterministic mode for
            state-based simulation) and provides extensible templates for creating specialized agents.
          </p>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Module Documentation</h2>
        
        <div className="card-light p-8 max-w-4xl mt-6 mb-6">
          <h3 className="font-serif text-xl mb-4">Utils Module</h3>
          <p className="leading-relaxed mb-4">
            Utility functions and extensions for enhanced functionality:
          </p>
          <ul className="space-y-2">
            <li><strong>formatter.py:</strong> Markdown formatting utilities</li>
            <li><strong>tui.py:</strong> Terminal UI (CorporateSwarmTUI) for interactive interfaces</li>
            <li><strong>router.py:</strong> Swarm router for multi-agent coordination</li>
            <li><strong>conversation.py:</strong> Conversation management and history</li>
            <li><strong>ledger.py:</strong> Event-sourced ledger for policy decisions and outcomes</li>
            <li><strong>rollback.py:</strong> Rollback manager for intervention recovery</li>
            <li><strong>canonical.py:</strong> Deterministic hashing utilities</li>
            <li><strong>HHCS.py:</strong> Hybrid Hierarchical-Cluster Swarm</li>
            <li><strong>aop.py:</strong> Agent Orchestration Platform</li>
            <li><strong>Agent_types.py:</strong> Type definitions for agents</li>
            <li><strong>AnyToStr.py:</strong> Type conversion utilities</li>
            <li><strong>out_types.py:</strong> Output type definitions</li>
          </ul>
        </div>

        <div className="card-light p-8 max-w-4xl mb-6">
          <h3 className="font-serif text-xl mb-4">Tools Module</h3>
          <p className="leading-relaxed mb-4">
            External tool integration and protocol handling:
          </p>
          <ul className="space-y-2">
            <li><strong>mcpClientUtils.py:</strong> MCP (Model Context Protocol) client utilities</li>
            <li><strong>actuators.py:</strong> Intervention actuators for policy execution</li>
            <li><strong>sensors.py:</strong> Metric sensors for reading system metrics</li>
            <li><strong>code_generator.py:</strong> Code generation tools with LLM and ML integration</li>
            <li><strong>mandate_generator.py:</strong> Convert CorporateProposal to execution mandates</li>
            <li><strong>file_operations.py:</strong> File manipulation and operations</li>
            <li><strong>bolt.diy/:</strong> Web application for autonomous code generation (WIP)</li>
          </ul>
        </div>

        <div className="card-light p-8 max-w-4xl mb-6">
          <h3 className="font-serif text-xl mb-4">Templates Module</h3>
          <p className="leading-relaxed mb-4">
            Agent creation framework for building specialized agents:
          </p>
          <ul className="space-y-2">
            <li><strong>base_specialized_agent.py:</strong> Base class for specialized agents</li>
            <li><strong>feature_mixins.py:</strong> Feature mixins for adding capabilities</li>
            <li><strong>module_registry.py:</strong> Module registry for agent components</li>
            <li><strong>graph_management.py:</strong> Graph management utilities</li>
            <li><strong>prediction_framework.py:</strong> Prediction framework for forecasting</li>
            <li><strong>statistical_methods.py:</strong> Statistical analysis methods</li>
            <li><strong>llm_integration.py:</strong> LLM integration utilities</li>
            <li><strong>policy_loop.py:</strong> Policy loop mixin for policy-based agents</li>
            <li><strong>mpc_planner.py:</strong> MPC (Model Predictive Control) planner</li>
            <li><strong>drift_detection.py:</strong> Drift detection for model monitoring</li>
          </ul>
        </div>

        <div className="card-light p-8 max-w-4xl mb-6">
          <h3 className="font-serif text-xl mb-4">Schemas Module</h3>
          <p className="leading-relaxed mb-4">
            Type definitions and data structures:
          </p>
          <ul className="space-y-2">
            <li><strong>mcpSchemas.py:</strong> MCP (Model Context Protocol) schemas</li>
            <li><strong>policy.py:</strong> Policy schemas including DoctrineV1, EpochConfig, MetricSpec, Objective, RiskBudget, LeverSpec, and CompiledPolicy</li>
          </ul>
        </div>

        <div className="card-light p-8 max-w-4xl">
          <h3 className="font-serif text-xl mb-4">Policy Engine System</h3>
          <p className="leading-relaxed mb-4">
            The Policy Engine provides doctrine-based policy management with event-sourced audit trails:
          </p>
          <ul className="space-y-2 mb-4">
            <li><strong>DoctrineV1:</strong> Policy doctrine definition with metrics, objectives, invariants, levers, and risk budgets</li>
            <li><strong>CompiledPolicy:</strong> Normalized, compiled version with deterministic selectors</li>
            <li><strong>Ledger:</strong> Event-sourced audit trail for all policy decisions and outcomes</li>
            <li><strong>RollbackManager:</strong> Intervention recovery and checkpoint management</li>
            <li><strong>Actuators:</strong> Execute interventions based on policy decisions</li>
            <li><strong>Sensors:</strong> Read system metrics for policy evaluation</li>
          </ul>
          <p className="leading-relaxed text-sm opacity-75">
            The Policy Engine enables autonomous system control with transparent, auditable decision-making.
          </p>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Branch Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Link to="/crca/crca-sd" className="card-light p-8 block group">
            <h3 className="font-serif text-xl mb-3">CRCA-SD</h3>
            <p className="leading-relaxed mb-4">
              Socioeconomic dynamics module with MPC solver, governance systems, and real-time monitoring.
            </p>
            <span className="text-accent text-sm font-medium group-hover:text-accent-light">
              Learn more →
            </span>
          </Link>
          <Link to="/crca/crca-cg" className="card-light p-8 block group">
            <h3 className="font-serif text-xl mb-3">CRCA-CG</h3>
            <p className="leading-relaxed mb-4">
              Corporate governance with CorporateSwarm, ESG scoring, and multi-agent orchestration.
            </p>
            <span className="text-accent text-sm font-medium group-hover:text-accent-light">
              Learn more →
            </span>
          </Link>
          <Link to="/crca/crca-q" className="card-light p-8 block group">
            <h3 className="font-serif text-xl mb-3">CRCA-Q</h3>
            <p className="leading-relaxed mb-4">
              Quantitative trading with QuantTradingAgent, causal signals, and portfolio optimization.
            </p>
            <span className="text-accent text-sm font-medium group-hover:text-accent-light">
              Learn more →
            </span>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Core Concepts</h2>
        <div className="space-y-8 mt-6">
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-4">Structural Causal Models (SCMs)</h3>
            <p className="leading-relaxed mb-4">
              SCMs represent causal relationships between variables using directed acyclic graphs (DAGs).
              Each variable is defined by a structural equation that describes its causal dependencies.
            </p>
            <p className="leading-relaxed opacity-75">
              CR-CA automatically constructs SCMs from natural language descriptions or allows
              manual specification for precise control.
            </p>
          </div>

          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-4">Counterfactual Analysis</h3>
            <p className="leading-relaxed mb-4">
              Counterfactual analysis answers "what if" questions by exploring alternative scenarios.
              CR-CA generates counterfactuals by modifying causal models and simulating outcomes.
            </p>
            <p className="leading-relaxed opacity-75">
              This enables explainable AI by providing transparent reasoning about alternative outcomes.
            </p>
          </div>

          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-4">Deterministic Inference</h3>
            <p className="leading-relaxed mb-4">
              Unlike probabilistic models, CR-CA focuses on deterministic causal inference,
              providing exact outcomes rather than probability distributions.
            </p>
            <p className="leading-relaxed opacity-75">
              This makes the framework suitable for applications requiring precise, explainable results.
            </p>
          </div>

          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-4">LLM Integration</h3>
            <p className="leading-relaxed mb-4">
              CR-CA integrates with large language models to automatically extract variables,
              relationships, and constraints from natural language task descriptions.
            </p>
            <p className="leading-relaxed opacity-75">
              This makes the framework accessible to users without deep causal modeling expertise.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-serif">API Reference</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <h3 className="font-serif text-xl mb-4">CRCAAgent</h3>
          <p className="leading-relaxed mb-4">
            The main class for creating causal reasoning agents:
          </p>
          <CodeBlock code={`from CRCA import CRCAAgent

agent = CRCAAgent(
    model_name="gpt-4o",
    max_loops=3,
    use_crca_tools=True
)`} language="python" className="mb-4" />
          <h4 className="font-serif text-lg mt-6 mb-3">Key Methods</h4>
          <ul className="space-y-2">
            <li><code>run(task)</code> - Execute a causal reasoning task (supports both string tasks and state dictionaries)</li>
            <li><code>run_async(task)</code> - Async version of run for non-blocking operations</li>
            <li><code>get_nodes()</code> - Get all variables in the causal model</li>
            <li><code>get_edges()</code> - Get all causal relationships</li>
            <li><code>add_causal_relationship(source, target, strength)</code> - Add a causal relationship</li>
            <li><code>is_dag()</code> - Verify the model is a valid DAG</li>
            <li><code>predict(variables)</code> - Make predictions using the causal model</li>
            <li><code>predict_batch(states)</code> - Batch prediction for multiple states</li>
            <li><code>counterfactual(interventions)</code> - Generate counterfactual scenarios</li>
            <li><code>optimize(objective, constraints)</code> - Optimization methods</li>
            <li><code>time_series_analysis(variables, lags)</code> - Time-series causal analysis</li>
            <li><code>bayesian_inference(variable, credible_level)</code> - Bayesian inference with credible intervals</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Integration Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Basic Usage</h3>
            <p className="leading-relaxed mb-4">
              Learn how to create an agent, define variables, and perform basic causal reasoning.
            </p>
            <Link to="/crca/examples" className="text-accent hover:text-accent-light font-medium">
              View examples →
            </Link>
          </div>
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Advanced Features</h3>
            <p className="leading-relaxed mb-4">
              Explore batch prediction, optimization, time-series analysis, and Bayesian inference.
            </p>
            <Link to="/crca/examples" className="text-accent hover:text-accent-light font-medium">
              View examples →
            </Link>
          </div>
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Custom Agents</h3>
            <p className="leading-relaxed mb-4">
              Create specialized agents using the template system for domain-specific applications.
            </p>
            <GitHubLink variant="secondary" label="View on GitHub" />
          </div>
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Configuration</h3>
            <p className="leading-relaxed mb-4">
              Customize agent behavior, model selection, and feature flags for your use case.
            </p>
            <Link to="/crca/installation" className="text-accent hover:text-accent-light font-medium">
              Installation guide →
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">GitHub Repository</h2>
        <p className="leading-relaxed max-w-4xl mb-6">
          For the most up-to-date documentation, API reference, and detailed technical information,
          visit the CR-CA GitHub repository. The repository includes:
        </p>
        <ul className="space-y-2 mb-8">
          <li>Complete README with usage examples</li>
          <li>Full API documentation</li>
          <li>Code examples and tutorials</li>
          <li>Template guide for custom agents</li>
          <li>Changelog and version history</li>
          <li>Contributing guidelines</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <GitHubLink />
          <a 
            href="https://github.com/IlumCI/CR-CA/blob/main/README.md" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View README
          </a>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Link to="/crca/examples" className="card p-8 block group">
            <h3 className="font-serif text-xl mb-3">Examples</h3>
            <p className="leading-relaxed">
              Code examples and tutorials
            </p>
          </Link>
          <Link to="/crca/use-cases" className="card p-8 block group">
            <h3 className="font-serif text-xl mb-3">Use Cases</h3>
            <p className="leading-relaxed">
              Real-world applications
            </p>
          </Link>
          <Link to="/crca/installation" className="card p-8 block group">
            <h3 className="font-serif text-xl mb-3">Installation</h3>
            <p className="leading-relaxed">
              Setup and configuration
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}

export default CrcaDocumentation;

