import { fabric } from "fabric";
import { createContext, useContext } from "react";

type ActiveTextObjectContextType = {
    activeTextObject: fabric.Textbox;
    setActiveTextObject: React.Dispatch<React.SetStateAction<fabric.Textbox>>;
};

export const ActiveTextObjectContext =
    createContext<ActiveTextObjectContextType | null>(null);

export const useActiveTextObject = () => {
    const activeTextObject = useContext(ActiveTextObjectContext);

    if (!activeTextObject) {
        throw new Error(
            "useActiveTextObject has to be within <ActiveTextObjectContext.Provide>"
        );
    }

    return activeTextObject;
};
