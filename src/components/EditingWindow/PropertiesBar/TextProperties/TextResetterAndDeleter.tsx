import Button, { ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";
import { useToggle } from "@/hooks/useToggle";
import { useRef } from "react";
import { IoReloadSharp } from "react-icons/io5";
import DeleteObject from "../ImageProperties/DeleteObject";
import TextResetter from "./TextResetter";

const TextResetterAndDeleter = () => {
    const { textProperties, setTextProperties } = useTextProperties();
    const { canvas } = useCanvas();

    const { close, isOpen, toggle } = useToggle();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
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