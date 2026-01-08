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
          <h3 className="font-serif text-xl mb-4">LLM-Based Causal Analysis (Automatic Extraction)</h3>
          <p className="leading-relaxed mb-4">
            Automatic variable extraction + causal analysis with no manual variable declaration:
          </p>
          <CodeBlock code={`from CRCA import CRCAAgent

agent = CRCAAgent(
    model_name="gpt-4o",
    max_loops=3,
    agent_max_loops=3
)

# Automatic variable extraction + causal analysis
task = "Why do software projects fail despite adequate funding?"
result = agent.run(task=task)

print(result["causal_analysis"])
for scenario in result["counterfactual_scenarios"][:3]:
    print(f"{scenario.name}: {scenario.reasoning}")`} language="python" />
        </div>

        <div className="card-light p-8 max-w-4xl mb-6">
          <h3 className="font-serif text-xl mb-4">Deterministic Simulation (Traditional Approach)</h3>
          <p className="leading-relaxed mb-4">
            Manual variable declaration and deterministic causal simulation:
          </p>
          <CodeBlock code={`from CRCA import CRCAAgent

agent = CRCAAgent(variables=["price", "demand", "inventory"])
agent.add_causal_relationship("price", "demand", strength=-0.5)
agent.add_causal_relationship("demand", "inventory", strength=-0.2)

state = {"price": 100.0, "demand": 1000.0, "inventory": 5000.0}
result = agent.run(initial_state=state, max_steps=2)

print(result["evolved_state"])
for scenario in result["counterfactual_scenarios"][:3]:
    print(f"{scenario.name}: {scenario.probability:.2f}")`} language="python" />
        </div>

        <div className="card-light p-8 max-w-4xl mb-8">
          <h3 className="font-serif text-xl mb-4">Hybrid Approach (LLM Extraction + Deterministic Simulation)</h3>
          <p className="leading-relaxed mb-4">
            Combine automatic extraction with deterministic simulation:
          </p>
          <CodeBlock code={`from CRCA import CRCAAgent

agent = CRCAAgent(model_name="gpt-4o-mini")

# Step 1: Automatic extraction via LLM
task = "Analyze pricing strategy for a new product"
extraction_result = agent.run(task=task)

# Step 2: Use extracted graph for deterministic simulation
initial_state = {var: 0.0 for var in agent.get_nodes()}
simulation_result = agent.run(initial_state=initial_state, max_steps=5)

print(f"Simulated {len(simulation_result['counterfactual_scenarios'])} scenarios")`} language="python" />
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
            Efficient vectorized predictions for ensemble forecasting:
          </p>
          <CodeBlock code={`agent = CRCAAgent(
    variables=["price", "demand"],
    enable_batch_predict=True,
    max_batch_size=32
)

factual_states = [{"price": 100.0, "demand": 1000.0} for _ in range(100)]
interventions_list = [{"price": 100.0 + i} for i in range(100)]

predictions = agent._predict_outcomes_batch(factual_states, interventions_list)`} language="python" />
        </div>

        <div className="card-light p-8 max-w-4xl mb-6">
          <h3 className="font-serif text-xl mb-4">Async Operations</h3>
          <p className="leading-relaxed mb-4">
            Non-blocking operations for concurrent analysis:
          </p>
          <CodeBlock code={`import asyncio
from CRCA import CRCAAgent

async def analyze_async():
    agent = CRCAAgent(variables=["x", "y"])
    result = await agent.run_async(
        initial_state={"x": 1.0, "y": 2.0},
        max_steps=3
    )
    return result

result = asyncio.run(analyze_async())`} language="python" />
        </div>

        <div className="card-light p-8 max-w-4xl mb-6">
          <h3 className="font-serif text-xl mb-4">Optimization Methods</h3>
          <p className="leading-relaxed mb-4">
            Gradient-based intervention optimization:
          </p>
          <CodeBlock code={`agent = CRCAAgent(variables=["price", "demand", "revenue"])
agent.add_causal_relationship("price", "demand", strength=-0.5)
agent.add_causal_relationship("price", "revenue", strength=1.0)
agent.add_causal_relationship("demand", "revenue", strength=0.8)

initial_state = {"price": 100.0, "demand": 1000.0, "revenue": 100000.0}

# Gradient-based optimization
opt_result = agent.gradient_based_intervention_optimization(
    initial_state=initial_state,
    target="revenue",
    intervention_vars=["price"],
    constraints={"price": (80.0, 120.0)}
)

print(f"Optimal price: {opt_result['optimal_intervention']['price']}")
print(f"Optimal revenue: {opt_result['optimal_target_value']}")`} language="python" />
        </div>

        <div className="card-light p-8 max-w-4xl mb-6">
          <h3 className="font-serif text-xl mb-4">Automatic Variable Extraction</h3>
          <p className="leading-relaxed mb-4">
            When a task is provided without pre-declared variables, CR-CA automatically extracts them:
          </p>
          <CodeBlock code={`from CRCA import CRCAAgent

# No variables declared - automatic extraction will occur
agent = CRCAAgent(model_name="gpt-4o-mini")

# Task automatically triggers variable extraction
task = "Analyze how increasing product price affects demand and revenue"
result = agent.run(task=task)

# Variables and edges were automatically extracted and used
print(f"Extracted {len(agent.get_nodes())} variables")
print(f"Created {len(agent.get_edges())} causal relationships")`} language="python" />
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Specialized Branch Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Link to="/crca/crca-sd" className="card-light p-8 block group">
            <h3 className="font-serif text-xl mb-3">CRCA-SD Examples</h3>
            <p className="leading-relaxed mb-4">
              Socioeconomic dynamics, MPC solver, and governance system examples.
            </p>
            <span className="text-accent text-sm font-medium group-hover:text-accent-light">
              View CRCA-SD examples →
            </span>
          </Link>
          <Link to="/crca/crca-cg" className="card-light p-8 block group">
            <h3 className="font-serif text-xl mb-3">CRCA-CG Examples</h3>
            <p className="leading-relaxed mb-4">
              Corporate governance, CorporateSwarm, and ESG scoring examples.
            </p>
            <span className="text-accent text-sm font-medium group-hover:text-accent-light">
              View CRCA-CG examples →
            </span>
          </Link>
          <Link to="/crca/crca-q" className="card-light p-8 block group">
            <h3 className="font-serif text-xl mb-3">CRCA-Q Examples</h3>
            <p className="leading-relaxed mb-4">
              Quantitative trading, causal signals, and portfolio optimization examples.
            </p>
            <span className="text-accent text-sm font-medium group-hover:text-accent-light">
              View CRCA-Q examples →
            </span>
          </Link>
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
          <li>Basic usage tutorials and automatic variable extraction</li>
          <li>Advanced analysis examples (batch prediction, optimization, async operations)</li>
          <li>Hybrid approach examples (LLM extraction + deterministic simulation)</li>
          <li>Custom agent templates and specialized branches</li>
          <li>Integration patterns and policy engine examples</li>
          <li>Domain-specific applications (CRCA-SD, CRCA-CG, CRCA-Q)</li>
          <li>Real-world examples: crca_sd_example.py, logistics_corporation.py, policy_bench.py</li>
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

