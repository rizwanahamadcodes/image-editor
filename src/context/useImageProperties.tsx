import { createContext, useContext } from "react";
import { ImageProperties } from "@/components/EditingWindow/PropertiesBar/ImageProperties/ImageProperties";

type ImagePropertiesContextType = {
    imageProperties: ImageProperties;
    setImageProperties: React.Dispatch<React.SetStateAction<ImageProperties>>;
};

export const ImagePropertiesContext =
    createContext<ImagePropertiesContextType | null>(null);

export const useImageProperties = () => {
    const imageProperties = useContext(ImagePropertiesContext);

    if (!imageProperties) {
        throw new Error(
            "useImageProperties has to be within <ImagePropertiesContext.Provide>"
        );
    }

    return imageProperties;
};
