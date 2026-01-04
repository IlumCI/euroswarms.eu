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
            CR-CA is built around the concept of structural causal models (SCMs) combined with
            large language model integration. The framework provides:
          </p>
          <ul className="space-y-3">
            <li><strong>CRCAAgent:</strong> Main agent class for causal reasoning and counterfactual analysis</li>
            <li><strong>Automatic Variable Extraction:</strong> Extract variables and relationships from natural language</li>
            <li><strong>SCM Management:</strong> Build and manage structural causal models</li>
            <li><strong>Counterfactual Generation:</strong> Generate and analyze counterfactual scenarios</li>
            <li><strong>Advanced Analysis:</strong> Batch prediction, optimization, time-series analysis, Bayesian inference</li>
          </ul>
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
            <li><code>run(task)</code> - Execute a causal reasoning task</li>
            <li><code>get_nodes()</code> - Get all variables in the causal model</li>
            <li><code>get_edges()</code> - Get all causal relationships</li>
            <li><code>is_dag()</code> - Verify the model is a valid DAG</li>
            <li><code>predict(variables)</code> - Make predictions using the causal model</li>
            <li><code>counterfactual(interventions)</code> - Generate counterfactual scenarios</li>
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

