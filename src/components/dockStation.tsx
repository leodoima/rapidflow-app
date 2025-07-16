import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ChatCenteredDotsIcon, CircleIcon, HouseIcon, ImageIcon, LinkSimpleIcon, SquareIcon } from "@phosphor-icons/react";
import exportFlowAsImage from "@/functions/exportFlowAsImage";
import { useReactFlow } from "@xyflow/react";
import createNode from "@/functions/createNode";



export default function DockStation() {
    const { getNodes, setNodes } = useReactFlow();
    const viewportElement = document.querySelector('.react-flow__viewport');

    function handleCreateNode(type: string) {
        const node = createNode(type);
        setNodes((prevNodes) => [...prevNodes, node]);
    }

    return (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50">
            <TooltipProvider>
                <Dock direction="bottom" className="gap-5 shadow-xl border-2">
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <SquareIcon size={32} weight="duotone" onClick={() => handleCreateNode('square')} />
                            </TooltipTrigger>
                            <TooltipContent>
                                Square
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <CircleIcon size={32} weight="duotone" />
                            </TooltipTrigger>
                            <TooltipContent>
                                Circle
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ChatCenteredDotsIcon size={32} weight="duotone" />
                            </TooltipTrigger>
                            <TooltipContent>
                                Text
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>

                    <Separator orientation="vertical" className="h-full" />

                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <LinkSimpleIcon size={32} weight="duotone" />
                            </TooltipTrigger>
                            <TooltipContent>
                                Copy link
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ImageIcon
                                    size={32}
                                    weight="duotone"
                                    onClick={() => {
                                        if (viewportElement instanceof HTMLElement) {
                                            exportFlowAsImage(getNodes(), viewportElement);
                                        }
                                    }}
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                Download image
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>

                    <Separator orientation="vertical" className="h-full py-2" />

                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <HouseIcon size={32} weight="duotone" />
                            </TooltipTrigger>
                            <TooltipContent>
                                Go home
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>

                </Dock>
            </TooltipProvider>
        </div>
    );
}
