import { FullWidthContainer } from "@/components/Container";
import TextProperties from "@/components/EditingWindow/PropertiesBar/TextProperties/TextProperties";
import { useCanvas } from "@/context/useCanvas";
import { useEffect, useState } from "react";
import ImageProperties from "./ImageProperties/ImageProperties";

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

    console.log(activeObject);

    const getObjectProperties = (activeObject: fabric.Object) => {
        switch (activeObject.type) {
            case "textbox":
                {
                    const activeTextObject = activeObject as fabric.Textbox;
                    return (
                        <>
                            <TextProperties
                                activeTextObject={activeTextObject}
                            />
                        </>
                    );
                }
                break;
            case "image":
                const activeImageObject = activeObject as fabric.Image;
                return (
                    <></>
                    // <ImageProperties activeImageObject={activeImageObject} />
                );
                break;
            default:
                return <p>No properties</p>;
        }

        return;
    };

    return (
        <div className="border-b border-b-gray-100 h-4 shrink-0">
            <FullWidthContainer className="flex flex-col justify-center items-center h-full">
                <div>
                    {activeObject ? getObjectProperties(activeObject) : <></>}
                </div>
            </FullWidthContainer>
        </div>
    );
};
