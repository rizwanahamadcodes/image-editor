import Button, { ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useCanvas } from "@/context/useCanvas";
import { useToggle } from "@/hooks/useToggle";
import { useRef } from "react";
import {
    RiBringForward,
    RiBringToFront,
    RiSendBackward,
    RiSendToBack,
} from "react-icons/ri";

const PositionSetter = () => {
    const { canvas } = useCanvas();

    const setPosition = (
        whereTo: "forward" | "front" | "backward" | "back"
    ) => {
        const activeObject = canvas?.getActiveObject();
        if (!activeObject) {
            return;
        }
        switch (whereTo) {
            case "forward":
                activeObject.bringForward();
                break;
            case "front":
                activeObject.bringToFront();
                break;
            case "backward":
                activeObject.sendBackwards();
                break;
            case "back":
                activeObject.sendToBack();
                break;
            default:
                return;
        }
        canvas?.renderAll();
    };

    const { open, close, isOpen, toggle } = useToggle();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const buttonIconRef = useRef<HTMLButtonElement | null>(null);
    const positionSetterCore = () => {
        return (
            <div className="flex">
                <Button
                    colorScheme="gray-200"
                    regular
                    variant="outline"
                    size="sm"
                    className="!rounded-r-none"
                    onClick={() => {
                        setPosition("forward");
                    }}>
                    <ButtonIcon icon={RiBringForward} />
                </Button>
                <Button
                    colorScheme="gray-200"
                    regular
                    variant="outline"
                    size="sm"
                    className="!rounded-l-none !rounded-r-none !border-l-0"
                    onClick={() => {
                        setPosition("front");
                    }}>
                    <ButtonIcon icon={RiBringToFront} />
                </Button>
                <Button
                    colorScheme="gray-200"
                    regular
                    variant="outline"
                    size="sm"
                    className="!rounded-l-none !rounded-r-none !border-l-0"
                    onClick={() => {
                        setPosition("backward");
                    }}>
                    <ButtonIcon icon={RiSendBackward} />
                </Button>
                <Button
                    colorScheme="gray-200"
                    regular
                    variant="outline"
                    size="sm"
                    className="!rounded-l-none !border-l-0"
                    onClick={() => {
                        setPosition("back");
                    }}>
                    <ButtonIcon icon={RiSendToBack} />
                </Button>
            </div>
        );
    };
    return (
        <>
            <span className="hidden md:inline-block">
                {positionSetterCore()}
            </span>
            <div className="relative h-2 md:hidden">
                <PopOver
                    toggleButtonRefs={[buttonRef]}
                    isOpen={isOpen}
                    close={close}
                    className="right-0">
                    <div className="bg-white shadow border border-gray-100 rounded-0.375 mt-0.25 right-0 p-0.25">
                        {positionSetterCore()}
                    </div>
                </PopOver>
                <Button
                    variant="outline"
                    regular
                    size="sm"
                    colorScheme="gray-200"
                    buttonRef={buttonRef}
                    onClick={toggle}>
                    <ButtonIcon icon={RiBringForward} />
                </Button>
            </div>
        </>
    );
};

export default PositionSetter;
