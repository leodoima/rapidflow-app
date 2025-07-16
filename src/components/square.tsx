import { Handle, Position } from "@xyflow/react";


export function Square() {
    return (
        <div className="w-20 h-20 bg-violet-500 rounded-xl ">
            <Handle id="top" type="source" position={Position.Top} className="-top-2 w-2 h-2 bg-violet-200 border-none" />
            <Handle id="left" type="source" position={Position.Left} className="-left-2 w-2 h-2 bg-violet-200 border-none" />
            <Handle id="right" type="source" position={Position.Right} className="-right-2 w-2 h-2 bg-violet-200 border-none" />
            <Handle id="bottom" type="source" position={Position.Bottom} className="-bottom-2 w-2 h-2 bg-violet-200 border-none" />
        </div>
    )
}