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
            ...activeProject.canvasProperties,
            backgroundColor:
                activeProject.canvasProperties.backgroundColor ?? "#ffffff",
        });
        canvas?.add(...activeProject.canvasObjects);

        setCanvas(newCanvas);
    }, []);

    useEffect(() => {
        const addToCanvas = () => {
            if (!canvas) {
                return;
            }

            setActiveProject({
                ...activeProject,
                canvasObjects: canvas.getObjects(),
            });
        };
        if (!canvas) return;

        canvas.on("canvas:background-color:changed", () => {
            console.log("hey");
        });
        canvas.on("object:modified", addToCanvas);
        canvas.on("object:added", addToCanvas);
    }, [canvas]);

    useEffect(() => {
        canvas?.setZoom(zoomLevel);
        canvas?.setHeight(activeProject.canvasProperties.height * zoomLevel);
        canvas?.setWidth(activeProject.canvasProperties.width * zoomLevel);
    }, [zoomLevel, canvas, activeProject]);

    return (
        <canvas
            className="shrink-0 shadow-md shadow-black/[0.03]"
            ref={canvasRef}></canvas>
    );
};

export default Canvas;
