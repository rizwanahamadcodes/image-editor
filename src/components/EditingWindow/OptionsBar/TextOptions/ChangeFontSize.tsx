import { useCanvas } from "@/context/useCanvas";
import { useEffect, useState } from "react";

type ChangeFontSizeProps = {
    initialFontSize: number;
};

const ChangeFontSize = (props: ChangeFontSizeProps) => {
    const { initialFontSize } = props;
    const { canvas } = useCanvas();
    const [fontSize, setFontSize] = useState(initialFontSize);

    useEffect(() => {
        const activeObject = canvas?.getActiveObject() as fabric.Textbox;
        if (activeObject) {
            activeObject.set("fontSize", fontSize);
            canvas?.renderAll();
        }
    }, [fontSize]);

    return (
        <div className="flex w-7">
            <button
                className="text-gray-400 h-2.25 text-1.5 px-0.5 rounded-l-0.25 border border-gray-200 z-10"
                onClick={() => {
                    setFontSize((prevFontSize) => prevFontSize - 1);
                }}>
                -
            </button>
            <input
                onChange={(e) => {
                    setFontSize(Number(e.target.value));
                }}
                type="text"
                className="text-center min-w-0 grow border-y border-y-gray-200 focus:outline-primary"
                value={fontSize}
            />
            <button
                className="text-gray-400 h-2.25 text-1.5 px-0.5 rounded-r-0.25 border border-gray-200"
                onClick={() => {
                    setFontSize((prevFontSize) => prevFontSize + 1);
                }}>
                +
            </button>
        </div>
    );
};

export default ChangeFontSize;
