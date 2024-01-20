import { fabric } from "fabric";
import { createContext, useContext } from "react";

type CanvasContextType = {
    canvas: fabric.Canvas | null;
    setCanvas: React.Dispatch<React.SetStateAction<fabric.Canvas | null>>;
};

export const CanvasContext = createContext<CanvasContextType | null>(null);

export const useCanvas = () => {
    const canvas = useContext(CanvasContext);

    if (!canvas) {
        throw new Error("useCanvas has to be within <CanvasContext.Provide>");
    }

    return canvas;
};
