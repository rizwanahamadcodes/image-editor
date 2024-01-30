import { useActiveTextObject } from "@/context/useActiveTextObject";
import { useCanvas } from "@/context/useCanvas";
import clsx from "clsx";
import { Pattern, Gradient } from "fabric/fabric-impl";
import { useEffect, useState } from "react";
import { MdOutlineFormatColorText } from "react-icons/md";

type ColorSelectorProps = {};

const ColorSelector = (props: ColorSelectorProps) => {
    const { activeTextObject, setActiveTextObject } = useActiveTextObject();
    const [color, setColor] = useState<string | Pattern | Gradient | undefined>(
        activeTextObject.get("fill") || "black"
    );
    const { canvas } = useCanvas();

    useEffect(() => {
        const activeTextObjectColor = activeTextObject.get("fill");
        if (!activeTextObject) return;

        setColor(activeTextObjectColor);
    }, [activeTextObject]);

    useEffect(() => {
        activeTextObject.set("fill", color);
        canvas?.renderAll();
    }, [color]);

    const handleColorSelectorChange = (colorFromInput: string) => {
        setColor(colorFromInput);
    };

    return (
        <label
            className={clsx(
                "border border-gray-200 flex h-2 items-center justify-center rounded-0.25 px-0.25 cursor-pointer hover:border-gray-400"
            )}>
            <MdOutlineFormatColorText className="text-1.25 text-gray-500 mr-0.5" />
            <input
                onChange={(e) => handleColorSelectorChange(e.target.value)}
                type="color"
                className="w-1.5 h-1.5"
                value={color as string}
            />
        </label>
    );
};

export default ColorSelector;
