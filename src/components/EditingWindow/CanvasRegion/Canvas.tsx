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
    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
    const { project, setProject } = useCurrentProject();

    useEffect(() => {
        if (canvasRef.current) {
            const newCanvas = new fabric.Canvas(canvasRef.current, {
                width: project.canvasWidth,
                height: project.canvasHeight,
            });

            const newCanvasBackground = new fabric.Rect({
                width: project.canvasWidth,
                height: project.canvasHeight,
                selectable: false,
                hasControls: false,
                fill: "#fff",
            });

            newCanvas.add(newCanvasBackground);
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
    }, [canvas]);

    useEffect(() => {
        canvas?.setZoom(zoomLevel);
        canvas?.setHeight(project.canvasHeight * zoomLevel);
        canvas?.setWidth(project.canvasWidth * zoomLevel);
    }, [zoomLevel, canvas, project]);

    useEffect(() => {
        const fabricText: fabric.Textbox = new fabric.Textbox("text", {
            fontSize: 30,
            fontFamily: "Arial",
            editable: false,
            charSpacing: 1000,
            left: 0,
            top: 0,
            fill: "#000",
        });
        canvas?.add(fabricText);
    }, [canvas]);

    useEffect(() => {
        console.log(project);
    }, [project]);

    return (
        <canvas
            className="shrink-0 shadow-md shadow-black/[0.03]"
            ref={canvasRef}></canvas>
    );
};

export default Canvas;
