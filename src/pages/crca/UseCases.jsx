import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink';

function CrcaUseCases() {
  return (
    <>
      <section>
        <h1 className="font-serif">CR-CA Use Cases</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          Explore real-world applications of CR-CA across research, industry, and policy domains.
          Learn how causal reasoning and counterfactual analysis can be applied to solve
          complex problems.
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Research Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Causal Discovery</h3>
            <p className="leading-relaxed mb-4">
              Learn causal structures from observational data, identifying relationships
              between variables and understanding underlying mechanisms.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• Identify causal relationships in complex systems</li>
              <li>• Validate theoretical models with data</li>
              <li>• Discover hidden causal mechanisms</li>
            </ul>
          </div>

          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Policy Analysis</h3>
            <p className="leading-relaxed mb-4">
              Evaluate policy interventions and their causal effects on outcomes,
              enabling evidence-based decision-making.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• Assess policy effectiveness</li>
              <li>• Predict policy outcomes</li>
              <li>• Compare alternative policies</li>
            </ul>
          </div>

          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Root Cause Analysis</h3>
            <p className="leading-relaxed mb-4">
              Identify ultimate causes of problems through systematic causal reasoning,
              going beyond symptoms to find underlying causes.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• Trace problems to root causes</li>
              <li>• Understand causal chains</li>
              <li>• Prevent recurrence</li>
            </ul>
          </div>

          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Scenario Planning</h3>
            <p className="leading-relaxed mb-4">
              Explore alternative futures through counterfactual analysis, understanding
              what could happen under different conditions.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• Explore alternative scenarios</li>
              <li>• Understand potential outcomes</li>
              <li>• Plan for uncertainty</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Industry Applications</h2>
        <div className="space-y-6 mt-8">
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Decision Support Systems</h3>
            <p className="leading-relaxed mb-4">
              Use causal reasoning to support decision-making processes in business,
              healthcare, finance, and other domains. CR-CA provides explainable
              recommendations based on causal analysis.
            </p>
            <p className="leading-relaxed text-sm opacity-75">
              Applications include: investment decisions, treatment recommendations,
              resource allocation, risk assessment.
            </p>
          </div>

          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Explainable AI</h3>
            <p className="leading-relaxed mb-4">
              Build AI systems that provide transparent explanations for their decisions
              through counterfactual analysis. Users can understand not just what
              decisions are made, but why.
            </p>
            <p className="leading-relaxed text-sm opacity-75">
              Critical for: regulatory compliance, user trust, debugging, model validation.
            </p>
          </div>

          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Quality Control & Diagnostics</h3>
            <p className="leading-relaxed mb-4">
              Identify causes of quality issues, system failures, or performance problems
              through causal analysis. Understand which factors contribute to outcomes.
            </p>
            <p className="leading-relaxed text-sm opacity-75">
              Use cases: manufacturing quality, system diagnostics, performance optimization.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Domain-Specific Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="card p-8">
            <h3 className="font-serif text-xl mb-3 text-white">Healthcare</h3>
            <ul className="space-y-2">
              <li>• Treatment effect analysis</li>
              <li>• Disease progression modeling</li>
              <li>• Drug interaction analysis</li>
              <li>• Clinical decision support</li>
            </ul>
          </div>

          <div className="card p-8">
            <h3 className="font-serif text-xl mb-3 text-white">Finance</h3>
            <ul className="space-y-2">
              <li>• Market analysis</li>
              <li>• Risk assessment</li>
              <li>• Portfolio optimization</li>
              <li>• Regulatory compliance</li>
            </ul>
          </div>

          <div className="card p-8">
            <h3 className="font-serif text-xl mb-3 text-white">Economics</h3>
            <ul className="space-y-2">
              <li>• Policy evaluation</li>
              <li>• Market mechanism analysis</li>
              <li>• Economic forecasting</li>
              <li>• Intervention analysis</li>
            </ul>
          </div>

          <div className="card p-8">
            <h3 className="font-serif text-xl mb-3 text-white">Social Sciences</h3>
            <ul className="space-y-2">
              <li>• Behavioral analysis</li>
              <li>• Social policy evaluation</li>
              <li>• Educational outcomes</li>
              <li>• Public health interventions</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Case Studies</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <h3 className="font-serif text-xl mb-4">Example: Policy Intervention Analysis</h3>
          <p className="leading-relaxed mb-4">
            A government agency uses CR-CA to evaluate the causal effects of a new education policy.
            The framework helps identify which factors contribute to improved outcomes and what
            would happen under alternative policy scenarios.
          </p>
          <p className="leading-relaxed text-sm opacity-75">
            Key benefits: Transparent analysis, counterfactual exploration, evidence-based recommendations.
          </p>
        </div>

        <div className="card-light p-8 max-w-4xl mt-6">
          <h3 className="font-serif text-xl mb-4">Example: Healthcare Treatment Analysis</h3>
          <p className="leading-relaxed mb-4">
            A medical research team uses CR-CA to analyze treatment effects, understanding
            causal relationships between treatments, patient characteristics, and outcomes.
            Counterfactual analysis helps explain why certain treatments work better for
            specific patient groups.
          </p>
          <p className="leading-relaxed text-sm opacity-75">
            Key benefits: Explainable recommendations, personalized treatment insights, regulatory compliance.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Getting Started</h2>
        <p className="leading-relaxed max-w-4xl mb-6">
          Ready to apply CR-CA to your use case? Start by exploring examples and documentation:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Link to="/crca/examples" className="card p-8 block group">
            <h3 className="font-serif text-xl mb-3">Examples</h3>
            <p className="leading-relaxed">
              Code examples and tutorials
            </p>
          </Link>
          <Link to="/crca/documentation" className="card p-8 block group">
            <h3 className="font-serif text-xl mb-3">Documentation</h3>
            <p className="leading-relaxed">
              Complete API reference
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

      <section className="text-center">
        <p className="text-lg leading-relaxed mb-6">
          For more use cases, examples, and community contributions, visit the GitHub repository.
        </p>
        <GitHubLink />
      </section>
    </>
  );
}

export default CrcaUseCases;

