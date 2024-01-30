import Button, { ButtonIcon } from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";
import { useActiveTextObject } from "@/context/useActiveTextObject";
import clsx from "clsx";
import { RiItalic } from "react-icons/ri";
import { useEffect, useState } from "react";

type ItalicToggleProps = {};

const ItalicToggle = (props: ItalicToggleProps) => {
    const { activeTextObject } = useActiveTextObject();
    const [isItalic, setIsItalic] = useState<boolean>(
        (activeTextObject.get("fontStyle") || "normal") == "italic"
    );
    const { canvas } = useCanvas();

    useEffect(() => {
        const fontStyleFromActiveTextObject = activeTextObject.get("fontStyle");
        if (!fontStyleFromActiveTextObject) return;

        setIsItalic(fontStyleFromActiveTextObject === "italic");
    }, [activeTextObject]);

    useEffect(() => {
        activeTextObject.set("fontStyle", isItalic ? "italic" : "normal");
        canvas?.renderAll();
    }, [isItalic]);

    const handleItalicButtonClick = () => {
        setIsItalic((prevIsItalic) => !prevIsItalic);
    };

    return (
        <Button
            variant="outline"
            colorScheme="gray-200"
            regular
            size="sm"
            active={isItalic}
            onClick={handleItalicButtonClick}>
            <ButtonIcon icon={RiItalic} />
        </Button>
    );
};

export default ItalicToggle;
