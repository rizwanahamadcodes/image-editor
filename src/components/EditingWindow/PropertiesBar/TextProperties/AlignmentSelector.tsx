import Button, { ButtonGroup, ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";
import { useToggle } from "@/hooks/useToggle";
import clsx from "clsx";
import { useRef } from "react";
import { TbAlignCenter, TbAlignLeft, TbAlignRight } from "react-icons/tb";

const AlignmentSelector = () => {
    const { textProperties, setTextProperties } = useTextProperties();
    const { canvas } = useCanvas();

    const setAlignment = (alignment: "left" | "right" | "center") => {
        const activeObject = canvas?.getActiveObject();
        if (!activeObject || !activeObject.isType("textbox")) {
            return;
        }
        const activeTextObject = activeObject as fabric.Textbox;

        activeTextObject.set("textAlign", alignment);
        canvas?.renderAll();

        setTextProperties({ ...textProperties, alignment: alignment });
    };

    const isActive = (alignment: string) => {
        return alignment === textProperties.alignment;
    };

    const { open, close, isOpen, toggle } = useToggle();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const buttonIconRef = useRef<HTMLButtonElement | null>(null);
    const alignmentSelectorCore = () => {
        return (
            <ButtonGroup>
                <Button
                    colorScheme="white"
                    regular
                    className="!rounded-r-none"
                    active={isActive("left")}
                    onClick={() => {
                        setAlignment("left");
                    }}>
                    <ButtonIcon icon={TbAlignLeft} />
                </Button>
                <Button
                    colorScheme="white"
                    regular
                    className="border-x border-gray-200 !rounded-0"
                    active={isActive("center")}
                    onClick={() => {
                        setAlignment("center");
                    }}>
                    <ButtonIcon icon={TbAlignCenter} />
                </Button>
                <Button
                    colorScheme="white"
                    regular
                    className="!rounded-l-none"
                    active={isActive("right")}
                    onClick={() => {
                        setAlignment("right");
                    }}>
                    <ButtonIcon icon={TbAlignLeft} />
                </Button>
            </ButtonGroup>
        );
    };
    return (
        <>
            <span className="hidden sm:inline-block">
                {alignmentSelectorCore()}
            </span>
            <div className="relative h-2 sm:hidden">
                <PopOver
                    toggleButtonRefs={[buttonRef]}
                    isOpen={isOpen}
                    close={close}
                    className="right-0 mt-0.5 shadow">
                    {alignmentSelectorCore()}
                </PopOver>
                <Button
                    variant="outline"
                    regular
                    colorScheme="gray-200"
                    btnRef={buttonRef}
                    onClick={toggle}>
                    <ButtonIcon
                        icon={() => {
                            switch (textProperties.alignment) {
                                case "left":
                                    return <TbAlignLeft />;
                                case "center":
                                    return <TbAlignCenter />;
                                case "right":
                                    return <TbAlignRight />;
                                default:
                                    return <TbAlignCenter />;
                            }
                        }}
                    />
                </Button>
            </div>
        </>
    );
};

export default AlignmentSelector;
