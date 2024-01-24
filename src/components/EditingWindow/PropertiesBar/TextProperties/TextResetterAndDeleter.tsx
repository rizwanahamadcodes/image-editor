import Button, { ButtonGroup, ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";
import { useToggle } from "@/hooks/useToggle";
import clsx from "clsx";
import { useRef } from "react";
import { TbAlignCenter, TbAlignLeft, TbAlignRight } from "react-icons/tb";
import DeleteObject from "../ImageProperties/DeleteObject";
import TextResetter from "./TextResetter";
import { IoReloadSharp } from "react-icons/io5";

const TextResetterAndDeleter = () => {
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
    const textResetterAndDeleterCore = () => {
        return (
            <div className="flex gap-0.25">
                <DeleteObject />
                <TextResetter />
            </div>
        );
    };
    return (
        <>
            <span className="hidden sm:inline-block">
                {textResetterAndDeleterCore()}
            </span>
            <div className="relative h-2 sm:hidden">
                <PopOver
                    toggleButtonRefs={[buttonRef]}
                    isOpen={isOpen}
                    close={close}
                    className="right-0">
                    <div className="bg-white shadow border border-gray-100 rounded-0.375 mt-0.25 right-0 p-0.25">
                        {textResetterAndDeleterCore()}
                    </div>
                </PopOver>
                <Button
                    variant="outline"
                    regular
                    colorScheme="gray-200"
                    btnRef={buttonRef}
                    onClick={toggle}>
                    <ButtonIcon icon={IoReloadSharp} />
                </Button>
            </div>
        </>
    );
};

export default TextResetterAndDeleter;
