import {
    ActiveTextboxAndPropertiesContext,
    TextboxPropertiesType,
} from "@/context/useActiveTextboxAndProperties";
import { fabric } from "fabric";
import { useEffect, useState } from "react";
import PositionSetter from "../PositionSetter";
import AlignmentSelector from "./AlignmentSelector";
import BoldItalicUnderlineToggles from "./BoldItalicUnderlineToggles";
import ColorSelector from "./ColorSelector";
import FontFamilyAndSizeSelector from "./FontFamilyAndSizeSelector";
import TextResetterAndDeleter from "./TextResetterAndDeleter";

type TextPropertiesProps = {
    activeTextbox: fabric.Textbox;
};

const TextProperties = (props: TextPropertiesProps) => {
    const { activeTextbox } = props;

    const getTextboxPropertiesFromTextBox = (
        textbox: fabric.Textbox
    ): TextboxPropertiesType => {
        return {
            fontFamily: textbox.get("fontFamily") || "Times New Roman",
            fontSize: textbox.get("fontSize") || 18,
            color: textbox.get("fill") || "#000000",
            alignment: textbox.get("textAlign") || "left",
            isBold: (textbox.get("fontWeight") || "normal") === "bold",
            isItalic: (textbox.get("fontStyle") || "normal") === "italic",
            isUnderlined: textbox.get("underline") || false,
        };
    };

    const [activeTextboxAndProperties, setActiveTextProperties] =
        useState<TextboxPropertiesType>(
            getTextboxPropertiesFromTextBox(activeTextbox)
        );

    const updateTextBoxPropertiesToActiveTextbox = () => {
        setActiveTextProperties(getTextboxPropertiesFromTextBox(activeTextbox));
    };

    useEffect(() => {
        updateTextBoxPropertiesToActiveTextbox();

        activeTextbox.on("modified", updateTextBoxPropertiesToActiveTextbox);

        return () => {
            activeTextbox.off(
                "modified",
                updateTextBoxPropertiesToActiveTextbox
            );
        };
    }, []);

    return (
        <ActiveTextboxAndPropertiesContext.Provider
            value={{
                activeTextbox: activeTextbox,
                activeTextboxProperties: activeTextboxAndProperties,
                setActiveTextboxProperties: setActiveTextProperties,
            }}>
            <div className="flex gap-1">
                <FontFamilyAndSizeSelector />
                <ColorSelector />
                <BoldItalicUnderlineToggles />
                <AlignmentSelector />
                <PositionSetter activeObject={activeTextbox} />
                <TextResetterAndDeleter />
            </div>
        </ActiveTextboxAndPropertiesContext.Provider>
    );
};

export default TextProperties;
