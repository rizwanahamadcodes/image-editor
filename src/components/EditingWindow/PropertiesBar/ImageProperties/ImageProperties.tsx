import { ActiveImageObjectContext } from "@/context/useActiveImageObject";
import { fabric } from "fabric";
import { useEffect, useState } from "react";
import AspectRatioResetter from "./AspectRatioResetter";
import DeleteObject from "./DeleteObject";
import HeightWidthChanger from "./HeightWidthChanger";
import PositionSetter from "../PositionSetter";

type ImagePropertiesProps = {
    activeImageObject: fabric.Image;
};

export type ImageProperties = {
    height: number;
    width: number;
    aspectRatioLocked: boolean;
};

const ImageProperties = (props: ImagePropertiesProps) => {
    const { activeImageObject: activeImageObjectFromPropertiesBar } = props;
    const [activeImageObject, setActiveImageObject] = useState<fabric.Image>(
        activeImageObjectFromPropertiesBar
    );

    useEffect(() => {
        setActiveImageObject(activeImageObjectFromPropertiesBar);
    }, [activeImageObjectFromPropertiesBar]);

    return (
        <ActiveImageObjectContext.Provider
            value={{
                activeImageObject: activeImageObject,
                setActiveImageObject: setActiveImageObject,
            }}>
            <div className="flex gap-1">
                <AspectRatioResetter activeImageObject={activeImageObject} />
                <HeightWidthChanger />
                <PositionSetter activeObject={activeImageObject} />
                <DeleteObject activeObject={activeImageObject} />
            </div>
        </ActiveImageObjectContext.Provider>
    );
};

export default ImageProperties;
