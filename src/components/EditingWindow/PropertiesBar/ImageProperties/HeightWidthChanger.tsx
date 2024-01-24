import Button, { ButtonIcon } from "@/components/Button/Button";
import PopOver from "@/components/PopOver/PopOver";
import { useCanvas } from "@/context/useCanvas";
import { useImageProperties } from "@/context/useImageProperties";
import { useToggle } from "@/hooks/useToggle";
import { useRef } from "react";
import { AiOutlineColumnHeight, AiOutlineColumnWidth } from "react-icons/ai";
import { FaLink, FaLinkSlash } from "react-icons/fa6";

const HeightWidthChanger = () => {
    const { imageProperties, setImageProperties } = useImageProperties();
    const { canvas } = useCanvas();

    const setHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newHeight = Number(e.target.value);

        setImageProperties((prevImageProperties) => {
            return {
                ...prevImageProperties,
                height: parseInt(newHeight.toFixed(2)),
            };
        });

        const activeObject = canvas?.getActiveObject();
        if (!activeObject || !activeObject.isType("image")) {
            return;
        }

        const activeImageObject = activeObject as fabric.Image;

        const activeImageHeight = activeImageObject.getScaledHeight();
        const activeImageWidth = activeImageObject.getScaledWidth();
        const activeImageHeightByWidthRatio =
            activeImageHeight / activeImageWidth;
        const newWidth = newHeight / activeImageHeightByWidthRatio;

        // const oldScaleY = activeImageObject.get("scaleY"); // activeHeight / height

        // hence
        const newScaleX = newWidth / (activeImageObject.width || newWidth);
        const newScaleY = newHeight / (activeImageObject.height || newHeight);

        if (imageProperties.aspectRatioLocked) {
            activeImageObject.set("scaleX", newScaleX);
            activeImageObject.set("scaleY", newScaleY);
        } else {
            activeImageObject.set("scaleY", newScaleY);
        }

        console.log(canvas?.getZoom());
        canvas?.renderAll();
    };
    const setWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newWidth = Number(e.target.value);

        setImageProperties((prevImageProperties) => {
            return {
                ...prevImageProperties,
                width: parseInt(newWidth.toFixed(2)),
            };
        });

        const activeObject = canvas?.getActiveObject();
        if (!activeObject || !activeObject.isType("image")) {
            return;
        }

        const activeImageObject = activeObject as fabric.Image;

        const activeImageWidth = activeImageObject.getScaledWidth();
        const activeImageHeight = activeImageObject.getScaledHeight();
        const activeImageWidthByHeightRatio =
            activeImageWidth / activeImageHeight;
        const newHeight = newWidth / activeImageWidthByHeightRatio;

        const newScaleY = newHeight / (activeImageObject.height || newHeight);
        const newScaleX = newWidth / (activeImageObject.width || newWidth);

        if (imageProperties.aspectRatioLocked) {
            activeImageObject.set("scaleX", newScaleX);
            activeImageObject.set("scaleY", newScaleY);
        } else {
            activeImageObject.set("scaleX", newScaleX);
        }

        canvas?.renderAll();
    };

    const flipAspectRatioLockedStatus = () => {
        setImageProperties((prevImageProperties) => {
            return {
                ...prevImageProperties,
                aspectRatioLocked: !prevImageProperties.aspectRatioLocked,
            };
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
                        value={imageProperties.height.toFixed(2)}
                        className="text-gray-600 font-medium min-w-0 w-4 h-2 rounded-0.25 focus:outline-none px-0.25"
                        onChange={(e) => {
                            setHeight(e);
                        }}
                    />
                </div>
                <div
                    className="h-1.25 w-2 flex justify-center"
                    onClick={flipAspectRatioLockedStatus}>
                    {imageProperties.aspectRatioLocked ? (
                        <FaLink className={linkIconClasses} />
                    ) : (
                        <FaLinkSlash className={linkIconClasses} />
                    )}
                </div>
                <div className="flex items-center h-2 overflow-hidden hover:border-gray-400 px-0.25 rounded-0.25 border-gray-200 border gap-0.25 group/dimensionGroup has-[:focus]:shadow-halo-gray-500">
                    <AiOutlineColumnWidth className="text-gray-500 text-1.25 group-hover/dimensionGroup:text-gray-700 group-has-[:focus]/dimensionGroup:text-gray-700" />
                    <input
                        type="number"
                        value={imageProperties.width.toFixed(2)}
                        className="text-gray-600 font-medium min-w-0 w-4 h-2 rounded-0.25 focus:outline-none px-0.25"
                        onChange={(e) => {
                            setWidth(e);
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
            <span className="hidden sm:inline-block">
                {heightWidthChangerCore()}
            </span>
            <div className="relative h-2 sm:hidden">
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
                    colorScheme="gray-200"
                    btnRef={buttonRef}
                    onClick={toggle}>
                    <ButtonIcon icon={AiOutlineColumnWidth} />
                </Button>
            </div>
        </>
    );
};

export default HeightWidthChanger;
