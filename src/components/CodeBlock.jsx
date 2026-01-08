import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock({ code, language = 'python', className = '' }) {
  try {
    return (
      <div className={`rounded overflow-hidden ${className}`}>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1rem',
            fontSize: '0.875rem',
            lineHeight: '1.5',
            borderRadius: '0.25rem',
          }}
          showLineNumbers={false}
        >
          {code || ''}
        </SyntaxHighlighter>
      </div>
    );
  } catch (error) {
    console.error('CodeBlock error:', error);
    return (
      <div className={`rounded overflow-hidden ${className} bg-bg border p-4`}>
        <pre className="text-sm font-mono text-fg whitespace-pre-wrap overflow-x-auto">
          {code || ''}
        </pre>
      </div>
    );
  }
}

export default CodeBlock;

