import { Gradient, Pattern } from "fabric/fabric-impl";
import { createContext, useContext } from "react";
import { fabric } from "fabric";

export type PolygonPropertiesType = {
    height: number;
    width: number;
    color: string | Pattern | Gradient;
    opacity: number;
};

type ActivePolygonAndPropertiesContextType = {
    activePolygon: fabric.Polygon;
    activePolygonProperties: PolygonPropertiesType;
    setActivePolygonProperties: React.Dispatch<
        React.SetStateAction<PolygonPropertiesType>
    >;
};

export const ActivePolygonAndPropertiesContext =
    createContext<ActivePolygonAndPropertiesContextType | null>(null);

export const useActivePolygonAndProperties = () => {
    const activePolygonAndProperties = useContext(
        ActivePolygonAndPropertiesContext
    );

    if (!activePolygonAndProperties) {
        throw new Error(
            "useActivePolygonAndProperties has to be within <ActivePolygonAndPropertiesContext.Provider>"
        );
    }

    return activePolygonAndProperties;
};
