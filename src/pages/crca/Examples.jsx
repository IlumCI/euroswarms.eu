import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink';
import CodeBlock from '../../components/CodeBlock';

function CrcaExamples() {
  return (
    <>
      <section>
        <h1 className="font-serif">CR-CA Examples</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          Learn how to use CR-CA through code examples, tutorials, and demonstrations.
          These examples cover basic usage, advanced features, and real-world applications.
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Basic Examples</h2>
        
        <div className="card-light p-8 max-w-4xl mt-6 mb-6">
          <h3 className="font-serif text-xl mb-4">Simple Causal Reasoning</h3>
          <p className="leading-relaxed mb-4">
            Create an agent and perform basic causal reasoning:
          </p>
          <CodeBlock code={`from CRCA import CRCAAgent

# Initialize agent
agent = CRCAAgent(model_name="gpt-4o")

# Define a causal reasoning task
task = """
Analyze the causal relationship between education level and income.
Consider factors like experience and skills.
"""

# Run the analysis
result = agent.run(task)
print(result)`} language="python" />
        </div>

        <div className="card-light p-8 max-w-4xl mb-8">
          <h3 className="font-serif text-xl mb-4">Automatic Variable Extraction</h3>
          <p className="leading-relaxed mb-4">
            CR-CA automatically extracts variables and relationships:
          </p>
          <CodeBlock code={`# The agent automatically identifies:
# - Variables: education_level, income, experience, skills
# - Causal relationships: education -> income, experience -> income
# - Constraints and dependencies

# View the extracted model
print("Variables:", agent.get_nodes())
print("Relationships:", agent.get_edges())`} language="python" />
        </div>

        <div className="card-light p-8 max-w-4xl">
          <h3 className="font-serif text-xl mb-4">Counterfactual Analysis</h3>
          <p className="leading-relaxed mb-4">
            Generate counterfactual scenarios:
          </p>
          <CodeBlock code={`# What if education level was higher?
counterfactual = agent.counterfactual({
    "education_level": "graduate"
})

print("Counterfactual outcome:", counterfactual)`} language="python" />
        </div>
      </section>

      <section>
        <h2 className="font-serif">Advanced Examples</h2>
        
        <div className="card-light p-8 max-w-4xl mt-6 mb-6">
          <h3 className="font-serif text-xl mb-4">Batch Prediction</h3>
          <p className="leading-relaxed mb-4">
            Make predictions for multiple scenarios:
          </p>
          <CodeBlock code={`# Enable batch prediction
agent = CRCAAgent(
    model_name="gpt-4o",
    enable_batch_predict=True,
    max_batch_size=32
)

# Predict for multiple inputs
predictions = agent.predict_batch([
    {"education": "high_school", "experience": 5},
    {"education": "bachelor", "experience": 3},
    {"education": "master", "experience": 1}
])`} language="python" />
        </div>

        <div className="card-light p-8 max-w-4xl mb-8">
          <h3 className="font-serif text-xl mb-4">Time-Series Analysis</h3>
          <p className="leading-relaxed mb-4">
            Analyze temporal causal relationships:
          </p>
          <CodeBlock code={`# Time-series causal analysis
from CRCA.analysis import time_series

# Analyze Granger causality
granger_result = time_series.granger_causality(
    agent, 
    variables=["price", "demand"],
    lags=3
)`} language="python" />
        </div>

        <div className="card-light p-8 max-w-4xl">
          <h3 className="font-serif text-xl mb-4">Bayesian Inference</h3>
          <p className="leading-relaxed mb-4">
            Perform Bayesian analysis with credible intervals:
          </p>
          <CodeBlock code={`# Bayesian inference
from CRCA.analysis import bayesian

# Estimate with credible intervals
result = bayesian.estimate(
    agent,
    variable="income",
    credible_level=0.95
)`} language="python" />
        </div>
      </section>

      <section>
        <h2 className="font-serif">Real-World Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Policy Analysis</h3>
            <p className="leading-relaxed mb-4">
              Evaluate policy interventions and their causal effects on outcomes.
            </p>
            <Link to="/crca/use-cases" className="text-accent hover:text-accent-light font-medium">
              View use case →
            </Link>
          </div>
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Root Cause Analysis</h3>
            <p className="leading-relaxed mb-4">
              Identify ultimate causes of problems through causal reasoning.
            </p>
            <Link to="/crca/use-cases" className="text-accent hover:text-accent-light font-medium">
              View use case →
            </Link>
          </div>
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Decision Support</h3>
            <p className="leading-relaxed mb-4">
              Use causal reasoning to support decision-making processes.
            </p>
            <Link to="/crca/use-cases" className="text-accent hover:text-accent-light font-medium">
              View use case →
            </Link>
          </div>
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Scenario Planning</h3>
            <p className="leading-relaxed mb-4">
              Explore alternative futures through counterfactual analysis.
            </p>
            <Link to="/crca/use-cases" className="text-accent hover:text-accent-light font-medium">
              View use case →
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">GitHub Examples</h2>
        <p className="leading-relaxed max-w-4xl mb-6">
          The CR-CA GitHub repository contains comprehensive examples in the <code>examples/</code>
          directory, including:
        </p>
        <ul className="space-y-2 mb-8">
          <li>Basic usage tutorials</li>
          <li>Advanced analysis examples</li>
          <li>Custom agent templates</li>
          <li>Integration patterns</li>
          <li>Domain-specific applications</li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://github.com/IlumCI/CR-CA/tree/main/examples" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Examples on GitHub
          </a>
          <GitHubLink variant="secondary" />
        </div>
      </section>

      <section>
        <h2 className="font-serif">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Link to="/crca/documentation" className="card p-8 block group">
            <h3 className="font-serif text-xl mb-3">Documentation</h3>
            <p className="leading-relaxed">
              Complete API reference
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
              Get started guide
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}

export default CrcaExamples;

