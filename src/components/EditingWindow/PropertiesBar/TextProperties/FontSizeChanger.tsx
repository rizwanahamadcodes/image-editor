import Button, { ButtonGroup, ButtonIcon } from "@/components/Button/Button";
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
        <ButtonGroup>
            <Button
                regular
                colorScheme="white"
                variant="solid"
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
                className="text-center w-3 min-w-0 grow border-x border-x-gray-200 focus:shadow-halo-gray-500 focus:outline-none focus:z-10"
                value={textProperties.fontSize}
            />
            <Button
                className="!rounded-l-0"
                regular
                colorScheme="white"
                variant="solid"
                onClick={() => {
                    setFontSize(textProperties.fontSize + 1);
                }}>
                <ButtonIcon icon={FiPlus} />
            </Button>
        </ButtonGroup>
    );
};

export default FontSizeChanger;
