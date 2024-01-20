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
            setCanvas(newCanvas);
        }
    }, [project]);

    useEffect(() => {
        canvas?.setZoom(zoomLevel);
        canvas?.setHeight(project.canvasHeight * zoomLevel);
        canvas?.setWidth(project.canvasWidth * zoomLevel);
        console.log("i was run");
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

    return (
        <canvas
            className="shrink-0 shadow-md shadow-black/[0.03]"
            ref={canvasRef}></canvas>
    );
};

export default Canvas;
