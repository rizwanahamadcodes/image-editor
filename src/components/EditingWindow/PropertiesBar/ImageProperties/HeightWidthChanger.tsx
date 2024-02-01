import Button, { ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useActiveImageAndProperties } from "@/context/useActiveImageAndProperties";
import { useCanvas } from "@/context/useCanvas";
import { useToggle } from "@/hooks/useToggle";
import { useEffect, useRef, useState } from "react";
import { AiOutlineColumnHeight, AiOutlineColumnWidth } from "react-icons/ai";
import { FaLink, FaLinkSlash } from "react-icons/fa6";

const HeightWidthChanger = () => {
    const { activeImage, activeImageProperties, setActiveImageProperties } =
        useActiveImageAndProperties();
    const [aspectRatioLocked, setAspectRatioLocked] = useState<boolean>(true);
    const { canvas } = useCanvas();

    const handleHeightChange = (heightFromInput: number) => {
        const activeImageHeight = activeImage.getScaledHeight();
        const activeImageWidth = activeImage.getScaledWidth();

        const activeImageHeightByWidthRatio =
            activeImageHeight / activeImageWidth;

        const newWidth = heightFromInput / activeImageHeightByWidthRatio;

        // const oldScaleY = activeImage.get("scaleY"); // activeHeight /heightFromInput
        // hence
        const newScaleX = newWidth / (activeImage.width || newWidth);
        const newScaleY =
            heightFromInput / (activeImage.height || heightFromInput);

        if (aspectRatioLocked) {
            activeImage.set("scaleX", newScaleX);
            activeImage.set("scaleY", newScaleY);

            setActiveImageProperties({
                height: activeImage.getScaledHeight(),
                width: activeImage.getScaledWidth(),
            });
        } else {
            activeImage.set("scaleY", newScaleY);
            setActiveImageProperties({
                ...activeImageProperties,
                height: activeImage.getScaledHeight(),
            });
        }

        canvas?.renderAll();
    };
    const handleWidthChange = (widthFromInput: number) => {
        const activeImageWidth = activeImage.getScaledWidth();
        const activeImageHeight = activeImage.getScaledHeight();
        const activeImageWidthByHeightRatio =
            activeImageWidth / activeImageHeight;
        const newHeight = widthFromInput / activeImageWidthByHeightRatio;

        const newScaleY = newHeight / (activeImage.height || newHeight);
        const newScaleX =
            widthFromInput / (activeImage.width || widthFromInput);

        if (aspectRatioLocked) {
            activeImage.set("scaleX", newScaleX);
            activeImage.set("scaleY", newScaleY);

            setActiveImageProperties({
                height: activeImage.getScaledHeight(),
                width: activeImage.getScaledWidth(),
            });
        } else {
            activeImage.set("scaleX", newScaleX);
            setActiveImageProperties({
                ...activeImageProperties,
                width: activeImage.getScaledWidth(),
            });
        }

        canvas?.renderAll();
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
                        value={activeImageProperties.height.toFixed(2)}
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
                        value={activeImageProperties.width.toFixed(2)}
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
                    className="left-0">
                    <div className="bg-white shadow border border-gray-100 rounded-0.625 mt-0.5 right-0 p-0.25">
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
