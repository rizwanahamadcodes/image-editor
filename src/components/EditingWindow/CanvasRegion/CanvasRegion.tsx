import Canvas from "@/components/EditingWindow/CanvasRegion/Canvas";
import { useEffect } from "react";

type CanvasRegionProps = {
    zoomLevel: number;
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
};

const CanvasRegion = (props: CanvasRegionProps) => {
    const { zoomLevel, setZoomLevel } = props;

    useEffect(() => {
        console.log(zoomLevel);
    }, [zoomLevel]);

    return (
        <section className="bg-gray-100 grow overflow-auto grid place-items-center shadow-inner">
            <Canvas zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
        </section>
    );
};

export default CanvasRegion;
