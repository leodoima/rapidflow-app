import { Panel, useReactFlow, getNodesBounds, getViewportForBounds } from '@xyflow/react';
import { toPng } from 'html-to-image';
import { Button } from './ui/button';


function downloadImage(dataUrl: string) {
    const a = document.createElement('a');

    a.setAttribute('download', 'reactflow.png');
    a.setAttribute('href', dataUrl);
    a.click();
}

const imageWidth = 1024;
const imageHeight = 768;

export default function DownloadButton() {
    const { getNodes } = useReactFlow();
    const onClick = () => {

        const nodesBounds = getNodesBounds(getNodes());
        const viewport = getViewportForBounds(nodesBounds, imageWidth, imageHeight, 0.5, 2, 1);

        const viewportElement = document.querySelector('.react-flow__viewport');
        if (viewportElement instanceof HTMLElement) {
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
        }
    };

    return (
        <Panel position="top-right">
            <Button className="download-btn xy-theme__button" onClick={onClick}>
                Download Image
            </Button>
        </Panel>
    );
}