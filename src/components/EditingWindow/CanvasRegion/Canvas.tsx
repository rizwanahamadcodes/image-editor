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

        const { version, objects, ...otherProperties } = JSON.parse(
            activeProject.canvas
        );

        const newCanvas = new fabric.Canvas(canvasRef.current, {
            ...otherProperties,
        });

        fabric.Image.fromURL(
            "/images/projects/thumbnails/thumbnail_4.jpg",
            (bgImg) => {
                bgImg.scaleToWidth(newCanvas.getWidth());
                const centerX = newCanvas.getWidth() / 2;
                const centerY = newCanvas.getHeight() / 2;
                bgImg.set({
                    left: centerX - bgImg.getScaledWidth() / 2,
                    top: centerY - bgImg.getScaledHeight() / 2,
                });
                newCanvas.setBackgroundImage(bgImg, () => {});
                newCanvas.renderAll();
            }
        );

        newCanvas.loadFromJSON(JSON.parse(activeProject.canvas), () => {
            setCanvas(newCanvas);
        });

        const newRect = new fabric.Rect({
            height: 100,
            width: 100,
            backgroundColor: "black",
            opacity: 0.1,
        });

        newCanvas.add(newRect);
        newCanvas.renderAll();
    }, []);

    useEffect(() => {
        canvas?.setZoom(zoomLevel);
        const { version, objects, ...otherProperties } = JSON.parse(
            activeProject.canvas
        );
        const canvasHeight = otherProperties.height;
        const canvasWidth = otherProperties.width;
        canvas?.setHeight(canvasHeight * zoomLevel);
        canvas?.setWidth(canvasWidth * zoomLevel);
    }, [zoomLevel, canvas, activeProject]);

    return (
        <canvas
            className="shrink-0 shadow-md shadow-black/[0.03]"
            ref={canvasRef}></canvas>
    );
};

export default Canvas;
