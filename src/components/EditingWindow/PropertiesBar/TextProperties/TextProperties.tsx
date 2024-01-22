import FontFamilySelector from "@/components/EditingWindow/PropertiesBar/TextProperties/FontFamilySelector";
import FontSizeChanger from "@/components/EditingWindow/PropertiesBar/TextProperties/FontSizeChanger";
import { TextPropertiesContext } from "@/context/useTextProperties";
import { FontFamily, fontFamilies } from "@/data/fontFamilies";
import { fabric } from "fabric";
import { Gradient, Pattern } from "fabric/fabric-impl";
import { useEffect, useState } from "react";
import BoldToggle from "./BoldToggle";
import ItalicToggle from "./ItalicToggle";

export type TextProperties = {
    fontFamily: FontFamily;
    fontSize: number;
    color?: string | Pattern | Gradient;
    isBold: boolean;
    isItalic: boolean;
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

            setTextProperties((prevTextProperties) => {
                return {
                    ...prevTextProperties,
                    fontFamily: fontFamily,
                    fontSize: fontSize || 12,
                    color: color,
                    isBold: isBold,
                    isItalic: isItalic,
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
                <FontFamilySelector />
                <FontSizeChanger />
                <BoldToggle />
                <ItalicToggle />
            </div>
        </TextPropertiesContext.Provider>
    );
};

export default TextProperties;
