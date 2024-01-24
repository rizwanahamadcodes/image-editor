import { ImagePropertiesContext } from "@/context/useImageProperties";
import { fabric } from "fabric";
import { useEffect, useState } from "react";
import { AiOutlineColumnHeight, AiOutlineColumnWidth } from "react-icons/ai";
import { FaLink, FaLinkSlash } from "react-icons/fa6";
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

    // height: croppedHeight; get("height") => actual unaltered height of the actual image
    // width: croppedWidth; get("width") => actual unaltered width of the actual image
    // setting height or width crops it
    // setting height and width is non destructive,
    // cropping is destructive

    // alright so scaledWidth is your width
    // alright so scaledHeight is your height

    // if linked scaleToHeight or scaleToWidth easy peasy
    // if unlinked then you're fucked cause you will have to use the scaleX scaleY functions which do not take pixel they take amount 0-1 yayy

    // activeImageObject.scaleToHeight(200, true);
    // activeImageObject.scaleToHeight(100, true);
    // console.log(
    // activeImageObject.get("scaleX"),
    // activeImageObject.get("scaleY")
    // );
    // alert(activeImageObject.getScaledWidth());

    return (
        <ImagePropertiesContext.Provider
            value={{
                imageProperties: imageProperties,
                setImageProperties: setImageProperties,
            }}>
            <HeightWidthChanger />
        </ImagePropertiesContext.Provider>
    );
};

export default ImageProperties;
