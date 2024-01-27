import Button, { ButtonIcon } from "@/components/Button/Button";
import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";
import { FiMinus, FiPlus } from "react-icons/fi";

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
        <div className="flex">
            <Button
                regular
                colorScheme="gray-200"
                variant="outline"
                size="sm"
                className="!rounded-r-0"
                onClick={() => {
                    setFontSize(textProperties.fontSize - 1);
                }}>
                <ButtonIcon icon={FiMinus} />
            </Button>
            <input
                onChange={(e) => {
                    setFontSize(Number(e.target.value));
                }}
                type="number"
                className="text-center w-3 min-w-0 grow border-y border-y-gray-200 focus:ring focus:ring-offset-2 focus:ring-offset-white focus:ring-primary/50 focus:z-10 focus:outline-none focus:border-x focus:border-x-gray-200"
                value={textProperties.fontSize}
            />
            <Button
                regular
                colorScheme="gray-200"
                variant="outline"
                size="sm"
                className="!rounded-l-0"
                onClick={() => {
                    setFontSize(textProperties.fontSize + 1);
                }}>
                <ButtonIcon icon={FiPlus} />
            </Button>
        </div>
    );
};

export default FontSizeChanger;
