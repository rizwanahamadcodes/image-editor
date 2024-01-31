import {
    TextboxPropertiesType,
    useActiveTextboxAndProperties,
} from "@/context/useActiveTextboxAndProperties";
import { useCanvas } from "@/context/useCanvas";
import clsx from "clsx";
import { Pattern, Gradient } from "fabric/fabric-impl";
import { useEffect, useState } from "react";
import { MdOutlineFormatColorText } from "react-icons/md";

type ColorSelectorProps = {};

const ColorSelector = (props: ColorSelectorProps) => {
    const {
        activeTextbox,
        activeTextboxProperties,
        setActiveTextboxProperties,
    } = useActiveTextboxAndProperties();
    const { canvas } = useCanvas();

    const handleColorChange = (colorFromInput: string) => {
        setActiveTextboxProperties({
            ...activeTextboxProperties,
            color: colorFromInput,
        });

        activeTextbox.set("fill", colorFromInput);
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
                value={activeTextboxProperties.color as string}
            />
        </label>
    );
};

export default ColorSelector;
