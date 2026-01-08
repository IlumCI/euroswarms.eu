function AlgorithmFlowchart({ algorithm, title }) {
  return (
    <div className="my-8">
      {title && <h4 className="font-serif text-lg mb-4">{title}</h4>}
      <div className="bg-bg border rounded-lg p-6">
        <pre className="text-sm font-mono text-fg whitespace-pre-wrap overflow-x-auto">
          {algorithm}
        </pre>
      </div>
    </div>
  );
}

export default AlgorithmFlowchart;

