import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";

type FontSizeChangerProps = {};

const FontSizeChanger = (props: FontSizeChangerProps) => {
    const { textProperties, setTextProperties } = useTextProperties();
    const { canvas } = useCanvas();

    const setFontSize = (fontSize: number) => {
        const activeObject = canvas?.getActiveObject();
        if (!activeObject || !activeObject.isType("textbox")) {
            return;
        }
        const activeTextObject = activeObject as fabric.Textbox;
        activeTextObject.set("fontSize", fontSize);

        setTextProperties({ ...textProperties, fontSize: fontSize });
        canvas?.renderAll();
    };

    return (
        <div className="flex w-7">
            <button
                className="text-gray-400 h-2.25 text-1.5 px-0.5 rounded-l-0.25 border border-gray-200 z-10"
                onClick={() => {
                    setFontSize(textProperties.fontSize - 1);
                }}>
                -
            </button>
            <input
                onChange={(e) => {
                    setFontSize(Number(e.target.value));
                }}
                type="number"
                className="text-center min-w-0 grow border-y border-y-gray-200 focus:outline-primary"
                value={textProperties.fontSize}
            />
            <button
                className="text-gray-400 h-2.25 text-1.5 px-0.5 rounded-r-0.25 border border-gray-200"
                onClick={() => {
                    setFontSize(textProperties.fontSize + 1);
                }}>
                +
            </button>
        </div>
    );
};

export default FontSizeChanger;