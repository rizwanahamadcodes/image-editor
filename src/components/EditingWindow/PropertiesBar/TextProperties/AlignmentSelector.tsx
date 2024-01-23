import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";
import clsx from "clsx";
import { TbAlignCenter, TbAlignLeft, TbAlignRight } from "react-icons/tb";

const AlignmentSelector = () => {
    const { textProperties, setTextProperties } = useTextProperties();
    const { canvas } = useCanvas();

    const setAlignment = (alignment: "left" | "right" | "center") => {
        const activeObject = canvas?.getActiveObject();
        if (!activeObject || !activeObject.isType("textbox")) {
            return;
        }
        const activeTextObject = activeObject as fabric.Textbox;

        activeTextObject.set("textAlign", alignment);
        canvas?.renderAll();

        setTextProperties({ ...textProperties, alignment: alignment });
    };

    const isActive = (alignment: string) => {
        return alignment === textProperties.alignment;
    };

    return (
        <div className="border overflow-hidden border-gray-200 rounded-0.25 flex items-center">
            <button
                className={clsx(
                    "h-full px-0.5",
                    isActive("left") ? "bg-gray-100 border-gray-300" : ""
                )}
                onClick={() => {
                    setAlignment("left");
                }}>
                <TbAlignLeft className="text-1.25" />
            </button>
            <button
                className={clsx(
                    "h-full px-0.5 border-x border-x-gray-100",
                    isActive("center") ? "bg-gray-100 border-gray-300" : ""
                )}
                onClick={() => {
                    setAlignment("center");
                }}>
                <TbAlignCenter className="text-1.25" />
            </button>
            <button
                className={clsx(
                    "h-full px-0.5",
                    isActive("right") ? "bg-gray-100 border-gray-300" : ""
                )}
                onClick={() => {
                    setAlignment("right");
                }}>
                <TbAlignRight className="text-1.25" />
            </button>
        </div>
    );
};

export default AlignmentSelector;
