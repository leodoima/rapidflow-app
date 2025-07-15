import { addEdge, Background, Controls, MiniMap, ReactFlow, useEdgesState, useNodesState, type OnConnect } from '@xyflow/react'
import { useCallback } from 'react';
import colors from 'tailwindcss/colors';
import '@xyflow/react/dist/style.css';
import DownloadButton from './components/downloadButton';


const initialNodes = [
  { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
];
const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

function App() {

  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <DownloadButton />
        <Controls showInteractive={false} />
        <Background color={colors.zinc[50]} />

      </ReactFlow>
    </div>
  )
}

export default App
