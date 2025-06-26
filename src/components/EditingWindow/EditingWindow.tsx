import CanvasRegion from "@/components/EditingWindow/CanvasRegion/CanvasRegion";
import StatusBar from "@/components/EditingWindow/StatusBar/StatusBar";
import { ToolBox } from "@/components/ToolBox/ToolBox";
import { useRef, useState } from "react";

type EditingWindowProps = {
    showOptions: boolean;
    setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditingWindow = (props: EditingWindowProps) => {
    const { showOptions, setShowOptions } = props;
    const [zoomLevel, setZoomLevel] = useState(1);

    const calculateZoomLevelWithinBounds = (newZoom: number): number => {
        const minZoom = 0.1;
        const maxZoom = 5;

        return Math.min(Math.max(Number(newZoom.toFixed(2)), minZoom), maxZoom);
    };
    const canvasParentRef = useRef<HTMLElement | null>(null);

    return (
        <main className="flex gap-0.5 overflow-auto grow flex-row">
            <ToolBox
                showOptions={showOptions}
                setShowOptions={setShowOptions}
            />
            <div className="w-full flex flex-col">
                <CanvasRegion
                    canvasParentRef={canvasParentRef}
                    zoomLevel={zoomLevel}
                    setZoomLevel={setZoomLevel}
                />
                <StatusBar
                    canvasParentRef={canvasParentRef}
                    zoomLevel={zoomLevel}
                    setZoomLevel={setZoomLevel}
                    calculateZoomLevelWithinBounds={
                        calculateZoomLevelWithinBounds
                    }
                />
            </div>
        </main>
    );
};

export default EditingWindow;
