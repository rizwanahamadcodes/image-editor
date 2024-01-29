import { TextPropertiesContext } from "@/context/useTextProperties";
import { FontFamily, fontFamilies } from "@/data/fontFamilies";
import { fabric } from "fabric";
import { Gradient, Pattern } from "fabric/fabric-impl";
import { useEffect, useState } from "react";
import PositionSetter from "../PositionSetter";
import AlignmentSelector from "./AlignmentSelector";
import BoldItalicUnderlineToggles from "./BoldItalicUnderlineToggles";
import ColorSelector from "./ColorSelector";
import FontFamilyAndSizeSelector from "./FontFamilyAndSizeSelector";
import TextResetterAndDeleter from "./TextResetterAndDeleter";

export type TextProperties = {
    fontFamily: FontFamily;
    fontSize: number;
    color?: string | Pattern | Gradient;
    isBold: boolean;
    isItalic: boolean;
    alignment: string;
    isUnderlined: boolean;
};

type TextPropertiesProps = {
    activeTextObject: fabric.Textbox;
};

const TextProperties = (props: TextPropertiesProps) => {
    const { activeTextObject } = props;
    const [textProperties, setTextProperties] = useState<TextProperties>({
        fontFamily: fontFamilies[0],
        fontSize: 12,
        color: "#000",
        isBold: false,
        isItalic: false,
        alignment: "left",
        isUnderlined: false,
    });

    useEffect(() => {
        const updateTextProperties = () => {
            const fontName = activeTextObject.get("fontFamily");

            let fontFamily = fontFamilies[0];

            if (fontName) {
                const foundFontFamily = fontFamilies.find(
                    (fontFamilyInList) => fontFamilyInList.value === fontName
                );

                if (foundFontFamily) {
                    fontFamily = foundFontFamily;
                }
            }

            const fontSize = activeTextObject.get("fontSize");
            const color = activeTextObject.get("fill");
            const isBold = activeTextObject.get("fontWeight") === "bold";
            const isItalic = activeTextObject.get("fontStyle") === "italic";
            const alignment = activeTextObject.get("textAlign");
            const isUnderlined = activeTextObject.underline;

            setTextProperties((prevTextProperties) => {
                return {
                    ...prevTextProperties,
                    fontFamily: fontFamily,
                    fontSize: fontSize || 12,
                    color: color,
                    isBold: isBold,
                    isItalic: isItalic,
                    alignment: alignment || "left",
                    isUnderlined: isUnderlined || false,
                };
            });
        };
        updateTextProperties();
    }, [activeTextObject]);

    return (
        <TextPropertiesContext.Provider
            value={{
                textProperties: textProperties,
                setTextProperties: setTextProperties,
            }}>
            <div className="flex gap-1">
                <FontFamilyAndSizeSelector />
                <ColorSelector />
                <BoldItalicUnderlineToggles activeObject={activeTextObject} />
                <AlignmentSelector />
                <PositionSetter />
                <TextResetterAndDeleter />
            </div>
        </TextPropertiesContext.Provider>
    );
};

export default TextProperties;
