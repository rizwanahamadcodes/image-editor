import CanvasRegion from "@/components/EditingWindow/CanvasRegion/CanvasRegion";
import { PropertiesBar } from "@/components/EditingWindow/PropertiesBar/PropertiesBar";
import StatusBar from "@/components/EditingWindow/StatusBar/StatusBar";
import { useRef, useState } from "react";

type EditingWindowProps = {};

const EditingWindow = (props: EditingWindowProps) => {
    const {} = props;
    const [zoomLevel, setZoomLevel] = useState(1);
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
            />
        </main>
    );
};

export default EditingWindow;
