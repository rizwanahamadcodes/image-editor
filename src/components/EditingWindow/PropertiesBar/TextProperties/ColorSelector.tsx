import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";
import clsx from "clsx";
import { MdOutlineFormatColorText } from "react-icons/md";

type ColorSelectorProps = {};

const ColorSelector = (props: ColorSelectorProps) => {
    const { textProperties, setTextProperties } = useTextProperties();
    const { canvas } = useCanvas();

    const handleColorSelectorChange = (color: string) => {
        setTextProperties({
            ...textProperties,
            color: color,
        });
        const activeObject = canvas?.getActiveObject();
        if (!activeObject || !activeObject.isType("textbox")) {
            return;
        }
        const activeTextObject = activeObject as fabric.Textbox;
        activeTextObject.set("fill", color);
        canvas?.renderAll();
    };

    return (
        <label
            className={clsx(
                "border border-gray-200 flex items-center justify-center rounded-0.25 px-0.25"
            )}>
            <MdOutlineFormatColorText className="text-1.5 mr-0.5" />
            <input
                onChange={(e) => handleColorSelectorChange(e.target.value)}
                type="color"
                className="w-1.75 h-1.75"
                value={textProperties.color as string}
            />
        </label>
    );
};

export default ColorSelector;
