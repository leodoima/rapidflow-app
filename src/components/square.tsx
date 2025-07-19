import { Handle, NodeResizer, Position, type NodeProps } from "@xyflow/react";


export function Square({ selected }: NodeProps) {
    return (
        <div className="bg-violet-500 rounded-xl w-full h-full min-h-16 min-w-16">
            <NodeResizer
                minWidth={64}
                minHeight={64}
                isVisible={selected}
                lineClassName="border-violet-300"
                handleClassName="h-2 w-2 bg-white border-2 rounded border-violet-500"
            />
            <Handle id="top" type="source" position={Position.Top} className="-top-2 w-2 h-2 bg-violet-200 border-none" />
            <Handle id="left" type="source" position={Position.Left} className="-left-2 w-2 h-2 bg-violet-200 border-none" />
            <Handle id="right" type="source" position={Position.Right} className="-right-2 w-2 h-2 bg-violet-200 border-none" />
            <Handle id="bottom" type="source" position={Position.Bottom} className="-bottom-2 w-2 h-2 bg-violet-200 border-none" />
        </div>
    )
}