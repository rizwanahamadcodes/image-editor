import { FullWidthContainer } from "@/components/Container";
import ShapeProperties from "@/components/EditingWindow/PropertiesBar/ShapeProperties/ShapeProperties";
import TextProperties from "@/components/EditingWindow/PropertiesBar/TextProperties/TextProperties";
import { useCanvas } from "@/context/useCanvas";
import { useEffect, useState } from "react";
import ImageProperties from "./ImageProperties/ImageProperties";
import SaveAndExport from "./SaveAndExport";

type PropertiesBarProps = {};
export const PropertiesBar = (props: PropertiesBarProps) => {
    const {} = props;
    const { canvas } = useCanvas();
    const [activeObject, setActiveObject] = useState<fabric.Object | null>(
        null
    );

    useEffect(() => {
        if (canvas) {
            canvas.on("selection:created", () => {
                const activeObject = canvas.getActiveObject();
                setActiveObject(activeObject);
            });
            canvas.on("selection:updated", () => {
                const activeObject = canvas.getActiveObject();
                setActiveObject(() => activeObject);
            });

            canvas.on("selection:cleared", () => {
                const activeObject = canvas.getActiveObject();
                setActiveObject(null);
            });
        }
    }, [canvas]);

    const getObjectProperties = (activeObject: fabric.Object) => {
        switch (activeObject.type) {
            case "textbox":
                {
                    const activeTextbox = activeObject as fabric.Textbox;
                    return (
                        <>
                            <TextProperties activeTextbox={activeTextbox} />
                        </>
                    );
                }
                break;
            case "image":
                const activeImage = activeObject as fabric.Image;
                return <ImageProperties activeImage={activeImage} />;
                break;
            case "rect":
            case "ellipse":
                const activePolygon = activeObject as fabric.Polygon;
                return <ShapeProperties activePolygon={activePolygon} />;
                break;
            default:
                return <p></p>;
        }

        return;
    };

    return (
        <div className="h-4 flex gap-0.5">
            <div className="flex grow justify-center rounded-0.875 shrink-0 bg-white">
                {activeObject ? getObjectProperties(activeObject) : <></>}
            </div>
            <div className="rounded-0.875 p-0.375 h-full w-4 shrink-0 bg-white">
                <button className="h-3.25 text-gray-500 items-center flex justify-center rounded-0.5 flex-col w-full hover:text-gray-800 hover:bg-gray-100">
                    <SaveAndExport />
                </button>
            </div>
        </div>
    );
};
