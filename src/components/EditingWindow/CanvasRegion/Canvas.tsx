import { useActiveProject } from "@/context/useActiveProject";
import { useCanvas } from "@/context/useCanvas";
import { useEffect, useRef } from "react";
import { fabric } from "fabric";

type CanvasProps = {
    zoomLevel: number;
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
};

const Canvas = (props: CanvasProps) => {
    const { zoomLevel, setZoomLevel } = props;
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const { canvas, setCanvas } = useCanvas();
    const { activeProject, setActiveProject } = useActiveProject();

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }

        const newCanvas = new fabric.Canvas(canvasRef.current, {
            height: 200,
            width: 200,
            backgroundColor: "#ffffff",
        });
        newCanvas.loadFromJSON(JSON.parse(activeProject.canvas), () => {
            setCanvas(newCanvas);
        });
    }, []);

    useEffect(() => {
        canvas?.setZoom(zoomLevel);
        // get the height and the width from active project,
        // that will be a static reference,
        // right now you are refering that which you are changing
        const canvasHeight = canvas?.getHeight();
        const canvasWidth = canvas?.getWidth();
        canvas?.setHeight(200 * zoomLevel);
        canvas?.setWidth(200 * zoomLevel);
    }, [zoomLevel, canvas, activeProject]);

    return (
        <canvas
            className="shrink-0 shadow-md shadow-black/[0.03]"
            ref={canvasRef}></canvas>
    );
};

export default Canvas;
