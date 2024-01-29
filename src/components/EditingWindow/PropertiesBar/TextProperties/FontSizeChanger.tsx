import Button, { ButtonIcon } from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";
import { useActiveTextObject } from "@/context/useActiveTextObject";
import { FiMinus, FiPlus } from "react-icons/fi";
import { fabric } from "fabric";
import { useState } from "react";

type FontSizeChangerProps = {};

const FontSizeChanger = (props: FontSizeChangerProps) => {
    const [fontSizeChanged, setFontSizeChanged] = useState(true);

    const { activeTextObject, setActiveTextObject } = useActiveTextObject();
    const { canvas } = useCanvas();

    const setFontSize = (fontSize: number) => {
        activeTextObject.set("fontSize", fontSize);
        canvas?.renderAll();
        setFontSizeChanged((prevFontSizeChanged) => !prevFontSizeChanged);
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
                    const fontSize = activeTextObject.get("fontSize");
                    if (!fontSize) return;
                    setFontSize(fontSize - 1);
                }}>
                <ButtonIcon icon={FiMinus} />
            </Button>
            <input
                onChange={(e) => {
                    setFontSize(Number(e.target.value));
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
                    const fontSize = activeTextObject.get("fontSize");
                    if (!fontSize) return;
                    setFontSize(fontSize + 1);
                }}>
                <ButtonIcon icon={FiPlus} />
            </Button>
        </div>
    );
};

export default FontSizeChanger;
