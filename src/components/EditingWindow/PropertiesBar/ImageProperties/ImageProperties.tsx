import { ImagePropertiesContext } from "@/context/useImageProperties";
import { fabric } from "fabric";
import { useEffect, useState } from "react";
import AspectRatioResetter from "./AspectRatioResetter";
import DeleteObject from "./DeleteObject";
import HeightWidthChanger from "./HeightWidthChanger";

type ImagePropertiesProps = {
    activeImageObject: fabric.Image;
};

export type ImageProperties = {
    height: number;
    width: number;
    aspectRatioLocked: boolean;
};

const ImageProperties = (props: ImagePropertiesProps) => {
    const { activeImageObject } = props;
    const [imageProperties, setImageProperties] = useState<ImageProperties>({
        height: 10,
        width: 100,
        aspectRatioLocked: true,
    });

    useEffect(() => {
        const updateImageProperties = () => {
            const imageHeight = activeImageObject.getScaledHeight();
            const imageWidth = activeImageObject.getScaledWidth();

            setImageProperties((prevImageProperties) => {
                return {
                    ...prevImageProperties,
                    height: imageHeight,
                    width: imageWidth,
                };
            });
        };
        updateImageProperties();
    }, [activeImageObject, activeImageObject.scaleX, activeImageObject.scaleY]);

    return (
        <ImagePropertiesContext.Provider
            value={{
                imageProperties: imageProperties,
                setImageProperties: setImageProperties,
            }}>
            <div className="flex gap-1">
                <AspectRatioResetter />
                <HeightWidthChanger />
                <DeleteObject />
            </div>
        </ImagePropertiesContext.Provider>
    );
};

export default ImageProperties;
