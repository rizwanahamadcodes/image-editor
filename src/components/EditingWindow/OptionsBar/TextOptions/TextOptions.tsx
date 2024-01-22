import ChangeFontSize from "@/components/EditingWindow/OptionsBar/TextOptions/ChangeFontSize";
import { useCanvas } from "@/context/useCanvas";
import { FontFamily, fontFamilies } from "@/data/fontFamilies";
import { fabric } from "fabric";
import { useEffect, useState } from "react";
import Select from "react-select";
import { BiBold } from "react-icons/bi";
import { RiItalic } from "react-icons/ri";
import { Gradient, Pattern } from "fabric/fabric-impl";
import clsx from "clsx";

type TextOptionsProps = {
    initialFontFamily: FontFamily;
    initialFontSize: number;
    color?: string | Pattern | Gradient;
    isBold: boolean;
    isItalic: boolean;
};

const TextOptions = (props: TextOptionsProps) => {
    const { initialFontFamily, initialFontSize, color, isBold, isItalic } =
        props;
    const [textProperties, setTextProperties] = useState({
        fontFamily: initialFontFamily,
        fontSize: initialFontSize,
        color: color,
        isBold: isBold,
        isItalic: isItalic,
    });

    const { canvas } = useCanvas();

    const setFontFamily = (fontFamily: FontFamily) => {
        //  it is important to import the WebFont here inline otherwise app breaks with window not defined error even if it's a client component
        const activeObject = canvas?.getActiveObject();
        if (!activeObject || !activeObject.isType("textbox")) {
            return;
        }

        const activeTextObject = activeObject as fabric.Textbox;
        const WebFont = require("webfontloader");
        WebFont.load({
            google: {
                families: [fontFamily.value],
            },

            active: () => {
                activeTextObject.set("fontFamily", fontFamily.value);
                canvas?.renderAll();
            },
        });
        setTextProperties({ ...textProperties, fontFamily: fontFamily });
    };

    useEffect(() => {
        setTextProperties({ ...textProperties, fontFamily: initialFontFamily });
    }, [initialFontFamily]);

    const toggleBold = () => {
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
    const toggleItalic = () => {
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
        <div className="flex gap-1">
            <Select
                options={fontFamilies}
                value={textProperties.fontFamily}
                className="w-10 h-2.25"
                onChange={(option) => {
                    if (!option) return;
                    setFontFamily(option);
                }}
                defaultValue={textProperties.fontFamily}
            />
            <ChangeFontSize initialFontSize={initialFontSize} />
            <button
                onClick={toggleBold}
                className={clsx(
                    "border border-gray-200 rounded-0.25 px-0.25",
                    textProperties.isBold
                        ? "bg-gray-100 border-gray-300 text-gray-600"
                        : ""
                )}>
                <BiBold className="text-1.5" />
            </button>
            <button
                onClick={toggleItalic}
                className={clsx(
                    "border border-gray-200 rounded-0.25 px-0.25",
                    textProperties.isItalic
                        ? "bg-gray-100 border-gray-300 text-gray-600"
                        : ""
                )}>
                <RiItalic className="text-1.5" />
            </button>
        </div>
    );
};

export default TextOptions;
