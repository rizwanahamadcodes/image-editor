import Canvas from "@/components/EditingWindow/CanvasRegion/Canvas";
import { useEffect, useRef } from "react";

type CanvasRegionProps = {
    zoomLevel: number;
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
    canvasParentRef: React.MutableRefObject<HTMLElement | null>;
};

const CanvasRegion = (props: CanvasRegionProps) => {
    const { zoomLevel, setZoomLevel, canvasParentRef } = props;

    return (
        <section
            ref={canvasParentRef}
            className="bg-gray-100 grow overflow-auto grid place-items-center">
            <Canvas zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
        </section>
    );
};

export default CanvasRegion;
