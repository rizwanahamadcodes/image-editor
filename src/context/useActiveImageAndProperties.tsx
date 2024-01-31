import { Gradient, Pattern } from "fabric/fabric-impl";
import { createContext, useContext } from "react";
import { fabric } from "fabric";

export type ImagePropertiesType = {
    height: number;
    width: number;
};

type ActiveImageAndPropertiesContextType = {
    activeImage: fabric.Image;
    activeImageProperties: ImagePropertiesType;
    setActiveImageProperties: React.Dispatch<
        React.SetStateAction<ImagePropertiesType>
    >;
};

export const ActiveImageAndPropertiesContext =
    createContext<ActiveImageAndPropertiesContextType | null>(null);

export const useActiveImageAndProperties = () => {
    const activeImageAndProperties = useContext(
        ActiveImageAndPropertiesContext
    );

    if (!activeImageAndProperties) {
        throw new Error(
            "useActiveImageAndProperties has to be within <ActiveImageAndPropertiesContext.Provider>"
        );
    }

    return activeImageAndProperties;
};
