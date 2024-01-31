import Button, { ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useCanvas } from "@/context/useCanvas";
import { useActiveTextObject } from "@/context/useActiveTextboxAndProperties";
import { useToggle } from "@/hooks/useToggle";
import { useEffect, useRef, useState } from "react";
import { TbAlignCenter, TbAlignLeft, TbAlignRight } from "react-icons/tb";

const AlignmentSelector = () => {
    const { activeTextObject } = useActiveTextObject();
    const { canvas } = useCanvas();
    const [alignment, setAlignment] = useState<string>(
        activeTextObject.get("textAlign") || "left"
    );

    useEffect(() => {
        const alignmentFromActiveTextObject = activeTextObject.get("textAlign");
        if (!alignmentFromActiveTextObject) return;

        setAlignment(alignmentFromActiveTextObject);
    }, [activeTextObject]);

    useEffect(() => {
        activeTextObject.set("textAlign", alignment);
        canvas?.renderAll();
    }, [alignment]);

    const handleAlignmentChange = (
        alignmentFromInput: "left" | "right" | "center"
    ) => {
        setAlignment(alignmentFromInput);
    };

    const isActive = (alignmentFromInput: string) => {
        return alignment === alignmentFromInput;
    };

    const { open, close, isOpen, toggle } = useToggle();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const buttonIconRef = useRef<HTMLButtonElement | null>(null);
    const alignmentSelectorCore = () => {
        return (
            <div className="flex">
                <Button
                    colorScheme="gray-200"
                    regular
                    variant="outline"
                    size="sm"
                    className="!rounded-r-none"
                    active={isActive("left")}
                    onClick={() => {
                        handleAlignmentChange("left");
                    }}>
                    <ButtonIcon icon={TbAlignLeft} />
                </Button>
                <Button
                    colorScheme="gray-200"
                    regular
                    variant="outline"
                    size="sm"
                    className="!rounded-r-none !rounded-l-none !border-l-0"
                    active={isActive("center")}
                    onClick={() => {
                        handleAlignmentChange("center");
                    }}>
                    <ButtonIcon icon={TbAlignCenter} />
                </Button>
                <Button
                    colorScheme="gray-200"
                    regular
                    variant="outline"
                    size="sm"
                    className="!rounded-l-none !border-l-0"
                    active={isActive("right")}
                    onClick={() => {
                        handleAlignmentChange("right");
                    }}>
                    <ButtonIcon icon={TbAlignLeft} />
                </Button>
            </div>
        );
    };
    return (
        <>
            <span className="hidden md:inline-block">
                {alignmentSelectorCore()}
            </span>
            <div className="relative h-2 md:hidden">
                <PopOver
                    toggleButtonRefs={[buttonRef]}
                    isOpen={isOpen}
                    close={close}
                    className="right-0">
                    <div className="bg-white shadow border border-gray-100 rounded-0.375 mt-0.25 right-0 p-0.25">
                        {alignmentSelectorCore()}
                    </div>
                </PopOver>
                <Button
                    variant="outline"
                    regular
                    size="sm"
                    colorScheme="gray-200"
                    buttonRef={buttonRef}
                    onClick={toggle}>
                    <ButtonIcon
                        icon={() => {
                            switch (alignment) {
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
