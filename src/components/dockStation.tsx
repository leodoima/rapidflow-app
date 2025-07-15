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



export default function DockStation() {
    const { getNodes } = useReactFlow();
    const viewportElement = document.querySelector('.react-flow__viewport');

    return (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50">
            <TooltipProvider>
                <Dock direction="bottom" className="gap-5 shadow-xl">
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <SquareIcon size={32} weight="fill" />
                            </TooltipTrigger>
                            <TooltipContent>
                                Square
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <CircleIcon size={32} weight="fill" />
                            </TooltipTrigger>
                            <TooltipContent>
                                Circle
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ChatCenteredDotsIcon size={32} weight="fill" />
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
                                <LinkSimpleIcon size={32} weight="fill" />
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
                                    weight="fill"
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
                                <HouseIcon size={32} weight="fill" />
                            </TooltipTrigger>
                            <TooltipContent>
                                Go to home
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>

                </Dock>
            </TooltipProvider>
        </div>
    );
}
