import { createContext, useContext } from "react";

type ActiveImageObjectContextType = {
    activeImageObject: fabric.Image;
    setActiveImageObject: React.Dispatch<React.SetStateAction<fabric.Image>>;
};

export const ActiveImageObjectContext =
    createContext<ActiveImageObjectContextType | null>(null);

export const useActiveImageObject = () => {
    const activeImageObject = useContext(ActiveImageObjectContext);

    if (!activeImageObject) {
        throw new Error(
            "useActiveImageObject has to be within <ActiveImageObjectContext.Provider>"
        );
    }

    return activeImageObject;
};
