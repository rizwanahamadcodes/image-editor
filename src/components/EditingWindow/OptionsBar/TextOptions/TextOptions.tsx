import { useCanvas } from "@/context/useCanvas";
import { FontFamily, fontFamilies } from "@/data/fontFamilies";
import { fabric } from "fabric";
import { useEffect, useState } from "react";
import Select from "react-select";
import ChangeFontSize from "@/components/EditingWindow/OptionsBar/TextOptions/ChangeFontSize";

const TextOptions = () => {
    const [selectedFontFamily, setSelectedFontFamily] = useState<FontFamily>(
        fontFamilies[0]
    );
    const { canvas } = useCanvas();

    useEffect(() => {
        const activeObject = canvas?.getActiveObject() as fabric.Textbox;
        if (activeObject) {
            const foundFontFamily = fontFamilies.find(
                (fontFamily) =>
                    fontFamily.value === activeObject.get("fontFamily")
            );

            if (foundFontFamily) {
                setSelectedFontFamily(foundFontFamily);
            }
        }
    }, []);

    useEffect(() => {
        // it is important to import the WebFont here inline otherwise app breaks with window not defined error even if it's a client component
        const WebFont = require("webfontloader");
        WebFont.load({
            google: {
                families: [selectedFontFamily.value],
            },
            active: () => {
                (canvas?.getActiveObject() as fabric.Textbox).set(
                    "fontFamily",
                    selectedFontFamily.value
                );
                (
                    canvas?.getActiveObject() as fabric.Textbox
                ).canvas?.renderAll();
            },
        });
    }, [selectedFontFamily]);

    const changeFontFamily = (fontFamily: string) => {};

    return (
        <div className="flex gap-1">
            <Select
                defaultValue={fontFamilies[0]}
                options={fontFamilies}
                className="min-w-10 h-2.25"
                onChange={(option) => {
                    if (!option) return;
                    setSelectedFontFamily(option);
                }}
            />
            <ChangeFontSize />
        </div>
    );
};

export default TextOptions;
