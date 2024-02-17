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

    return (
        <div className="p-1">
            <div
                className="h-3 w-3 bg-primary"
                onClick={() => {
                    addRectangleToCanvas();
                }}></div>
        </div>
    );
};

export default ShapesToolOptions;
