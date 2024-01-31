import Button, { ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useActiveImageObject } from "@/context/useActiveImageObject";
import { useCanvas } from "@/context/useCanvas";
import { useToggle } from "@/hooks/useToggle";
import { useEffect, useRef, useState } from "react";
import { AiOutlineColumnHeight, AiOutlineColumnWidth } from "react-icons/ai";
import { FaLink, FaLinkSlash } from "react-icons/fa6";

const HeightWidthChanger = () => {
    const { activeImageObject, setActiveImageObject } = useActiveImageObject();
    const [height, setHeight] = useState<number>(
        activeImageObject.getScaledHeight() || 100
    );
    const [width, setWidth] = useState<number>(
        activeImageObject.getScaledWidth() || 100
    );
    const [aspectRatioLocked, setAspectRatioLocked] = useState<boolean>(true);
    const { canvas } = useCanvas();

    useEffect(() => {
        const scaledHeightFromActiveImageObject =
            activeImageObject.getScaledHeight();
        const scaledWidthFromActiveImageObject =
            activeImageObject.getScaledWidth();

        setHeight(scaledHeightFromActiveImageObject);
        setWidth(scaledWidthFromActiveImageObject);
    }, [activeImageObject]);

    useEffect(() => {
        const activeImageHeight = activeImageObject.getScaledHeight();
        const activeImageWidth = activeImageObject.getScaledWidth();
        const activeImageHeightByWidthRatio =
            activeImageHeight / activeImageWidth;
        const newWidth = height / activeImageHeightByWidthRatio;

        // const oldScaleY = activeImageObject.get("scaleY"); // activeHeight / height
        // hence
        const newScaleX = newWidth / (activeImageObject.width || newWidth);
        const newScaleY = height / (activeImageObject.height || height);

        if (aspectRatioLocked) {
            activeImageObject.set("scaleX", newScaleX);
            activeImageObject.set("scaleY", newScaleY);
        } else {
            activeImageObject.set("scaleY", newScaleY);
        }

        canvas?.renderAll();
    }, [height]);

    useEffect(() => {
        const activeImageWidth = activeImageObject.getScaledWidth();
        const activeImageHeight = activeImageObject.getScaledHeight();
        const activeImageWidthByHeightRatio =
            activeImageWidth / activeImageHeight;
        const newHeight = width / activeImageWidthByHeightRatio;

        const newScaleY = newHeight / (activeImageObject.height || newHeight);
        const newScaleX = width / (activeImageObject.width || width);

        if (aspectRatioLocked) {
            activeImageObject.set("scaleX", newScaleX);
            activeImageObject.set("scaleY", newScaleY);
        } else {
            activeImageObject.set("scaleX", newScaleX);
        }

        canvas?.renderAll();
    }, [width]);

    const handleHeightChange = (heightFromInput: number) => {
        setHeight(heightFromInput);
    };
    const handleWidthChange = (widthFromInput: number) => {
        setWidth(widthFromInput);
    };

    const handleAspectRatioButtonClick = () => {
        setAspectRatioLocked((prevAspectRatioLocked) => {
            return !prevAspectRatioLocked;
        });
    };

    const linkIconClasses = "text-gray-500 cursor-pointer hover:text-gray-700";

    const heightWidthChangerCore = () => {
        return (
            <div className="flex items-center">
                <div className="flex items-center h-2 overflow-hidden hover:border-gray-400 px-0.25 rounded-0.25 border-gray-200 border gap-0.25 group/dimensionGroup has-[:focus]:shadow-halo-gray-500">
                    <AiOutlineColumnHeight className="text-gray-500 text-1.25 group-hover/dimensionGroup:text-gray-700 group-has-[:focus]/dimensionGroup:text-gray-700" />
                    <input
                        type="number"
                        value={height.toFixed(2)}
                        className="text-gray-600 font-medium min-w-0 w-4 h-2 rounded-0.25 focus:outline-none px-0.25"
                        onChange={(e) => {
                            handleHeightChange(Number(e.target.value));
                        }}
                    />
                </div>
                <div
                    className="h-1.25 w-2 flex justify-center"
                    onClick={handleAspectRatioButtonClick}>
                    {aspectRatioLocked ? (
                        <FaLink className={linkIconClasses} />
                    ) : (
                        <FaLinkSlash className={linkIconClasses} />
                    )}
                </div>
                <div className="flex items-center h-2 overflow-hidden hover:border-gray-400 px-0.25 rounded-0.25 border-gray-200 border gap-0.25 group/dimensionGroup has-[:focus]:shadow-halo-gray-500">
                    <AiOutlineColumnWidth className="text-gray-500 text-1.25 group-hover/dimensionGroup:text-gray-700 group-has-[:focus]/dimensionGroup:text-gray-700" />
                    <input
                        type="number"
                        value={width.toFixed(2)}
                        className="text-gray-600 font-medium min-w-0 w-4 h-2 rounded-0.25 focus:outline-none px-0.25"
                        onChange={(e) => {
                            handleWidthChange(Number(e.target.value));
                        }}
                    />
                </div>
            </div>
        );
    };

    const { open, close, isOpen, toggle } = useToggle();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    return (
        <>
            <span className="hidden md:inline-block">
                {heightWidthChangerCore()}
            </span>
            <div className="relative h-2 md:hidden">
                <PopOver
                    toggleButtonRefs={[buttonRef]}
                    isOpen={isOpen}
                    close={close}
                    className="left-1/2 -translate-x-1/2">
                    <div className="bg-white shadow border border-gray-100 rounded-0.375 mt-0.25 right-0 p-0.25">
                        {heightWidthChangerCore()}
                    </div>
                </PopOver>
                <Button
                    variant="outline"
                    regular
                    size="sm"
                    colorScheme="gray-200"
                    buttonRef={buttonRef}
                    onClick={toggle}>
                    <ButtonIcon icon={AiOutlineColumnWidth} />
                </Button>
            </div>
        </>
    );
};

export default HeightWidthChanger;
