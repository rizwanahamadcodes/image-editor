import Button, { ButtonGroup, ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useCanvas } from "@/context/useCanvas";
import { useTextProperties } from "@/context/useTextProperties";
import { useToggle } from "@/hooks/useToggle";
import clsx from "clsx";
import { useRef } from "react";
import {
    RiBringForward,
    RiBringToFront,
    RiSendBackward,
    RiSendToBack,
} from "react-icons/ri";
import { TbAlignCenter, TbAlignLeft, TbAlignRight } from "react-icons/tb";

const PositionSetter = () => {
    const { textProperties, setTextProperties } = useTextProperties();
    const { canvas } = useCanvas();

    const setPosition = (
        whereTo: "forward" | "front" | "backward" | "back"
    ) => {
        const activeObject = canvas?.getActiveObject();
        if (!activeObject || !activeObject.isType("textbox")) {
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
        canvas?.requestRenderAll();
    };

    const { open, close, isOpen, toggle } = useToggle();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const buttonIconRef = useRef<HTMLButtonElement | null>(null);
    const positionSetterCore = () => {
        return (
            <ButtonGroup>
                <Button
                    colorScheme="white"
                    regular
                    className="!rounded-r-none"
                    onClick={() => {
                        setPosition("forward");
                    }}>
                    <ButtonIcon icon={RiBringForward} />
                </Button>
                <Button
                    colorScheme="white"
                    regular
                    className="border-x border-gray-200 !rounded-0"
                    onClick={() => {
                        setPosition("front");
                    }}>
                    <ButtonIcon icon={RiBringToFront} />
                </Button>
                <Button
                    colorScheme="white"
                    regular
                    className="border-r border-r-gray-200 !rounded-0"
                    onClick={() => {
                        setPosition("backward");
                    }}>
                    <ButtonIcon icon={RiSendBackward} />
                </Button>
                <Button
                    colorScheme="white"
                    regular
                    className="!rounded-l-none"
                    onClick={() => {
                        setPosition("back");
                    }}>
                    <ButtonIcon icon={RiSendToBack} />
                </Button>
            </ButtonGroup>
        );
    };
    return (
        <>
            <span className="hidden sm:inline-block">
                {positionSetterCore()}
            </span>
            <div className="relative h-2 sm:hidden">
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
                    colorScheme="gray-200"
                    btnRef={buttonRef}
                    onClick={toggle}>
                    <ButtonIcon icon={RiBringForward} />
                </Button>
            </div>
        </>
    );
};

export default PositionSetter;
