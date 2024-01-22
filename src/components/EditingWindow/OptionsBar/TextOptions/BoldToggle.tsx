import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";
import clsx from "clsx";
import { BiBold } from "react-icons/bi";

type BoldToggleProps = {};

const BoldToggle = (props: BoldToggleProps) => {
    const { textProperties, setTextProperties } = useTextProperties();
    const { canvas } = useCanvas();

    const handleBoldToggleClick = () => {
        setTextProperties({
            ...textProperties,
            isBold: !textProperties.isBold,
        });
        const activeObject = canvas?.getActiveObject();
        if (!activeObject || !activeObject.isType("textbox")) {
            return;
        }
        const activeTextObject = activeObject as fabric.Textbox;
        if (activeTextObject.get("fontWeight") === "bold") {
            activeTextObject.set("fontWeight", "normal");
        } else {
            activeTextObject.set("fontWeight", "bold");
        }
        canvas?.renderAll();
    };

    return (
        <button
            onClick={handleBoldToggleClick}
            className={clsx(
                "border border-gray-200 rounded-0.25 px-0.25",
                textProperties.isBold
                    ? "bg-gray-100 border-gray-300 text-gray-600"
                    : ""
            )}>
            <BiBold className="text-1.5" />
        </button>
    );
};

export default BoldToggle;
