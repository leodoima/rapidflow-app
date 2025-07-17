import { BaseEdge, EdgeLabelRenderer, type EdgeProps, getSmoothStepPath } from '@xyflow/react';
import { useState } from 'react';

const DefaultEdge = ({ id, data, selected, ...props }: EdgeProps) => {
    const [edgePath, labelX, labelY] = getSmoothStepPath(props);

    const [label, setLabel] = useState('');

    return (
        <>
            <BaseEdge id={id} path={edgePath} markerEnd={props.markerEnd} />

            <EdgeLabelRenderer>
                <div
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        padding: 10,
                        borderRadius: 5,
                        fontSize: 8,
                        fontWeight: 700,
                    }}
                    className={`nodrag nopan ${label !== '' ? 'bg-white' : 'bg-transparent'} pointer-events-auto flex items-center justify-center rounded px-2 py-1`}
                >
                    <input
                        type="text"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        placeholder="Text"
                        autoCorrect="off"
                        spellCheck={false}
                        autoCapitalize="none"
                        className={`nodrag nopan pointer-events-auto bg-transparent focus:outline-none text-center ${label === '' && !selected ? 'text-transparent' : 'bg-white text-gray-600'
                            }`}
                        style={{ width: `${(label.length || 8)}ch` }}
                    />

                </div>
            </EdgeLabelRenderer>
        </>
    );
};

export default DefaultEdge;