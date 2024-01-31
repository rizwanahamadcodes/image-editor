import {
    ActiveImageAndPropertiesContext,
    ImagePropertiesType,
} from "@/context/useActiveImageAndProperties";
import { fabric } from "fabric";
import { useEffect, useState } from "react";
import AspectRatioResetter from "./AspectRatioResetter";
import DeleteObject from "./DeleteObject";
import HeightWidthChanger from "./HeightWidthChanger";
import PositionSetter from "../PositionSetter";

type ImagePropertiesProps = {
    activeImage: fabric.Image;
};

const ImageProperties = (props: ImagePropertiesProps) => {
    const { activeImage } = props;

    const getImagePropertiesFromImage = (
        image: fabric.Image
    ): ImagePropertiesType => {
        return {
            height: image.getScaledHeight(),
            width: image.getScaledWidth(),
        };
    };

    const [activeImageAndProperties, setActiveImageProperties] =
        useState<ImagePropertiesType>(getImagePropertiesFromImage(activeImage));

    const updateImagePropertiesToActiveImage = () => {
        setActiveImageProperties(getImagePropertiesFromImage(activeImage));
    };

    useEffect(() => {
        updateImagePropertiesToActiveImage();

        activeImage.on("modified", updateImagePropertiesToActiveImage);
        return () => {
            activeImage.off("modified", updateImagePropertiesToActiveImage);
        };
    }, [activeImage]);

    return (
        <ActiveImageAndPropertiesContext.Provider
            value={{
                activeImage: activeImage,
                activeImageProperties: activeImageAndProperties,
                setActiveImageProperties: setActiveImageProperties,
            }}>
            <div className="flex gap-1">
                <AspectRatioResetter />
                <HeightWidthChanger />
                <PositionSetter activeObject={activeImage} />
                <DeleteObject activeObject={activeImage} />
            </div>
        </ActiveImageAndPropertiesContext.Provider>
    );
};

export default ImageProperties;
