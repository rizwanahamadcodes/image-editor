import { useActivePolygonAndProperties } from "@/context/useActivePolygonAndProperties";
import { useCanvas } from "@/context/useCanvas";
import clsx from "clsx";
import { MdOutlineFormatColorText } from "react-icons/md";

type ColorSelectorProps = {};

const ColorSelector = (props: ColorSelectorProps) => {
    const {
        activePolygon,
        activePolygonProperties,
        setActivePolygonProperties,
    } = useActivePolygonAndProperties();
    const { canvas } = useCanvas();

    const handleColorChange = (colorFromInput: string) => {
        setActivePolygonProperties({
            ...activePolygonProperties,
            color: colorFromInput,
        });

        activePolygon.set("fill", colorFromInput);
        canvas?.renderAll();
    };

    return (
        <label
            className={clsx(
                "border border-gray-200 flex h-2 items-center justify-center rounded-0.25 px-0.25 cursor-pointer hover:border-gray-400"
            )}>
            <MdOutlineFormatColorText className="text-1.25 text-gray-500 mr-0.5" />
            <input
                onChange={(e) => handleColorChange(e.target.value)}
                type="color"
                className="w-1.5 h-1.5"
                value={activePolygonProperties.color as string}
            />
        </label>
    );
};

export default ColorSelector;
