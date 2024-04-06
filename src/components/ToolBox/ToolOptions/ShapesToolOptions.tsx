import { useCanvas } from "@/context/useCanvas";
import { fabric } from "fabric";

type ShapesToolOptionsProps = {};

const ShapesToolOptions = (props: ShapesToolOptionsProps) => {
    const {} = props;
    const { canvas } = useCanvas();

    const addRectangleToCanvas = () => {
        const newRect = new fabric.Rect({
            height: 100,
            width: 100,
            fill: "black",
            opacity: 1,
        });

        canvas?.add(newRect);
    };
    const addCircleToCanvas = () => {
        const newCircle = new fabric.Ellipse({
            rx: 50, // radiusX (half of the width)
            ry: 50, // radiusY (half of the height)
            fill: "black",
            opacity: 1,
        });

        canvas?.add(newCircle);
    };

    return (
        <div className="p-1 flex gap-1">
            <div
                className="h-3 w-3 bg-primary"
                onClick={() => {
                    addRectangleToCanvas();
                }}></div>
            <div
                className="rounded-full h-3 w-3 bg-primary"
                onClick={() => {
                    addCircleToCanvas();
                }}></div>
        </div>
    );
};

export default ShapesToolOptions;
