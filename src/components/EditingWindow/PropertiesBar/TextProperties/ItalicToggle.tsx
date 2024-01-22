import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";
import clsx from "clsx";
import { RiItalic } from "react-icons/ri";

type ItalicToggleProps = {};

const ItalicToggle = (props: ItalicToggleProps) => {
    const { textProperties, setTextProperties } = useTextProperties();
    const { canvas } = useCanvas();

    const handleItalicToggleClick = () => {
        setTextProperties({
            ...textProperties,
            isItalic: !textProperties.isItalic,
        });
        const activeObject = canvas?.getActiveObject();
        if (!activeObject || !activeObject.isType("textbox")) {
            return;
        }
        const activeTextObject = activeObject as fabric.Textbox;

        if (activeTextObject.get("fontStyle") === "italic") {
            activeTextObject.set("fontStyle", "normal");
        } else {
            activeTextObject.set("fontStyle", "italic");
        }
        canvas?.renderAll();
    };

    return (
        <button
            onClick={handleItalicToggleClick}
            className={clsx(
                "border border-gray-200 rounded-0.25 px-0.25",
                textProperties.isItalic
                    ? "bg-gray-100 border-gray-300 text-gray-600"
                    : ""
            )}>
            <RiItalic className="text-1.5" />
        </button>
    );
};

export default ItalicToggle;
