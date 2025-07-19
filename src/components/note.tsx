import { NodeResizer, type NodeProps } from "@xyflow/react";


export function Note({ selected }: NodeProps) {
    return (
        <div className="bg-lime-200 rounded-xl w-full h-full min-h-24 min-w-32">
            <NodeResizer
                minWidth={128}
                minHeight={96}
                isVisible={selected}
                lineClassName="border-emerald-300"
                handleClassName="h-2 w-2 bg-white border-2 rounded border-emerald-500"
            />
        </div>
    )
}