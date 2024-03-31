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
        <div className="border-b border-b-gray-100 h-4 shrink-0">
            <FullWidthContainer className="flex flex-row justify-center items-center h-full">
                <div className="flex grow justify-center">
                    {activeObject ? getObjectProperties(activeObject) : <></>}
                </div>

                <SaveAndExport />
            </FullWidthContainer>
        </div>
    );
};
