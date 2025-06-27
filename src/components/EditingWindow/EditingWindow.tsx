import CanvasRegion from "@/components/EditingWindow/CanvasRegion/CanvasRegion";
import StatusBar from "@/components/EditingWindow/StatusBar/StatusBar";
import { ToolBox } from "@/components/ToolBox/ToolBox";
import { PropertiesBarMode } from "@/pages/projects/[projectId]/edit";
import clsx from "clsx";
import { MutableRefObject, useRef, useState } from "react";

type EditingWindowProps = {
    showOptions: PropertiesBarMode;
    setShowOptions: React.Dispatch<React.SetStateAction<PropertiesBarMode>>;
    optionsButtonRef: MutableRefObject<HTMLButtonElement | null>;
};

const EditingWindow = (props: EditingWindowProps) => {
    const { showOptions, setShowOptions, optionsButtonRef } = props;
    const [zoomLevel, setZoomLevel] = useState(1);

    const calculateZoomLevelWithinBounds = (newZoom: number): number => {
        const minZoom = 0.1;
        const maxZoom = 5;

        return Math.min(Math.max(Number(newZoom.toFixed(2)), minZoom), maxZoom);
    };
    const canvasParentRef = useRef<HTMLElement | null>(null);

    return (
        <main
            className={clsx(
                "flex flex-row overflow-hidden grow",
                showOptions != "hidden" ? " gap-0.5" : ""
            )}>
            <ToolBox
                optionsButtonRef={optionsButtonRef}
                showOptions={showOptions}
                setShowOptions={setShowOptions}
            />
            <div className="flex flex-col grow overflow-auto gap-0.5">
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
