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
          requires Python 3.8+ and can be installed via pip or from source.
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="font-serif">Requirements</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <h3 className="font-serif text-xl mb-4">System Requirements</h3>
          <ul className="space-y-3">
            <li><strong>Python:</strong> 3.8 or higher</li>
            <li><strong>Operating System:</strong> Linux, macOS, or Windows</li>
            <li><strong>Memory:</strong> 4GB RAM minimum (8GB recommended)</li>
            <li><strong>Storage:</strong> 500MB for installation</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Installation Methods</h2>
        
        <div className="space-y-6 mt-6">
          <div className="card-light p-8">
            <h3 className="font-serif text-xl mb-4">Method 1: Install from PyPI (Recommended)</h3>
            <CodeBlock code="pip install cr-ca" language="bash" className="mb-4" />
            <p className="leading-relaxed">
              This will install the latest stable release of CR-CA along with all required dependencies.
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
              For development or to use the latest features, install in editable mode:
            </p>
            <CodeBlock code="pip install -e ." language="bash" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Dependencies</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <p className="leading-relaxed mb-4">
            CR-CA requires the following key dependencies (automatically installed with pip):
          </p>
          <ul className="space-y-2">
            <li><strong>rustworkx:</strong> Graph algorithms and data structures</li>
            <li><strong>litellm:</strong> LLM integration and API management</li>
            <li><strong>numpy:</strong> Numerical computations</li>
            <li><strong>pandas:</strong> Data manipulation and analysis</li>
            <li><strong>scipy:</strong> Scientific computing</li>
            <li><strong>loguru:</strong> Logging framework</li>
          </ul>
          <p className="leading-relaxed mt-4 text-sm opacity-75">
            Optional dependencies for advanced features (MCP, async operations) are available
            but not required for basic usage.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-serif">Configuration</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <h3 className="font-serif text-xl mb-4">Environment Variables</h3>
          <p className="leading-relaxed mb-4">
            Set your LLM API key as an environment variable:
          </p>
          <CodeBlock code="export OPENAI_API_KEY=your_key_here" language="bash" className="mb-4" />
          <p className="leading-relaxed text-sm opacity-75">
            Alternatively, create a <code>.env</code> file in your project directory with:
          </p>
          <CodeBlock code="OPENAI_API_KEY=your_key_here" language="bash" className="mt-2" />
        </div>
      </section>

      <section>
        <h2 className="font-serif">Verification</h2>
        <div className="card-light p-8 max-w-4xl mt-6">
          <p className="leading-relaxed mb-4">
            Verify your installation by running a simple test:
          </p>
          <CodeBlock code={`python -c "from CRCA import CRCAAgent; print('CR-CA installed successfully!')"`} language="python" />
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

