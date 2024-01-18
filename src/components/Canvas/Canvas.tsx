import { useCurrentProject } from "@/pages/projects/[projectId]/useCurrentProject";
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";

type CanvasProps = {};

const Canvas = (props: CanvasProps) => {
    const {} = props;
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
    const currentProject = useCurrentProject();

    useEffect(() => {
        if (canvasRef.current) {
            const newCanvas = new fabric.Canvas(canvasRef.current, {
                height: currentProject.canvasHeight,
                width: currentProject.canvasWidth,
            });
            setCanvas(newCanvas);
        }
    }, [currentProject.canvasHeight, currentProject.canvasWidth]);

    return (
        <canvas ref={canvasRef} className="shadow">
            Canvas
        </canvas>
    );
};

export default Canvas;
