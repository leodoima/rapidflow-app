import { getNodesBounds, getViewportForBounds, type Node } from "@xyflow/react";
import { toPng } from "html-to-image";


function downloadImage(dataUrl: string) {
    const a = document.createElement('a');

    a.setAttribute('download', 'rapid-flow.png');
    a.setAttribute('href', dataUrl);
    a.click();
}

export default function exportFlowAsImage(nodes: Node[], viewportElement: HTMLElement) {

    const imageWidth = 1024;
    const imageHeight = 768;

    const nodesBounds = getNodesBounds(nodes);
    const viewport = getViewportForBounds(nodesBounds, imageWidth, imageHeight, 0.5, 2, 1);

    toPng(viewportElement, {
        backgroundColor: '#fff',
        width: imageWidth,
        height: imageHeight,
        style: {
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
            transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
        },
    }).then(downloadImage);
};

