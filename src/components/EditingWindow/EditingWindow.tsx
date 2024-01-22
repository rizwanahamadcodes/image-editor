import CanvasRegion from "@/components/EditingWindow/CanvasRegion/CanvasRegion";
import { PropertiesBar } from "@/components/EditingWindow/PropertiesBar/PropertiesBar";
import StatusBar from "@/components/EditingWindow/StatusBar/StatusBar";
import { useState } from "react";

type EditingWindowProps = {};

const EditingWindow = (props: EditingWindowProps) => {
    const {} = props;
    const [zoomLevel, setZoomLevel] = useState(1);

    return (
        <main className="flex overflow-auto grow flex-col">
            <PropertiesBar />
            <CanvasRegion zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
            <StatusBar zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
        </main>
    );
};

export default EditingWindow;
