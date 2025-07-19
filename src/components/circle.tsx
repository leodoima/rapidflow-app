import { Handle, NodeResizer, Position, type NodeProps } from "@xyflow/react";


export function Circle({selected}: NodeProps) {
    return (
        <div className="bg-amber-300 rounded-full min-w-10 min-h-10 w-full h-full ">
            <NodeResizer
                minWidth={40}
                minHeight={40}
                isVisible={selected}
                lineClassName="border-violet-300"
                handleClassName="h-2 w-2 bg-white border-2 rounded border-amber-500"
            />

            <Handle id="top" type="source" position={Position.Top} className="-top-2 w-2 h-2 bg-amber-200 border-none" />
            <Handle id="left" type="source" position={Position.Left} className="-left-2 w-2 h-2 bg-amber-200 border-none" />
            <Handle id="right" type="source" position={Position.Right} className="-right-2 w-2 h-2 bg-amber-200 border-none" />
            <Handle id="bottom" type="source" position={Position.Bottom} className="-bottom-2 w-2 h-2 bg-amber-200 border-none" />
        </div>
    )
}