import {
    ActivePolygonAndPropertiesContext,
    PolygonPropertiesType,
} from "@/context/useActivePolygonAndProperties";
import { fabric } from "fabric";
import { useEffect, useState } from "react";
import HeightWidthChanger from "./HeightWidthChanger";
import DeleteObject from "../ImageProperties/DeleteObject";
import OpacityChanger from "./OpacityChanger";
import PositionSetter from "../PositionSetter";
import ColorSelector from "./ColorSelector";

type TextPropertiesProps = {
    activePolygon: fabric.Polygon;
};

const TextProperties = (props: TextPropertiesProps) => {
    const { activePolygon } = props;

    const getPolygonPropertiesFromPolygon = (
        activePolygon: fabric.Polygon
    ): PolygonPropertiesType => {
        return {
            color: activePolygon.get("fill") || "#000000",
            height: activePolygon.getScaledHeight() || 100,
            width: activePolygon.getScaledWidth() || 100,
            opacity: activePolygon.get("opacity") || 1,
        };
    };

    const [activePolygonAndProperties, setActiveTextProperties] =
        useState<PolygonPropertiesType>(
            getPolygonPropertiesFromPolygon(activePolygon)
        );

    const updatePolygonPropertiesToActivePolygon = () => {
        setActiveTextProperties(getPolygonPropertiesFromPolygon(activePolygon));
    };

    useEffect(() => {
        updatePolygonPropertiesToActivePolygon();

        activePolygon.on("modified", updatePolygonPropertiesToActivePolygon);

        return () => {
            activePolygon.off(
                "modified",
                updatePolygonPropertiesToActivePolygon
            );
        };
    }, [activePolygon]);

    return (
        <ActivePolygonAndPropertiesContext.Provider
            value={{
                activePolygon: activePolygon,
                activePolygonProperties: activePolygonAndProperties,
                setActivePolygonProperties: setActiveTextProperties,
            }}>
            <div className="flex gap-1">
                <HeightWidthChanger />
                <OpacityChanger />
                <ColorSelector />
                <PositionSetter activeObject={activePolygon} />
                <DeleteObject activeObject={activePolygon} />
            </div>
        </ActivePolygonAndPropertiesContext.Provider>
    );
};

export default TextProperties;
