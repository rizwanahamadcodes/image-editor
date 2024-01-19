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
    const currentProject = useCurrentProject();

    useEffect(() => {
        if (canvasRef.current) {
            const newCanvas = new fabric.Canvas(canvasRef.current, {
                width: currentProject.canvasWidth,
                height: currentProject.canvasHeight,
            });
            setCanvas(newCanvas);
        }
    }, [currentProject]);

    useEffect(() => {
        canvas?.setZoom(zoomLevel);
        canvas?.setHeight(currentProject.canvasHeight * zoomLevel);
        canvas?.setWidth(currentProject.canvasWidth * zoomLevel);
        console.log("i was run");
    }, [zoomLevel, canvas, currentProject]);

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

    return (
        <canvas
            className="shrink-0 shadow-md shadow-black/[0.03]"
            ref={canvasRef}></canvas>
    );
};

export default Canvas;
