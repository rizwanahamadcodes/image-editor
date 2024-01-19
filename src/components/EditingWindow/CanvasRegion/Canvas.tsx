import { useCurrentProject } from "@/pages/projects/[projectId]/useCurrentProject";
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";

type CanvasProps = {};

const Canvas = (props: CanvasProps) => {
    const {} = props;
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
    const [zoomLevel, setZoomLevel] = useState(1);
    const currentProject = useCurrentProject();

    useEffect(() => {
        if (canvasRef.current) {
            const newCanvas = new fabric.Canvas(canvasRef.current, {
                width: currentProject.canvasWidth,
                height: currentProject.canvasHeight,
            });
            setCanvas(newCanvas);
        }
        console.log("i was run");
    }, []);

    useEffect(() => {
        canvas?.setZoom(zoomLevel);
        canvas?.setHeight(currentProject.canvasHeight * zoomLevel);
        canvas?.setWidth(currentProject.canvasWidth * zoomLevel);
    }, [zoomLevel, canvas]);

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
        <div className="relative bg-gray-50">
            <div>
                <canvas
                    className="bg-white transition-all border border-gray-100"
                    ref={canvasRef}></canvas>
            </div>
        </div>
    );
};

export default Canvas;
