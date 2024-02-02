import CanvasRegion from "@/components/EditingWindow/CanvasRegion/CanvasRegion";
import { PropertiesBar } from "@/components/EditingWindow/PropertiesBar/PropertiesBar";
import StatusBar from "@/components/EditingWindow/StatusBar/StatusBar";
import { useRef, useState } from "react";

type EditingWindowProps = {};

const EditingWindow = (props: EditingWindowProps) => {
    const {} = props;
    const [zoomLevel, setZoomLevel] = useState(1);

    const calculateZoomLevelWithinBounds = (newZoom: number): number => {
        const minZoom = 0.1;
        const maxZoom = 5;

        return Math.min(Math.max(Number(newZoom.toFixed(2)), minZoom), maxZoom);
    };
    const canvasParentRef = useRef<HTMLElement | null>(null);

    return (
        <main className="flex overflow-auto grow flex-col">
            <PropertiesBar />
            <CanvasRegion
                canvasParentRef={canvasParentRef}
                zoomLevel={zoomLevel}
                setZoomLevel={setZoomLevel}
            />
            <StatusBar
                canvasParentRef={canvasParentRef}
                zoomLevel={zoomLevel}
                setZoomLevel={setZoomLevel}
                calculateZoomLevelWithinBounds={calculateZoomLevelWithinBounds}
            />
        </main>
    );
};

export default EditingWindow;
