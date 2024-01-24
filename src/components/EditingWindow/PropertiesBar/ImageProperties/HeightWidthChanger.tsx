import { useCanvas } from "@/context/useCanvas";
import { useImageProperties } from "@/context/useImageProperties";
import { AiOutlineColumnHeight, AiOutlineColumnWidth } from "react-icons/ai";
import { FaLink, FaLinkSlash } from "react-icons/fa6";

const HeightWidthChanger = () => {
    const { imageProperties, setImageProperties } = useImageProperties();
    const { canvas } = useCanvas();

    const setHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newHeight = Number(e.target.value);

        setImageProperties((prevImageProperties) => {
            return { ...prevImageProperties, height: newHeight };
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
            return { ...prevImageProperties, width: newWidth };
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

        console.log(canvas?.getZoom());
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

    return (
        <div className="flex items-center">
            <div className="flex items-center h-2 overflow-hidden hover:border-gray-400 px-0.25 rounded-0.25 border-gray-200 border gap-0.25 group/dimensionGroup has-[:focus]:shadow-halo-gray-500">
                <AiOutlineColumnHeight className="text-gray-500 text-1.25 group-hover/dimensionGroup:text-gray-700 group-has-[:focus]/dimensionGroup:text-gray-700" />
                <input
                    type="number"
                    value={imageProperties.height}
                    className="text-gray-600 font-medium min-w-0 w-4 h-2 rounded-0.25 focus:outline-none px-0.25"
                    onChange={(e) => {
                        setHeight(e);
                    }}
                />
            </div>
            {imageProperties.aspectRatioLocked ? (
                <div
                    className="h-1.25 w-2 border-y border-y-200 flex justify-center"
                    onClick={flipAspectRatioLockedStatus}>
                    <FaLink className="text-gray-500 cursor-pointer hover:text-gray-700" />
                </div>
            ) : (
                <div
                    className="h-1.25 w-2 flex justify-center border border-transparent"
                    onClick={flipAspectRatioLockedStatus}>
                    <FaLinkSlash className="text-gray-500 cursor-pointer hover:text-gray-700" />
                </div>
            )}
            <div className="flex items-center h-2 overflow-hidden hover:border-gray-400 px-0.25 rounded-0.25 border-gray-200 border gap-0.25 group/dimensionGroup has-[:focus]:shadow-halo-gray-500">
                <AiOutlineColumnWidth className="text-gray-500 text-1.25 group-hover/dimensionGroup:text-gray-700 group-has-[:focus]/dimensionGroup:text-gray-700" />
                <input
                    type="number"
                    value={imageProperties.width}
                    className="text-gray-600 font-medium min-w-0 w-4 h-2 rounded-0.25 focus:outline-none px-0.25"
                    onChange={(e) => {
                        setWidth(e);
                    }}
                />
            </div>
        </div>
    );
};

export default HeightWidthChanger;
