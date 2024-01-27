import { useCanvas } from "@/context/useCanvas";
import { useCurrentProject } from "@/context/useCurrentProject";
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";

type CanvasProps = {
    zoomLevel: number;
    setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
};

const Canvas = (props: CanvasProps) => {
    const { zoomLevel, setZoomLevel } = props;
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const { canvas, setCanvas } = useCanvas();
    const { project, setProject } = useCurrentProject();

    useEffect(() => {
        if (canvasRef.current) {
            const newCanvas = new fabric.Canvas(null, {
                width: project.canvasWidth,
                height: project.canvasHeight,
            });

            newCanvas.initialize(canvasRef.current);

            newCanvas?.setBackgroundColor("#fff", () => {
                console.log("background was set to white");
            });

            setCanvas(newCanvas);
        }
    }, [project.canvasHeight, project.canvasWidth]);

    useEffect(() => {
        const addToCanvas = () => {
            if (!canvas) {
                return;
            }

            setProject({ ...project, canvasObjects: canvas.getObjects() });
        };
        if (!canvas) return;
        canvas.on("object:modified", addToCanvas);
        canvas.on("object:added", addToCanvas);
    }, [canvas]);

    useEffect(() => {
        console.log(project);
    }, [project]);

    useEffect(() => {
        canvas?.setZoom(zoomLevel);
        canvas?.setHeight(project.canvasHeight * zoomLevel);
        canvas?.setWidth(project.canvasWidth * zoomLevel);
    }, [zoomLevel, canvas, project]);

    return (
        <canvas
            className="shrink-0 shadow-md shadow-black/[0.03]"
            ref={canvasRef}></canvas>
    );
};

export default Canvas;
