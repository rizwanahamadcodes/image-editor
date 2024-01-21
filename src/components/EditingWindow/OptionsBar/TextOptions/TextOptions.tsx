import { useCanvas } from "@/context/useCanvas";
import { FontFamily, fontFamilies } from "@/data/fontFamilies";
import { fabric } from "fabric";
import { useEffect, useState } from "react";
import Select from "react-select";
import ChangeFontSize from "@/components/EditingWindow/OptionsBar/TextOptions/ChangeFontSize";

const TextOptions = () => {
    const [activeObjectProperties, setActiveObjectProperties] = useState<{
        fontFamily: FontFamily | null;
        fontSize: number;
    }>({
        fontFamily: fontFamilies[0],
        fontSize: 12,
    });

    const { canvas } = useCanvas();

    const getFontFamilyFromFontName = (fontName: string) => {
        return fontFamilies.find((fontFamily) => fontFamily.value === fontName);
    };

    const getFontFamily = () => {
        if (canvas) {
            const activeObject = canvas.getActiveObject();
            if (activeObject?.isType("textbox")) {
                const activeTextObject = activeObject as fabric.Textbox;
                const fontName = activeTextObject.get("fontFamily");
                if (fontName) {
                    return getFontFamilyFromFontName(fontName);
                }
            }
        }
    };

    useEffect(() => {
        const setActiveObjectFontFamily = (
            activeTextObject: fabric.Textbox
        ) => {
            const fontName = activeTextObject.get("fontFamily");
            if (fontName) {
                const fontFamily = getFontFamilyFromFontName(fontName);
                if (fontFamily) {
                    setActiveObjectProperties((prevProperties) => ({
                        ...prevProperties,
                        fontFamily: fontFamily,
                    }));
                    console.log(fontFamily, activeObjectProperties.fontFamily);
                }
            }
        };
        const setActiveObjectFontSize = (activeTextObject: fabric.Textbox) => {
            const fontSize = activeTextObject.get("fontSize");
            if (fontSize) {
                setActiveObjectProperties((prevProperties) => ({
                    ...prevProperties,
                    fontSize: fontSize,
                }));
            }
        };

        if (canvas) {
            const activeObject = canvas.getActiveObject();

            if (activeObject?.isType("textbox")) {
                const activeTextObject = activeObject as fabric.Textbox;
                setActiveObjectFontFamily(activeTextObject);
                setActiveObjectFontSize(activeTextObject);
            }
        }
    }, []);

    useEffect(() => {
        //  it is important to import the WebFont here inline otherwise app breaks with window not defined error even if it's a client component
        const activeFontFamily = activeObjectProperties.fontFamily;
        if (activeFontFamily) {
            const WebFont = require("webfontloader");
            WebFont.load({
                google: {
                    families: [activeFontFamily.value],
                },
                active: () => {
                    (canvas?.getActiveObject() as fabric.Textbox).set(
                        "fontFamily",
                        activeFontFamily.value
                    );
                    (
                        canvas?.getActiveObject() as fabric.Textbox
                    ).canvas?.renderAll();
                },
            });
        }

        console.log(activeObjectProperties.fontFamily);
    }, [activeObjectProperties.fontFamily]);

    return (
        <div className="flex gap-1">
            <Select
                options={fontFamilies}
                className="min-w-10 h-2.25"
                onChange={(option) => {
                    if (!option) return;
                    setActiveObjectProperties({
                        ...activeObjectProperties,
                        fontFamily: option,
                    });
                }}
                defaultValue={getFontFamily()}
            />
            {activeObjectProperties.fontSize}
            <ChangeFontSize />
        </div>
    );
};

export default TextOptions;
