import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink';
import CodeBlock from '../../components/CodeBlock';

function CrcaQ() {
  return (
    <>
      <section>
        <div className="mb-6">
          <span className="badge-official">Specialized Branch</span>
          <span className="ml-4 text-muted font-mono text-sm">v1.4.0</span>
        </div>
        <h1 className="font-serif">CRCA-Q: Quantitative Trading</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          CRCA-Q is a quantitative trading system that integrates causal reasoning with traditional
          quantitative finance techniques. Unlike correlation-based systems, CRCA-Q uses causal inference
          to understand why market movements occur, enabling more robust predictions that remain valid
          across different market regimes.
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Overview</h2>
        <p className="leading-relaxed max-w-4xl mb-6">
          CRCA-Q represents a novel approach to quantitative trading by integrating structural causal
          models (SCMs) with traditional quantitative finance. The system uses causal reasoning to
          understand why market movements occur, rather than just identifying correlational patterns.
          This makes it more robust to regime changes and provides interpretable trading signals.
        </p>
        <div className="card-light p-8 max-w-4xl mt-6">
          <h3 className="font-serif text-xl mb-4">Key Features</h3>
          <ul className="space-y-2">
            <li><strong>Causal Signal Generation:</strong> Signals based on causal relationships, not correlations</li>
            <li><strong>Portfolio Optimization:</strong> CVaR-based optimization with causal constraints</li>
            <li><strong>Risk Management:</strong> Causal risk modeling and stress testing</li>
            <li><strong>Multi-Asset Support:</strong> Automatic asset discovery and rotation</li>
            <li><strong>Alternative Data Integration:</strong> On-chain, social, news data sources</li>
            <li><strong>Regime Adaptation:</strong> Automatically detects and adapts to market regime changes</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Philosophical Foundation</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <h3 className="font-serif text-xl mb-4">Causal vs. Correlational Trading</h3>
          <p className="leading-relaxed mb-4">
            Traditional quantitative trading systems rely on correlational patterns: "When X happens, Y tends to follow."
            This approach has critical limitations:
          </p>
          <ul className="space-y-2 mb-4">
            <li>• <strong>Regime Dependency:</strong> Correlations break down when market regimes change</li>
            <li>• <strong>Spurious Relationships:</strong> Many correlations are coincidental, not causal</li>
            <li>• <strong>Lack of Interpretability:</strong> It's unclear why a signal works</li>
            <li>• <strong>Overfitting Risk:</strong> Complex models can memorize patterns without understanding mechanisms</li>
          </ul>
          <p className="leading-relaxed mb-4">
            CRCA-Q addresses these issues by implementing causal reasoning based on Judea Pearl's framework:
          </p>
          <ul className="space-y-2">
            <li>• <strong>Structural Causal Models (SCMs):</strong> Represent market variables as nodes in a DAG</li>
            <li>• <strong>Do-Calculus:</strong> Reason about interventions ("What happens if we force sentiment to increase?")</li>
            <li>• <strong>Counterfactual Reasoning:</strong> Answers "What would have happened if..." questions</li>
            <li>• <strong>Confounder Identification:</strong> Distinguishes between direct causal effects and spurious correlations</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-serif">System Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Data Layer</h3>
            <p className="leading-relaxed">
              MarketDataClient for price data, AltDataClient for alternative data sources (on-chain,
              social sentiment, news, GitHub activity, exchange metrics).
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Signal Generation</h3>
            <p className="leading-relaxed">
              Hundreds of signals across multiple categories: time-series, volatility, liquidity,
              cross-sectional, relative value, regime, and meta-signals.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Causal Reasoning</h3>
            <p className="leading-relaxed">
              CausalEngine builds SCMs, SignalValidator validates signals using causal criteria,
              and RegimeDetector identifies market regimes.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Portfolio Optimization</h3>
            <p className="leading-relaxed">
              CVaR-based optimization with EWMA covariance estimation, multi-asset constraints,
              and risk parity position sizing.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Risk Management</h3>
            <p className="leading-relaxed">
              Multi-layer risk checks: position size limits, leverage constraints, correlation limits,
              volatility limits, drawdown protection, and circuit breakers.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-serif text-xl mb-3">Execution</h3>
            <p className="leading-relaxed">
              ExecutionEngine for trade execution, support for multiple exchanges (Kraken, Binance, Coinbase),
              and comprehensive backtesting with walk-forward analysis.
            </p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Integration with CR-CA</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <p className="leading-relaxed mb-4">
            QuantTradingAgent uses CRCAAgent internally for causal reasoning:
          </p>
          <CodeBlock code={`from branches.CRCA_Q import QuantTradingAgent
from CRCA import CRCAAgent

# QuantTradingAgent uses CRCAAgent internally for causal reasoning
agent = QuantTradingAgent(
    account_size=10000,
    model_name="gpt-4o-mini",
    use_crca_agent_heavily=True,
    crca_max_loops=5
)

# Run trading loop with causal reasoning
result = agent.run(
    task="Analyze market and generate trading signals",
    use_causal_validation=True
)`} language="python" />
        </div>
        <div className="card-light p-8 max-w-4xl mt-6">
          <p className="leading-relaxed mb-4">
            CRCA-Q can be integrated into CorporateSwarm for Investment Committee decisions:
          </p>
          <CodeBlock code={`from crca_cg.corposwarm import CorporateSwarm

swarm = CorporateSwarm(
    enable_crca_q=True,
    crca_q_config={
        'account_size': 1000000,
        'conservative_mode': True,
        'use_crca_agent_heavily': True
    }
)

# Investment Committee uses CRCA-Q
allocation = swarm.investment_committee.recommend_allocation()`} language="python" />
        </div>
      </section>

      <section>
        <h2 className="font-serif">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Causal Signal Generation</h3>
            <p className="leading-relaxed mb-4">
              Generate trading signals based on causal relationships rather than correlations,
              providing more robust predictions across market regimes.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• Causal validation of technical indicators</li>
              <li>• Regime-invariant signal generation</li>
              <li>• Structural consistency checks</li>
            </ul>
          </div>
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Portfolio Optimization</h3>
            <p className="leading-relaxed mb-4">
              CVaR-based portfolio optimization with causal constraints, enabling risk-aware
              capital allocation across multiple assets.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• Multi-asset portfolio optimization</li>
              <li>• Causal risk modeling</li>
              <li>• Dynamic asset rotation</li>
            </ul>
          </div>
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Market Analysis</h3>
            <p className="leading-relaxed mb-4">
              Understand why market movements occur using structural causal models, enabling
              interpretable trading decisions.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• Causal chain analysis</li>
              <li>• Counterfactual scenario exploration</li>
              <li>• Regime change detection</li>
            </ul>
          </div>
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-3">Trading Strategy Development</h3>
            <p className="leading-relaxed mb-4">
              Develop trading strategies with causal foundations, providing transparency and
              adaptability to changing market conditions.
            </p>
            <ul className="space-y-2 text-sm opacity-75">
              <li>• Strategy backtesting</li>
              <li>• Performance attribution</li>
              <li>• Risk-adjusted returns</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Installation</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <p className="leading-relaxed mb-4">
            Install CR-CA with trading dependencies:
          </p>
          <CodeBlock code="pip install crca[trading]" language="bash" className="mb-4" />
          <p className="leading-relaxed mb-4">
            This includes ccxt and web3 for exchange integration and blockchain data access.
          </p>
          <p className="leading-relaxed text-sm opacity-75">
            For alternative data sources, configure API keys in your <code>.env</code> file:
            KRAKEN_API_KEY, TWITTER_BEARER_TOKEN, ETHERSCAN_API_KEY, etc.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Examples</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <p className="leading-relaxed mb-4">
            The CR-CA repository includes comprehensive CRCA-Q documentation:
          </p>
          <ul className="space-y-2 mb-4">
            <li>• <code>docs/CRCA-Q.md</code> - Complete technical documentation</li>
            <li>• <code>branches/CRCA-Q.py</code> - Full implementation</li>
          </ul>
          <a 
            href="https://github.com/IlumCI/CR-CA/blob/main/docs/CRCA-Q.md" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-light font-medium"
          >
            View CRCA-Q documentation →
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
              Learn about the core CR-CA framework that powers CRCA-Q.
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
          For detailed CRCA-Q documentation, architecture diagrams, and implementation details,
          visit the GitHub repository.
        </p>
        <GitHubLink />
      </section>
    </>
  );
}

export default CrcaQ;

