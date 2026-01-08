import { Link } from 'react-router-dom';
import GitHubLink from '../../components/GitHubLink';
import CodeBlock from '../../components/CodeBlock';

function CrcaInstallation() {
  return (
    <>
      <section>
        <h1 className="font-serif">CR-CA Installation Guide</h1>
        <p className="text-lg leading-relaxed max-w-4xl">
          Get started with CR-CA by following these installation instructions. The framework
          requires Python 3.10+ and can be installed via pip, from source, or using Docker.
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Requirements</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <h3 className="font-serif text-xl mb-4">System Requirements</h3>
          <ul className="space-y-3">
            <li><strong>Python:</strong> 3.10 or higher</li>
            <li><strong>Operating System:</strong> Linux, macOS, or Windows</li>
            <li><strong>Memory:</strong> 4GB RAM minimum (8GB recommended)</li>
            <li><strong>Storage:</strong> 500MB for installation</li>
            <li><strong>pip:</strong> Package manager (included with Python)</li>
            <li><strong>Git:</strong> Optional, for cloning the repository</li>
            <li><strong>Docker:</strong> Optional, for containerized deployment</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Installation Methods</h2>
        
        <div className="space-y-6 mt-6">
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-4">Method 1: Install from PyPI (Recommended)</h3>
            <CodeBlock code="pip install crca" language="bash" className="mb-4" />
            <p className="leading-relaxed">
              This will install the latest stable release of CR-CA (v1.4.0) along with all required dependencies.
            </p>
          </div>

          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-4">Method 2: Install from Source</h3>
            <div className="space-y-4">
              <div>
                <p className="mb-2 font-medium">Clone the repository:</p>
                <CodeBlock code="git clone https://github.com/IlumCI/CR-CA.git" language="bash" />
              </div>
              <div>
                <p className="mb-2 font-medium">Navigate to the directory:</p>
                <CodeBlock code="cd CR-CA" language="bash" />
              </div>
              <div>
                <p className="mb-2 font-medium">Install dependencies:</p>
                <CodeBlock code="pip install -r requirements.txt" language="bash" />
              </div>
            </div>
          </div>

          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-4">Method 3: Development Installation</h3>
            <p className="leading-relaxed mb-4">
              For development or to use the latest features, install in editable mode with development dependencies:
            </p>
            <CodeBlock code="pip install -e \".[dev]\"" language="bash" />
            <p className="leading-relaxed mt-4 text-sm opacity-75">
              This includes development tools like pytest, black, mypy, and ruff.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Dependencies</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <h3 className="font-serif text-xl mb-4">Core Dependencies</h3>
          <p className="leading-relaxed mb-4">
            CR-CA requires the following key dependencies (automatically installed with pip):
          </p>
          <ul className="space-y-2 mb-6">
            <li><strong>numpy:</strong> Numerical computations</li>
            <li><strong>pandas:</strong> Data manipulation and analysis</li>
            <li><strong>scipy:</strong> Scientific computing</li>
            <li><strong>rustworkx:</strong> Graph algorithms and data structures</li>
            <li><strong>networkx:</strong> Graph algorithms</li>
            <li><strong>dowhy:</strong> Causal inference</li>
            <li><strong>optuna:</strong> Hyperparameter optimization</li>
            <li><strong>torch:</strong> Deep learning framework</li>
            <li><strong>scikit-learn:</strong> Machine learning utilities</li>
            <li><strong>litellm:</strong> LLM integration and API management</li>
            <li><strong>swarms:</strong> Multi-agent systems</li>
            <li><strong>loguru:</strong> Logging framework</li>
            <li><strong>pydantic:</strong> Data validation</li>
            <li><strong>mcp:</strong> Model Context Protocol</li>
            <li><strong>openai:</strong> OpenAI API client</li>
          </ul>
          
          <h3 className="font-serif text-xl mb-4 mt-6">Optional Dependencies</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium mb-2">For Policy Engine:</p>
              <CodeBlock code="pip install crca[policy-engine]" language="bash" />
              <p className="text-sm opacity-75 mt-2">Includes: cvxpy, ruptures, psutil</p>
            </div>
            <div>
              <p className="font-medium mb-2">For CRCA-CG (TUI):</p>
              <CodeBlock code="pip install crca[tui]" language="bash" />
              <p className="text-sm opacity-75 mt-2">Includes: rich</p>
            </div>
            <div>
              <p className="font-medium mb-2">For CRCA-Q (Trading):</p>
              <CodeBlock code="pip install crca[trading]" language="bash" />
              <p className="text-sm opacity-75 mt-2">Includes: ccxt, web3</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Configuration</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <h3 className="font-serif text-xl mb-4">Environment Variables</h3>
          <p className="leading-relaxed mb-4">
            Create a <code>.env</code> file in your project root with required API keys:
          </p>
          <CodeBlock code={`# Required for LLM functionality
OPENAI_API_KEY=your_openai_api_key_here

# Optional: For CRCA-Q trading
KRAKEN_API_KEY=your_kraken_key_here
KRAKEN_API_SECRET=your_kraken_secret_here

# Optional: For alternative data sources
TWITTER_BEARER_TOKEN=your_twitter_token_here
ETHERSCAN_API_KEY=your_etherscan_key_here
THEGRAPH_API_KEY=your_thegraph_key_here

# Optional: For MCP servers
MCP_SERVER_URL=http://localhost:8000
MCP_API_KEY=your_mcp_api_key_here`} language="bash" className="mb-4" />
          <p className="leading-relaxed text-sm opacity-75">
            Alternatively, set environment variables directly:
          </p>
          <CodeBlock code="export OPENAI_API_KEY=your_key_here" language="bash" className="mt-2" />
        </div>
      </section>

      <section>
        <h2 className="font-serif">Docker Setup (Optional)</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <p className="leading-relaxed mb-4">
            For containerized deployment, you can use Docker. Create a <code>Dockerfile</code>:
          </p>
          <CodeBlock code={`FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \\
    gcc \\
    g++ \\
    && rm -rf /var/lib/apt/lists/*

# Copy requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Install policy engine dependencies (optional)
RUN pip install cvxpy ruptures psutil

# Copy application
COPY . .

# Set environment variables
ENV PYTHONUNBUFFERED=1

# Run application
CMD ["python", "-m", "CRCA"]`} language="dockerfile" className="mb-4" />
          <p className="leading-relaxed text-sm opacity-75">
            For Docker Compose, create a <code>docker-compose.yml</code> file with service configuration.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Verification</h2>
        <div className="space-y-6 mt-6">
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-4">Basic Verification</h3>
            <p className="leading-relaxed mb-4">
              Verify core CR-CA installation:
            </p>
            <CodeBlock code={`from CRCA import CRCAAgent

agent = CRCAAgent(model_name="gpt-4o-mini")
print("✓ CR-CA installed successfully!")`} language="python" />
          </div>

          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-4">Verify All Modules</h3>
            <p className="leading-relaxed mb-4">
              Test all available modules:
            </p>
            <CodeBlock code={`# Test core
from CRCA import CRCAAgent
agent = CRCAAgent(model_name="gpt-4o-mini")
print("✓ Core CRCA verified")

# Test CRCA-SD
try:
    from crca_sd import StateVector
    print("✓ CRCA-SD verified")
except ImportError:
    print("✗ CRCA-SD not available")

# Test CRCA-CG
try:
    from crca_cg.corposwarm import CorporateSwarm
    print("✓ CRCA-CG verified")
except ImportError:
    print("✗ CRCA-CG not available")

# Test Policy Engine
from schemas.policy import DoctrineV1
from utils.ledger import Ledger
print("✓ Policy Engine verified")`} language="python" />
          </div>

          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-4">Full Functionality Test</h3>
            <p className="leading-relaxed mb-4">
              Test automatic variable extraction and causal analysis:
            </p>
            <CodeBlock code={`from dotenv import load_dotenv
from CRCA import CRCAAgent

load_dotenv()

agent = CRCAAgent(
    model_name="gpt-4o-mini",
    max_loops=3,
    agent_max_loops=3,
    use_crca_tools=True,
    enable_batch_predict=True,
)

task = "Why do large software projects collapse despite adequate funding?"
result = agent.run(task)
print(result.get("causal_analysis", ""))`} language="python" />
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Link to="/crca/examples" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3">Try Examples</h3>
            <p className="leading-relaxed mb-4">
              Explore code examples and tutorials to learn how to use CR-CA.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View examples →
            </span>
          </Link>
          <Link to="/crca/documentation" className="card p-8 block group">
            <h3 className="font-serif text-2xl mb-3">Read Documentation</h3>
            <p className="leading-relaxed mb-4">
              Comprehensive API reference and architecture documentation.
            </p>
            <span className="text-yellow-300 text-sm font-medium group-hover:text-white">
              View documentation →
            </span>
          </Link>
        </div>
      </section>

      <section className="text-center">
        <p className="text-lg leading-relaxed mb-6">
          For the latest installation instructions and troubleshooting, visit the GitHub repository.
        </p>
        <GitHubLink />
      </section>
    </>
  );
}

export default CrcaInstallation;

