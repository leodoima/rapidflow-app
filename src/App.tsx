import { addEdge, Background, ConnectionMode, Controls, MiniMap, ReactFlow, useEdgesState, useNodesState, type OnConnect } from '@xyflow/react'
import { useCallback } from 'react';
import colors from 'tailwindcss/colors';
import '@xyflow/react/dist/style.css';
import DockStation from './components/dockStation';
import { Square } from './components/square';


const nodeTypes = {
  square: Square,
};

const initialNodes = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    data: { label: 'Add text' },
    position: { x: Math.random() * 400, y: Math.random() * 400 }
  }
]


function App() {

  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  return (
    <div className="w-screen h-screen">

      <ReactFlow
        fitView
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        connectionMode={ConnectionMode.Loose}
      >
        <MiniMap />
        <DockStation />
        <Controls showInteractive={false} />
        <Background color={colors.zinc[100]} gap={12} size={2} />
      </ReactFlow>

    </div>
  )
}

export default App
