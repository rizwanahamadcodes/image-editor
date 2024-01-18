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
                height: currentProject.canvasHeight,
                width: currentProject.canvasWidth,
            });
            setCanvas(newCanvas);
        }
    }, []);

    useEffect(() => {
        canvas?.setZoom(zoomLevel);
        canvas?.setHeight(currentProject.canvasHeight * zoomLevel);
        canvas?.setWidth(currentProject.canvasWidth * zoomLevel);
    }, [zoomLevel, canvas]);

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

    return (
        <div className="relative">
            <div>
                <button
                    onClick={() => {
                        setZoomLevel((prevZoom) => prevZoom - 0.1);
                    }}>
                    Zoom out
                </button>{" "}
                <button
                    onClick={() => {
                        setZoomLevel(1);
                    }}>
                    Snap to 100
                </button>
                <button
                    onClick={() => {
                        setZoomLevel((prevZoom) => prevZoom + 0.1);
                    }}>
                    Zoom in
                </button>
            </div>
            <div>
                {/* this div is for the border */}
                <div
                    style={{
                        height: `${currentProject.canvasHeight * zoomLevel}px`,
                        width: `${currentProject.canvasWidth * zoomLevel}px`,
                    }}
                    className="inline-block border border-gray-100">
                    <canvas ref={canvasRef}>Canvas</canvas>
                </div>
            </div>
        </div>
    );
};

export default Canvas;
