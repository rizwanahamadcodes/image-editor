import ChangeFontSize from "@/components/EditingWindow/OptionsBar/TextOptions/ChangeFontSize";
import { useCanvas } from "@/context/useCanvas";
import { FontFamily, fontFamilies } from "@/data/fontFamilies";
import { fabric } from "fabric";
import { useEffect, useState } from "react";
import Select from "react-select";

type TextOptionsProps = {
    initialFontFamily: FontFamily;
    initialFontSize: number;
};

const TextOptions = (props: TextOptionsProps) => {
    const { initialFontFamily, initialFontSize } = props;
    const [selectedFontFamily, setSelectedFontFamily] =
        useState<FontFamily>(initialFontFamily);

    const { canvas } = useCanvas();

    const setFontFamily = (fontFamily: FontFamily) => {
        //  it is important to import the WebFont here inline otherwise app breaks with window not defined error even if it's a client component
        const WebFont = require("webfontloader");
        WebFont.load({
            google: {
                families: [fontFamily.value],
            },
            active: () => {
                (canvas?.getActiveObject() as fabric.Textbox).set(
                    "fontFamily",
                    fontFamily.value
                );
                (
                    canvas?.getActiveObject() as fabric.Textbox
                ).canvas?.renderAll();
            },
        });
        setSelectedFontFamily(fontFamily);
    };

    useEffect(() => {
        setSelectedFontFamily(initialFontFamily);
    }, [initialFontFamily]);

    return (
        <div className="flex gap-1">
            <Select
                options={fontFamilies}
                value={selectedFontFamily}
                className="min-w-10 h-2.25"
                onChange={(option) => {
                    if (!option) return;
                    setFontFamily(option);
                }}
                defaultValue={initialFontFamily}
            />
            {initialFontSize}
            <ChangeFontSize initialFontSize={initialFontSize} />
        </div>
    );
};

export default TextOptions;
