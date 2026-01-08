function CausalGraph({ nodes, edges, title = 'Causal Graph' }) {
  // Simple SVG-based causal graph visualization
  const width = 600;
  const height = 400;
  const nodeRadius = 20;
  const nodePositions = {};

  // Simple circular layout
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 3;
  const angleStep = (2 * Math.PI) / nodes.length;

  nodes.forEach((node, index) => {
    const angle = index * angleStep;
    nodePositions[node] = {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });

  return (
    <div className="my-8">
      {title && <h4 className="font-serif text-lg mb-4">{title}</h4>}
      <div className="bg-bg border rounded-lg p-4 overflow-x-auto">
        <svg width={width} height={height} className="mx-auto">
          {/* Draw edges */}
          {edges.map(([source, target], index) => {
            const sourcePos = nodePositions[source];
            const targetPos = nodePositions[target];
            if (!sourcePos || !targetPos) return null;

            // Calculate arrow position
            const dx = targetPos.x - sourcePos.x;
            const dy = targetPos.y - sourcePos.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const unitX = dx / dist;
            const unitY = dy / dist;

            const startX = sourcePos.x + unitX * nodeRadius;
            const startY = sourcePos.y + unitY * nodeRadius;
            const endX = targetPos.x - unitX * nodeRadius;
            const endY = targetPos.y - unitY * nodeRadius;

            return (
              <g key={`edge-${index}`}>
                <line
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  stroke="#b8d4e8"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
              </g>
            );
          })}

          {/* Arrow marker definition */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 10 3, 0 6" fill="#b8d4e8" />
            </marker>
          </defs>

          {/* Draw nodes */}
          {nodes.map((node, index) => {
            const pos = nodePositions[node];
            if (!pos) return null;

            return (
              <g key={`node-${index}`}>
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={nodeRadius}
                  fill="#1a365d"
                  stroke="#b8d4e8"
                  strokeWidth="2"
                />
                <text
                  x={pos.x}
                  y={pos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#f0f9ff"
                  fontSize="12"
                  fontWeight="500"
                >
                  {node.length > 8 ? node.substring(0, 8) : node}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default CausalGraph;

