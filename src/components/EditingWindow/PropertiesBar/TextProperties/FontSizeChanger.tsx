import Button, { ButtonGroup, ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";
import { useToggle } from "@/hooks/useToggle";
import { useRef } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { TiMinus, TiPlug, TiPlus } from "react-icons/ti";
import { BiFontSize } from "react-icons/bi";

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
    const fontSizeChangerCore = () => {
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

    const { open, close, toggle, isOpen } = useToggle();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    return (
        <>
            <div className="hidden sm:block">{fontSizeChangerCore()}</div>
            <div className="flex sm:hidden gap-0.5 relative">
                <PopOver
                    isOpen={isOpen}
                    close={close}
                    className="left-0"
                    toggleButtonRefs={[buttonRef]}>
                    <div className="bg-white shadow border border-gray-100 rounded-0.375 mt-0.25 p-0.25">
                        {fontSizeChangerCore()}
                    </div>
                </PopOver>

                <Button
                    onClick={toggle}
                    regular
                    btnRef={buttonRef}
                    variant="outline"
                    colorScheme="gray-200">
                    <ButtonIcon icon={BiFontSize} />
                </Button>
            </div>
        </>
    );
};

export default FontSizeChanger;
