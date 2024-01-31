import Button, { ButtonIcon } from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";
import { useActiveTextObject } from "@/context/useActiveTextboxAndProperties";
import { FiMinus, FiPlus } from "react-icons/fi";
import { fabric } from "fabric";
import { useEffect, useState } from "react";

type FontSizeChangerProps = {};

const FontSizeChanger = (props: FontSizeChangerProps) => {
    const { activeTextObject, setActiveTextObject } = useActiveTextObject();
    const [fontSize, setFontSize] = useState<number>(
        activeTextObject.get("fontSize") || 0
    );

    useEffect(() => {
        const fontSizeFromActiveTextObject = activeTextObject.get("fontSize");
        if (!fontSizeFromActiveTextObject) {
            return;
        }

        setFontSize(fontSizeFromActiveTextObject);
    }, [activeTextObject]);

    const { canvas } = useCanvas();

    useEffect(() => {
        activeTextObject.set("fontSize", fontSize);
        canvas?.renderAll();
    }, [fontSize]);

    const handleFontSizeChange = (fontSizeFromInput: number) => {
        setFontSize(fontSizeFromInput);
    };
    return (
        <div className="flex">
            <Button
                regular
                colorScheme="gray-200"
                variant="outline"
                size="sm"
                className="!rounded-r-0"
                onClick={() => {
                    setFontSize((prevFontSize) => prevFontSize - 1);
                }}>
                <ButtonIcon icon={FiMinus} />
            </Button>
            <input
                onChange={(e) => {
                    handleFontSizeChange(Number(e.target.value));
                }}
                type="number"
                className="text-center w-3 min-w-0 grow border-y border-y-gray-200 focus:ring focus:ring-offset-2 focus:ring-offset-white focus:ring-primary/50 focus:z-10 focus:outline-none focus:border-x focus:border-x-gray-200"
                value={activeTextObject.fontSize}
            />
            <Button
                regular
                colorScheme="gray-200"
                variant="outline"
                size="sm"
                className="!rounded-l-0"
                onClick={() => {
                    setFontSize((prevFontSize) => prevFontSize + 1);
                }}>
                <ButtonIcon icon={FiPlus} />
            </Button>
        </div>
    );
};

export default FontSizeChanger;
