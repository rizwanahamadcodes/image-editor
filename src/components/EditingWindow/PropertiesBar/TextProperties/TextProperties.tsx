import { ActiveTextObjectContext } from "@/context/useActiveTextObject";
import { fabric } from "fabric";
import { useEffect, useState } from "react";
import PositionSetter from "../PositionSetter";
import AlignmentSelector from "./AlignmentSelector";
import BoldItalicUnderlineToggles from "./BoldItalicUnderlineToggles";
import ColorSelector from "./ColorSelector";
import FontFamilyAndSizeSelector from "./FontFamilyAndSizeSelector";
import TextResetterAndDeleter from "./TextResetterAndDeleter";

type TextPropertiesProps = {
    activeTextObject: fabric.Textbox;
};

const TextProperties = (props: TextPropertiesProps) => {
    const { activeTextObject: activeTextObjectFromPropertiesBar } = props;
    const [activeTextObject, setActiveTextObject] = useState(
        activeTextObjectFromPropertiesBar
    );

    useEffect(() => {
        setActiveTextObject(activeTextObjectFromPropertiesBar);
    }, [activeTextObjectFromPropertiesBar]);

    return (
        <ActiveTextObjectContext.Provider
            value={{
                activeTextObject: activeTextObject,
                setActiveTextObject: setActiveTextObject,
            }}>
            <div className="flex gap-1">
                <FontFamilyAndSizeSelector />
                <ColorSelector />
                <BoldItalicUnderlineToggles />
                <AlignmentSelector />
                <PositionSetter activeObject={activeTextObject} />
                <TextResetterAndDeleter />
            </div>
        </ActiveTextObjectContext.Provider>
    );
};

export default TextProperties;
